import React from "react";
import ServerStatus from "./ServerStatus";

const servers = [
  { name: "Server 1", ipAddress: "192.168.1.1" },
  { name: "Server 2", ipAddress: "192.168.1.2" },
  { name: "Server 3", ipAddress: "192.168.1.3" },
];

const ServerList = () => {
  return (
    <div>
      <h1>Server Status</h1>
      <ul>
        {servers.map((server) => (
          <li key={server.ipAddress}>
            {server.name}: <ServerStatus ipAddress={server.ipAddress} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerList;