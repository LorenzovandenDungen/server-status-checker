import React, { useEffect, useState } from 'react';
import ServerStatus from './components/ServerStatus';
import './App.css';

const App = () => {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    // Simulating API fetch call
    const fetchServerStatus = async () => {
      try {
        // Make your API call here to fetch server status data
        // Example using fetch:
        const response = await fetch('YOUR_SERVER_STATUS_API_ENDPOINT');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.log('Error fetching server status:', error);
      }
    };

    fetchServerStatus();
  }, []);

  return (
    <div className="wrapper">
      {/* Sidebar */}
      <aside className="main-sidebar">
        {/* Add your sidebar content here */}
      </aside>

      {/* Content */}
      <div className="content-wrapper">
        {/* Header */}
        <header className="main-header">
          {/* Add your header content here */}
        </header>

        {/* Page content */}
        <div className="content">
          <h1>Server Status Checker</h1>
          {serverData.map(server => (
            <ServerStatus
              key={server.id}
              name={server.name}
              status={server.status}
              details={server.details}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="main-footer">
          {/* Add your footer content here */}
        </footer>
      </div>
    </div>
  );
};

export default App;
