import React, { useState } from 'react';

const ServerStatus = () => {
  const [status, setStatus] = useState('');

  const checkServerStatus = async () => {
    try {
      const response = await fetch('/api/status');
      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      console.error('Error checking server status:', error);
      setStatus('Error');
    }
  };

  return (
    <div>
      <button onClick={checkServerStatus}>Check Server Status</button>
      <p>Server Status: {status}</p>
    </div>
  );
};

export default ServerStatus;
