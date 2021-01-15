import React from 'react';
import Header from './Header/Header';

function Layout({children}) {
  return (
    <div>
      <Header />
      <div className="body">{children}</div>
    </div>
  );
}

export default Layout;
