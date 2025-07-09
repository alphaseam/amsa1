import React from 'react';
import './Technologies.css';

const techList = [' Manufacturing', 'Reatail& E-commorce', 'Logistics & Supply Chain', 'Healthcare ', ' Public sector '];

const Technologies = () => (
  <section className="technologies-section">
    <h2>Technologies We Use</h2>
    <div className="tech-grid">
      {techList.map((tech, i) => (
        <div key={i} className="tech-item">{tech}</div>
      ))}
    </div>
  </section>
);

export default Technologies;