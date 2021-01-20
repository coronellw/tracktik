import React, { useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../Store/actions';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar(props) {
  const { toggleMenu, isOpen } = props;
  
  // I need handleClick to not mutate over time so we can use it inside useEffect
  const handleClickOutside = useCallback(e => {
    if (isOpen && ref.current && !ref.current.contains(e.target)) {
      toggleMenu();
    }
  }, [toggleMenu, isOpen]);

  // this useEffect will attach the listener to the document so that we can compare the reference
  // and know when users click outside the sidebar
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [handleClickOutside])

  // ref to contain the sidebar div in orter to compare it to event target
  const ref = useRef();

  return (
    <div ref={ref} className={`sidebar ${isOpen ? 'show' : 'hide'}`}>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink to="/" activeClassName="sidebar__selected" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/sites" activeClassName="sidebar__selected" onClick={toggleMenu}>
            Sites
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  const { isOpen } = state.menu;
  return { isOpen }
}

export default connect(mapStateToProps, { toggleMenu })(Sidebar);
