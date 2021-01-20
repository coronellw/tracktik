import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../Store/actions'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTh, faBars } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../../Shared';
import './Header.scss';

function Header(props) {
  const { toggleMenu } = props;
  return (
    <div className="header">
      <div className="header__menu"><Icon icon={faBars} onClick={toggleMenu} /></div>
      <Title>Siter</Title>
      <div className="header__other">
        <span className="grid"><Icon icon={faTh}/></span>
        <span className="header__photo">W</span>
      </div>
    </div>
  )
}

export default connect(undefined, { toggleMenu })(Header);
