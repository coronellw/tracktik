import React from 'react';
import './Heading.scss'

function Heading({ children }) {
  return (
    <h3 className="heading">
      {children}
    </h3>
  );
}

export default Heading;
