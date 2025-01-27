import React from 'react';
import './app.css'; // Import global styles
import Navbar from '../../components/devices/Navbar';
import DeviceManagement from '../../components/devices/DeviceManagement';

export default function App() {
  return (
    <div className="layout">
      {/* Navbar */}
      <div className="navbar">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <DeviceManagement />
      </div>
    </div>
  );
}
