import React from 'react';

const Card = ({ title, children }) => (
  <div style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px 0',
    backgroundColor: '#fff'
  }}>
    {title && <h3>{title}</h3>}
    <div>{children}</div>
  </div>
);

export default Card;
