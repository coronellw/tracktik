import React from 'react';
import './Emphasis.scss';

function Emphasis({children, classes}) {
  return (
    <span className={`emphasis ${Array.isArray(classes) ? classes.join(' '):''}`}>
      {children}
    </span>
  )
}

export default Emphasis
