import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

import { SiSap } from "react-icons/si";
import { SiErpnext } from "react-icons/si";
import { GrSystem } from "react-icons/gr";
import { SiBmcsoftware } from "react-icons/si";

const services = [
  { title: " SAP Implementation & Customization ", description: "  Deploy, configure, and tailor SAP systems to meet the unique needs of your enterprise. ", icon:<SiSap /> },
  { title: " ERP Software Developmen ", description: " Custom-built ERP applications that help manage everything from finance and HR to inventoyand sales. ", icon:<SiErpnext /> },
  { title: "System Integration & Support ", description: "  Achieve seamless system communication and enjoy round-the-clock technical support . ", icon:<GrSystem />  },
  { title: " IT Strategy & Consulting ", description: "   Receive expert advice on digital transformation, infrastructure upgrades, and technology adoption. ", icon:<SiBmcsoftware /> },

  

]
  const Services = () => (
  <section className="services-section">
    <h2>Our Services</h2>
    <div className="services-grid">
      {services.map((s, i) => <ServiceCard key={i} {...s} />)}
    </div>
  </section>
);

export default Services;