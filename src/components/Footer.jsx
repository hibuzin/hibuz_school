import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaChevronRight,
} from "react-icons/fa";

function Footer() {
  const isMobile = window.innerWidth <= 768;

  const styles = {
    footer: {
      background: "linear-gradient(180deg, #0b1220 0%, #0f172a 45%, #111827 100%)",
      color: "#ffffff",
      marginTop: "60px",
      padding: isMobile ? "45px 16px 18px" : "70px 24px 22px",
      fontFamily: "'Outfit', sans-serif",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.06)",
    },

    glow1: {
      position: "absolute",
      top: "-80px",
      left: "-60px",
      width: "220px",
      height: "220px",
      borderRadius: "50%",
      background: "rgba(184, 155, 59, 0.08)",
      filter: "blur(40px)",
      pointerEvents: "none",
    },

    glow2: {
      position: "absolute",
      bottom: "-100px",
      right: "-50px",
      width: "240px",
      height: "240px",
      borderRadius: "50%",
      background: "rgba(184, 155, 59, 0.06)",
      filter: "blur(50px)",
      pointerEvents: "none",
    },

    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },

    topGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "1.4fr 1fr 1.1fr 1fr",
      gap: isMobile ? "28px" : "34px",
      paddingBottom: isMobile ? "28px" : "36px",
      borderBottom: "1px solid rgba(255,255,255,0.10)",
    },

    brandWrap: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    },

    brandTitle: {
      fontSize: isMobile ? "24px" : "30px",
      fontWeight: "700",
      letterSpacing: "0.5px",
      color: "#ffffff",
      margin: 0,
      lineHeight: 1.2,
    },

    brandAccent: {
      color: "#b89b3b",
    },

    brandLine: {
      width: "70px",
      height: "3px",
      borderRadius: "999px",
      background: "linear-gradient(90deg, #b89b3b, rgba(184,155,59,0.25))",
    },

    brandText: {
      fontSize: isMobile ? "14px" : "15px",
      lineHeight: "1.9",
      color: "#cbd5e1",
      maxWidth: "420px",
      margin: 0,
    },

    socialRow: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginTop: "4px",
      flexWrap: "wrap",
    },

    socialBtn: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.08)",
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "14px",
      transition: "all 0.25s ease",
      cursor: "pointer",
      backdropFilter: "blur(6px)",
    },

    heading: {
      fontSize: isMobile ? "18px" : "19px",
      fontWeight: "700",
      marginBottom: "16px",
      color: "#ffffff",
      position: "relative",
    },

    headingBar: {
      width: "42px",
      height: "2px",
      borderRadius: "999px",
      backgroundColor: "#b89b3b",
      marginTop: "8px",
    },

    list: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },

    linkItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "#cbd5e1",
      fontSize: "14px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      lineHeight: 1.6,
    },

    linkArrow: {
      color: "#b89b3b",
      fontSize: "11px",
      flexShrink: 0,
    },

    contactList: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    },

    contactItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      color: "#cbd5e1",
      fontSize: "14px",
      lineHeight: 1.7,
    },

    contactIconWrap: {
      width: "34px",
      height: "34px",
      minWidth: "34px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(184, 155, 59, 0.10)",
      color: "#b89b3b",
      border: "1px solid rgba(184, 155, 59, 0.14)",
      marginTop: "1px",
    },

    infoCard: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "18px",
      padding: isMobile ? "16px" : "18px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      backdropFilter: "blur(8px)",
    },

    infoItem: {
      color: "#cbd5e1",
      fontSize: "14px",
      lineHeight: 1.7,
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
    },

    infoDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#b89b3b",
      marginTop: "8px",
      flexShrink: 0,
    },

    bottomBar: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "12px",
      paddingTop: isMobile ? "18px" : "20px",
      fontSize: "13px",
      color: "#94a3b8",
      textAlign: isMobile ? "center" : "left",
    },

    bottomLinks: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      flexWrap: "wrap",
      justifyContent: "center",
    },

    bottomLink: {
      cursor: "pointer",
      color: "#94a3b8",
      fontSize: "13px",
    },

    designedBy: {
      color: "#b89b3b",
      fontWeight: "600",
    },
  };

  return (
    <footer style={styles.footer}>
      {/* Decorative glow */}
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <div style={styles.container}>
        {/* Top Section */}
        <div style={styles.topGrid}>
          {/* Brand / About */}
          <div style={styles.brandWrap}>
            <h2 style={styles.brandTitle}>
              Sanford <span style={styles.brandAccent}>Elite School</span>
            </h2>
            <div style={styles.brandLine}></div>

            <p style={styles.brandText}>
              Empowering young minds through academic excellence, strong values,
              innovation, and holistic development to shape confident leaders
              for tomorrow.
            </p>

            <div style={styles.socialRow}>
              <a href="#" style={styles.socialBtn} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" style={styles.socialBtn} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" style={styles.socialBtn} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" style={styles.socialBtn} aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={styles.heading}>
              Quick Links
              <div style={styles.headingBar}></div>
            </div>

            <div style={styles.list}>
              {["Home", "About Us", "Academics", "Admissions", "Contact Us"].map(
                (item) => (
                  <div key={item} style={styles.linkItem}>
                    <FaChevronRight style={styles.linkArrow} />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={styles.heading}>
              Contact Us
              <div style={styles.headingBar}></div>
            </div>

            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <div style={styles.contactIconWrap}>
                  <FaMapMarkerAlt size={13} />
                </div>
                <span>46, Silver Street, Birmingham, United Kingdom</span>
              </div>

              <div style={styles.contactItem}>
                <div style={styles.contactIconWrap}>
                  <FaPhoneAlt size={12} />
                </div>
                <span>+44 98765 43210</span>
              </div>

              <div style={styles.contactItem}>
                <div style={styles.contactIconWrap}>
                  <FaEnvelope size={12} />
                </div>
                <span>info@sanfordeliteschool.com</span>
              </div>

              <div style={styles.contactItem}>
                <div style={styles.contactIconWrap}>
                  <FaClock size={12} />
                </div>
                <span>Mon - Fri: 8:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Important Info */}
          <div>
            <div style={styles.heading}>
              Important Info
              <div style={styles.headingBar}></div>
            </div>

            <div style={styles.infoCard}>
              {[
                "Admissions Open for 2026 - 2027",
                "CBSE Curriculum with Smart Classrooms",
                "Safe Campus & Transport Facility",
                "Experienced Faculty & Activity-Based Learning",
              ].map((item) => (
                <div key={item} style={styles.infoItem}>
                  <span style={styles.infoDot}></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <span>© 2026 Sanford Elite School. All Rights Reserved.</span>

          <div style={styles.bottomLinks}>
            <span style={styles.bottomLink}>Privacy Policy</span>
            <span style={styles.bottomLink}>Terms & Conditions</span>
            <span style={styles.bottomLink}>
              Designed by <span style={styles.designedBy}>Hibuz</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;