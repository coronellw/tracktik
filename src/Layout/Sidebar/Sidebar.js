import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink to="/" activeClassName="sidebar__selected">
            Home
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/sites" activeClassName="sidebar__selected">
            Sites
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
