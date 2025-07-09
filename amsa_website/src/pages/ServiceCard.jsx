import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-card-icon-wrapper">
      {icon} 
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ServiceCard;