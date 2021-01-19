import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTh, faBars } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../../Shared';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__menu"><Icon icon={faBars} /></div>
      <Title>Scheduling</Title>
      <div className="header__other">
        <span className="grid"><Icon icon={faTh}/></span>
        <span className="header__photo">D</span>
      </div>
    </div>
  )
}

export default Header;
