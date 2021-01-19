import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchIcon.scss'

function SearchIcon({ children }) {
  return (
    <div className="search-icon">
      <Icon icon={faSearch} />
    </div>
  )
}

export default SearchIcon
