import React from 'react';
import './Paragraph.scss'

function Paragraph({ children }) {
  return (
    <p className="paragraph">
      {children}
    </p>
  )
}

export default Paragraph
