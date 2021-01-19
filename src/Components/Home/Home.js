import React from 'react';
import { NavLink } from 'react-router-dom';
import { Emphasis } from '../../Shared';

function Home() {
  return (
    <div className="home">
      <Emphasis>Welcome to Home page</Emphasis>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Sites">
            Sites
          </NavLink>
        </li>
        <li>
          <NavLink to="/About">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Home;
