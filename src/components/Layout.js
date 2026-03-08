import React, {useState} from 'react';
import MainHeader from './MainHeader.js';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ activeNavChoice, isLoggedIn, setIsLoggedIn }) => {
    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
    setShowLogout(true)
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader
        activeNavChoice={activeNavChoice}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        handleLogout={handleLogout}
        showLogout={showLogout}
        setShowLogout={setShowLogout}
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer
        activeNavChoice={activeNavChoice}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default Layout;
