import React, { useEffect, useState } from 'react';
import ServerStatus from './components/ServerStatus';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
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
      <Sidebar />

      {/* Content */}
      <div className="content-wrapper">
        {/* Header */}
        <Header />

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
        <Footer />
      </div>
    </div>
  );
};

export default App;
