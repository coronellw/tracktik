import React from 'react';
import './SubHeading.scss';

function SubHeading({ children }) {
  return (
    <h4 className="subheading">
      {children}
    </h4>
  );
}

export default SubHeading;
