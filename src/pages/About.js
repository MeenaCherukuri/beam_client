import React, { useEffect } from "react";
import "../style.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-page">
      <head>
        <title>𝐁𝐄𝐀𝐌-𝐀𝐛𝐨𝐮𝐭</title>
      </head>
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About <span className="highlight">BEAM</span></h1>
        <p>
          BEAM — <strong>Business Engagement Architecture for Marketplaces</strong> — 
          is designed to redefine how businesses and top talent connect, 
          collaborate, and grow. Unlike traditional freelance platforms, BEAM 
          builds meaningful, long-term engagements with transparency, 
          trust, and measurable outcomes.
        </p>
      </section>

      {/* Vision Section */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          We envision a world where businesses and skilled professionals can 
          collaborate seamlessly without the noise of unreliable gigs or 
          overpriced intermediaries. With BEAM, we bring curated opportunities, 
          smart matchmaking, and long-term value creation.
        </p>
      </section>

      {/* Why BEAM Section */}
      <section className="about-section">
        <h2>Why BEAM?</h2>
        <ul className="why-beam-list">
          <li><strong>Curated Talent Pool:</strong> Unlike Fiverr or Upwork, BEAM ensures only vetted, reliable professionals.</li>
          <li><strong>Trust & Transparency:</strong> Clear engagement models with measurable outcomes, not one-time gigs.</li>
          <li><strong>Smart Matching:</strong> AI-driven connections, faster than Toptal’s manual vetting yet equally reliable.</li>
          <li><strong>Scalable Growth:</strong> Designed for startups, enterprises, and entrepreneurs to thrive together.</li>
          <li><strong>Beyond Gigs:</strong> Unlike GigU or others, BEAM focuses on business architecture, not just tasks.</li>
        </ul>
      </section>

      {/* Core Values */}
      <section className="about-section values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We prioritize trust and fairness in every engagement.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We innovate to empower businesses and professionals alike.</p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>We push boundaries to deliver unmatched experiences.</p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>We believe success is built together, not alone.</p>
          </div>
        </div>
      </section>

      {/* Edge Section */}
      <section className="about-section">
        <h2>Our Edge Over Others</h2>
        <p>
          While platforms like <strong>Upwork</strong> and <strong>Fiverr</strong> 
          emphasize volume and short-term tasks, BEAM ensures long-term, 
          high-quality collaborations. Unlike <strong>Toptal</strong>, which 
          restricts access, BEAM balances quality with accessibility. 
          Unlike <strong>GigU</strong>, we focus not just on gigs but on 
          the <em>entire architecture of business engagement</em>.  
        </p>
        <p>
          With BEAM, businesses get the <strong>perfect blend of speed, trust, 
          and scalability</strong> — something no other platform delivers.
        </p>
      </section>
    </div>
  );
};

export default About;
