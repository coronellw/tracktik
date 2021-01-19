import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import './Layout.scss';

function Layout({children}) {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <div className="body">{children}</div>
    </div>
  );
}

export default Layout;
