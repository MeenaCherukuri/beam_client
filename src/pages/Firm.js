import React from "react";
import "../style.css";

export default function Firm() {
  return (
    <div className="firm-page">
      <head>
        <title>𝐁𝐄𝐀𝐌-𝐅𝐢𝐫𝐦𝐬</title>
      </head>
      {/* Hero Section */}
      <section className="firm-hero">
        <h1>
          Our <span className="highlight">Collaborators & Clients</span>
        </h1>
        <p>
          The strength of our platform lies in the trust of companies that rely
          on it. Here are some of the businesses actively using our B2B web
          service marketplace:
        </p>
      </section>

      {/* Collaborators Section */}
      <section className="firm-section">
        <h2>Trusted by Industry Leaders</h2>
        <ul className="firm-list">
          <li>Integrated Soon</li>
        </ul>
      </section>

      {/* Values Section */}
      <section className="firm-section">
        <h2>Why Businesses Trust BEAM</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Credibility</h3>
            <p>We verify all companies using their GSTN before onboarding.</p>
          </div>
          <div className="value-card">
            <h3>Authenticity</h3>
            <p>Every collaborator is thoroughly vetted for reliability.</p>
          </div>
          <div className="value-card">
            <h3>Scalability</h3>
            <p>Our marketplace adapts to startups, SMEs, and enterprises.</p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>We build strong partnerships, not one-time gigs.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="firm-cta">
        <h2>Become a Part of Our Ecosystem</h2>
        <p>
          Join forward-thinking companies and be part of the collaborative
          revolution. Where businesses meet brilliance.
        </p>
        <a href="/signup" className="cta-btn">
          Get Started
        </a>
      </section>
    </div>
  );
}
