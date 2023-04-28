import React, { useState, useEffect } from "react";
import axios from "axios";

const ServerStatus = ({ ipAddress }) => {
  const [status, setStatus] = useState("offline");

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await axios.get(`http://${ipAddress}`);
        if (response.status === 200) {
          setStatus("online");
        } else {
          setStatus("offline");
        }
      } catch (error) {
        setStatus("offline");
      }
    };
    checkServerStatus();
    const intervalId = setInterval(checkServerStatus, 5000); // check server status every 5 seconds
    return () => clearInterval(intervalId);
  }, [ipAddress]);

  return (
    <span style={{ color: status === "online" ? "green" : "red" }}>
      {status}
    </span>
  );
};

export default ServerStatus;