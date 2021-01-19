import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../Store/actions';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar(props) {
  const {isOpen} = props;
  return (
    <div className={`sidebar ${isOpen ? 'show' : 'hide'}`}>
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

const mapStateToProps = state => {
  return { isOpen: state.isOpen }
}

export default connect(mapStateToProps, { toggleMenu })(Sidebar);
