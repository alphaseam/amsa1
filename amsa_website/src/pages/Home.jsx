import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';
import teamImage from '../assets/home/team-meeting.png';
import smartImage from '../assets/home/home1.jpg';
import chipImage from '../assets/home/home2.jpg';
import Chart from '../assets/home/home3.jpg';
import { FaLaptopCode, FaCloud, FaShieldAlt, FaBrain, FaCheckCircle, FaRocket, FaBookOpen, FaSeedling } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Smarter Solutions.<br />
              Stronger Growth.
            </h1>
            <p>
              Amsa delivers cutting-edge digital solutions to help businesses innovate, grow, and stay secure.
              From development to AI and cloud services, we empower smarter operations and seamless digital transformation.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn primary"
                  onClick={() => navigate("/Contact")}
              >
                  Get in Touch
                </button>
              <button className="btn secondary">Explore Services</button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img src={teamImage} alt="Team meeting" className="hero-image" />
          </div>
        </div>
      </section>


      <section className="features-section">
        <div className="features-container">
          <header>
            <h2>Features That Drive Success</h2>
            <p className="subtitle">
              Discover the powerful capabilities that help businesses thrive in today's competitive landscape
            </p>
          </header>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaLaptopCode />
              </div>
              <h3>Custom Development</h3>
              <p>
                Build web and mobile applications to meet your business needs with speed, scalability, and precision.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaCloud />
              </div>
              <h3>Cloud Solutions</h3>
              <p>
                Leverage secure and flexible cloud infrastructure to enhance performance, collaboration, and business continuity.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Cybersecurity & IT Support</h3>
              <p>
                Protect your data and systems with robust security solutions and reliable technical support for ongoing peace of mind.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaBrain />
              </div>
              <h3>AI & Data-Driven Insights</h3>
              <p>
                Turn data into decisions with AI-powered analytics that optimize operations and reveal growth opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="split-section">
        <div className="split-left">
          <img src={smartImage} alt="Smart tech" className="smart-tech" />
        </div>
        <div className="split-right">
          <h2>Smart Tech. Fair Access.</h2>
          <p>
            Amsa empowers growing businesses with enterprise-grade solutions—without the enterprise price tag.
            Our services make advanced technologies like AI, cloud, and cybersecurity accessible to startups, small teams,
            and non-technical founders.
          </p>
        </div>
      </section>

      <section className="split-section">
        <div className="split-right">
          <h2>Smart Solutions for Every Stage</h2>
          <p>
            At Amsa, we bridge the gap between innovation and accessibility. Our expert-driven services help startups and growing businesses harness the power of modern technology—without the complexity or high cost.
          </p>
          <ul className="list-with-icons">
            <li><FaCheckCircle className="check-icon" /> Affordable Access to Advanced Tech</li>
            <li><FaCheckCircle className="check-icon" /> Done-for-You Expertise</li>
            <li><FaCheckCircle className="check-icon" /> Built to Scale with You</li>
          </ul>
        </div>
        <div className="split-left">
          <img src={chipImage} alt="Tech innovation" className="tech" />
        </div>
      </section>


      <section className="feature-banner-section">
        <div className="feature-banner">
          <div className="banner-left">
            <img src={Chart} alt="Analytics" />
          </div>
          <div className="banner-right">
            <h2>Scalable Solutions<br />That Grow With You</h2>
            <p>
              ThinkStratums delivers flexible digital services that evolve with your business.
              Whether you're scaling your app, securing your data, or expanding your digital reach,
              our solutions adapt to meet your changing needs — without disruption.
            </p>

            <div className="stats-row">
              <div className="stat-box">
                <span className="stat-number">88%</span>
                <p>Clients improved project delivery speed</p>
              </div>
              <div className="stat-box">
                <span className="stat-number">70%</span>
                <p>Reduced IT and infrastructure overhead</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
