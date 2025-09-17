import React from "react";
import logo2 from "../assets/logo2.png";
import "../style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo2} alt="BEAM Logo" className="foot-logo" />
      </div>
       <div><h3>BEAM</h3></div>
      {/*<div className="footer-team">
        {[
          { name: "Ch.Meenakshi Devi", role: "UI/UX Designer & Frontend Developer" },
          { name: "B.Santha Raju", role: "Tester" },
          { name: "G.Adi Vardhini Yadav", role: "Technical Writer" },
          { name: "I.Bhavya Sri", role: "UI/UX Designer & Frontend Developer" },
          { name: "G.Mohan Krishna", role: "Full-Stack Developer & Technical Researcher" }
        ].map((member, i) => (
          <div className="footer-team-arrangement" key={i}>
            <h5>{member.name}</h5>
            <h6>{member.role}</h6>
          </div>
        ))}
      </div> */}
      <div className="footer-rights">
        <p>This is a web application not a mobile application</p>
        <p>&copy; 2025 BEAM . All rights reserved.</p>
      </div>
    </footer>
  );
}
