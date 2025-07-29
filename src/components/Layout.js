import React from 'react';
import MainHeader from './MainHeader.js';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ activeNavChoice, isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader
        activeNavChoice={activeNavChoice}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer
        activeNavChoice={activeNavChoice}
      />
    </div>
  );
};

export default Layout;
