import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServerStatus from './components/ServerStatus';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await axios.get(
          'https://api.example.com/rest-endpoint' // Replace with the actual REST endpoint URL
        );
        setServerData(response.data);
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
