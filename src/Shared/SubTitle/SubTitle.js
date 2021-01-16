import React from 'react';
import './SubTitle.scss';

function Subtitle({children}) {
  return (
    <div>
      <h2 className="subtitle">
        {children}
      </h2>
    </div>
  );
}

export default Subtitle;
