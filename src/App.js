import React, { useState } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import './App1.css'; // Import the CSS file

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className='App'>
      <Header />
      <div className={`sidebar ${isSidebarVisible ? 'active' : ''}`}>
        <Sidebar />
      </div>
      <div className={`dashboard ${isSidebarVisible ? 'shifted' : ''}`}>
        <Dashboard />
      </div>
      <div className={`menu-bar ${isSidebarVisible ? 'hidden' : ''}`}>
        <div className="menu-bar-btn" onClick={toggleSidebar}>
          ☰ 
        </div>
      </div>
    </div>
  );
}

export default App;
