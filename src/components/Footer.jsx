import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        marginTop: "40px",
        padding: "40px 20px 18px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top Footer Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          paddingBottom: "28px",
        }}
      >
        {/* School Info */}
        <div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "700",
              marginBottom: "12px",
              fontFamily: "'Georgia', serif",
              letterSpacing: "1px",
            }}
          >
            Public School
          </h2>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.8",
              color: "#cbd5e1",
            }}
          >
            Empowering young minds through quality education, discipline,
            creativity, and excellence for a brighter future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "14px",
              fontWeight: "600",
            }}
          >
            Quick Links
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "14px",
              color: "#cbd5e1",
            }}
          >
            <span style={{ cursor: "pointer" }}>Home</span>
            <span style={{ cursor: "pointer" }}>About Us</span>
            <span style={{ cursor: "pointer" }}>Academics</span>
            <span style={{ cursor: "pointer" }}>Admissions</span>
            <span style={{ cursor: "pointer" }}>Contact</span>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "14px",
              fontWeight: "600",
            }}
          >
            Contact Us
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "14px",
              color: "#cbd5e1",
              lineHeight: "1.7",
            }}
          >
            <span>📍 123 School Road, Chennai, Tamil Nadu</span>
            <span>📞 +91 98765 43210</span>
            <span>✉️ info@publicschool.com</span>
            <span>🕒 Mon - Fri: 8:00 AM - 4:00 PM</span>
          </div>
        </div>

        {/* Important Info */}
        <div>
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "14px",
              fontWeight: "600",
            }}
          >
            Important Info
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "14px",
              color: "#cbd5e1",
              lineHeight: "1.7",
            }}
          >
            <span>Admissions Open for 2026-27</span>
            <span>CBSE Curriculum</span>
            <span>Safe Campus & Smart Classrooms</span>
            <span>Transport Facility Available</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "16px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          fontSize: "13px",
          color: "#94a3b8",
        }}
      >
        <span>© 2026 Public School. All Rights Reserved.</span>
        <span>Designed with care for education & excellence.</span>
      </div>
    </footer>
  );
}

export default Footer;