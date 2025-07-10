import React from 'react';
import './About.css';
import { FiZap, FiRepeat, FiSun, FiShield } from 'react-icons/fi';
import group from '../assets/about/teamup.jpg';
import OfficeSpace from '../assets/about/office.jpg';
import teams from '../assets/about/cool.png';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero-full">
        <div className="about-hero-content">
          <h1>AMSA</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span>›</span>
            <span className="current">About</span>
          </div>
        </div>
      </section>

      <section className="tagline-section">
        <h2>Helping businesses scale <br />with future-ready tech</h2>
        <img src={group} alt="group" className="group-image" />
      </section>

      <section className="stats-section">
        <div className="stat-box">
          <h2>100+</h2>
          <p>Projects Delivered</p>
        </div>
        <div className="stat-box">
          <h2>95%</h2>
          <p>Client Retention Rate</p>
        </div>
        <div className="stat-box">
          <h2>5+</h2>
          <p>Countries Served</p>
        </div>
        <div className="stat-box">
          <h2>30%</h2>
          <p>Faster Time-to-Market</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-text">
            <h2>Delivering the Best in Tech Solutions</h2>
            <p>
             <b>AMSA</b> Enterprise is a Pune-based software development company specializing in SAP technologies and enterprise-grade IT solutions. With clients across multiple industries and geographies, we’re known for our commitment to quality, innovation, and customer satisfaction.
            </p>
            <p>
              Our mission is to empower organizations through transformative IT solutions, driven by SAP and next-gen enterprise technologies.
            </p>
            <p>
              Our vision is to become a globally recognized partner for digital transformation through SAP and ERP innovation.
            </p>
            <p>
              Founded in Pune, we have rapidly grown into a reliable SAP partner for businesses worldwide. Our team comprises certified developers, consultants, analysts, and creative minds committed to delivering excellence.
            </p>
            <a href="/contact" className="mission-button">Get in touch</a>
          </div>
          <div className="mission-image-wrapper">
            <img src={teams} alt="teams" className="teams-image" />
          </div>
        </div>
      </section>

      <section className="core-values">
        <div className="core-values-container">
          <h2>The Core Values Behind Our Work</h2>
          <hr className="underline" />
          <div className="values-grid">
            <div className="value-item">
              <div className="icon-title">
                <FiZap className="value-icon" />
                <h3>Innovation</h3>
              </div>
              <p>
                We embrace change and continuously improve. We explore emerging technologies to deliver forward-thinking solutions that drive progress.
              </p>
            </div>

            <div className="value-item">
              <div className="icon-title">
                <FiRepeat className="value-icon" />
                <h3>Excellence</h3>
              </div>
              <p>
                We aim for the highest standards in every project, delivering quality work with a passionate and detail-driven team.
              </p>
            </div>

            <div className="value-item">
              <div className="icon-title">
                <FiSun className="value-icon" />
                <h3>Collaboration</h3>
              </div>
              <p>
                We work as one team, internally and with clients. Strong partnerships and open communication lead to success.
              </p>
            </div>

            <div className="value-item">
              <div className="icon-title">
                <FiShield className="value-icon" />
                <h3>Integrity</h3>
              </div>
              <p>
                We build trust through transparency and ethical practices—earning it through every interaction and outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <img src={OfficeSpace} alt="Office space" className="office-image" />
          <div className="contact-text">
            <h2>Let's Build Something Smart Together</h2>
            <p>
              We’re passionate about making AI and advanced technology accessible, impactful,
              and tailored to your business goals. Let’s connect and explore how we can turn
              your vision into reality.
            </p>
            <p>
              <strong>Email:</strong> <span className="contact-email">support@AMSA.com</span>
            </p>
            <p>
              <strong>Phone:</strong> <span className="contact-phone">+91 (918) 123–4567</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
