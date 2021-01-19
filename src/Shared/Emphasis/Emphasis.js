import React from 'react';
import './Emphasis.scss';

function Emphasis({children}) {
  return (
    <span className="emphasis">
      {children}
    </span>
  )
}

export default Emphasis
