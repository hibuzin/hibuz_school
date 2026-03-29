import React, { useState, useEffect } from "react";
import schoolIcon from "../assets/icon4.jpeg";
import ukFlag from "../assets/uk.png";
import frFlag from "../assets/fr.png";
import esFlag from "../assets/es.png";
import deFlag from "../assets/de.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// ── Language data ──────────────────────────────────────────────
const LANGUAGES = [
  { code: "en", flag: ukFlag, label: "ENGLISH" },
  { code: "fr", flag: frFlag, label: "FRENCH" },
  { code: "es", flag: esFlag, label: "SPANISH" },
  { code: "de", flag: deFlag, label: "GERMAN" },
];

// ── Reusable Flag Dropdown (used in BOTH desktop & mobile) ─────
function LangSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(LANGUAGES[0]);

  return (
    <div style={{ position: "relative" }}>
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
          fontSize: "13px",
          fontWeight: "500",
          color: "#1a1a1a",
          padding: "4px 6px",
          userSelect: "none",
        }}
      >
        <img
          src={selected.flag}
          alt={selected.label}
          style={{ width: "22px", height: "15px", objectFit: "cover", borderRadius: "2px" }}
        />
        <span>{selected.label}</span>
        <span style={{
          width: 0, height: 0,
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderTop: "5px solid #b89b3b",
          marginLeft: "2px",
        }} />
      </div>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: "absolute",
          top: "110%",
          left: 0,
          backgroundColor: "#fff",
          border: "1px solid #e5e0d0",
          borderRadius: "6px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          zIndex: 999,
          minWidth: "130px",
          overflow: "hidden",
        }}>
          {LANGUAGES.map((lang) => (
            <div
              key={lang.code}
              onClick={() => { setSelected(lang); setOpen(false); }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 12px",
                fontSize: "13px",
                cursor: "pointer",
                backgroundColor: selected.code === lang.code ? "#fdf6e3" : "#fff",
              }}
            >
              <img
                src={lang.flag}
                alt={lang.label}
                style={{ width: "22px", height: "15px", objectFit: "cover", borderRadius: "2px" }}
              />
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Styles ─────────────────────────────────────────────────────
const styles = {
  root: {
    fontFamily: "'Outfit', sans-serif",
    width: "100%",
  },
  strip: {
    backgroundColor: "#b89b3b",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.06em",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    gap: "8px",
    boxSizing: "border-box",
  },
  links: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
  },
  link: {
    cursor: "pointer",
    padding: "0 10px",
    whiteSpace: "nowrap",
    transition: "opacity 0.15s",
  },
  sep: {
    opacity: 0.4,
    fontSize: "11px",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 24px",
    backgroundColor: "#ffffff",
    gap: "12px",
    flexWrap: "wrap",
    boxSizing: "border-box",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    flex: "1 1 160px",
    minWidth: 0,
  },
  help: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#000000",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    borderBottom: "1px solid transparent",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    flex: "2 1 220px",
    textAlign: "center",
  },
  logoImg: {
    width: "30px",
    height: "30px",
    objectFit: "contain",
    flexShrink: 0,
  },
  schoolName: {
    fontSize: "17px",
    fontWeight: "600",
    color: "#b89b3b",
    letterSpacing: "0.04em",
    lineHeight: 1.2,
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    fontWeight: "500",
    color: "#4b5563",
    flex: "1 1 160px",
    justifyContent: "flex-end",
    minWidth: 0,
    whiteSpace: "nowrap",
  },
  socialWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "nowrap",
    flexShrink: 0,
  },
  socialIcon: {
    color: "#ffffff",
    fontSize: "14px",
    cursor: "pointer",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    flexShrink: 0,
  },
  logoRing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const PinIcon = () => (
  <svg width="16" height="19" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
    <path
      d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4z"
      fill="#b89b3b"
    />
    <circle cx="7" cy="5" r="1.5" fill="#fff" />
  </svg>
);

// ── Main Component ─────────────────────────────────────────────
export default function TopBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileStyles = {
    strip: {
      ...styles.strip,
      padding: "6px 10px",
      height: "auto",
      minHeight: "38px",
      justifyContent: "center",
      alignItems: "center",
    },
    links: {
      ...styles.links,
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "2px",
      width: "100%",
    },
    link: {
      ...styles.link,
      padding: "0 4px",
      fontSize: "10px",
    },
    logoImg: {
      ...styles.logoImg,
      width: "38px",
      height: "38px",
    },
    schoolName: {
      ...styles.schoolName,
      fontSize: "14px",
      lineHeight: 1.3,
    },
  };

  return (
    <div style={styles.root}>

      {/* ── Gold strip ── */}
      <div style={isMobile ? mobileStyles.strip : styles.strip}>
        <div style={isMobile ? mobileStyles.links : styles.links}>
          {["STUDENT LOGIN", "STAFF LOGIN", "ALUMNI" , "PAYMENT"].map((item, i, arr) => (
            <React.Fragment key={item}>
              <span style={isMobile ? mobileStyles.link : styles.link}>{item}</span>
              {i < arr.length - 1 && <span style={styles.sep}>|</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop only social icons */}
        {!isMobile && (
          <div style={styles.socialWrap}>
            <a href="#" style={styles.socialIcon} aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" style={styles.socialIcon} aria-label="Instagram"><FaInstagram /></a>
            <a href="#" style={styles.socialIcon} aria-label="Twitter"><FaTwitter /></a>
            <a href="#" style={styles.socialIcon} aria-label="YouTube"><FaYoutube /></a>
          </div>
        )}
      </div>

      {/* ── Main bar ── */}
      {isMobile ? (
        // MOBILE
        <div style={{ ...styles.main, flexDirection: "column", alignItems: "stretch", padding: "8px 10px", gap: "2px" }}>

          {/* Row 1: Logo + School Name */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "2px" }}>
            <div style={styles.logoRing}>
              <img src={schoolIcon} alt="School logo" style={mobileStyles.logoImg} />
            </div>
           <span style={{ ...mobileStyles.schoolName, fontSize: "20px" }}>
  SANFORD ELITE SCHOOL
</span>
          </div>

          {/* Row 2: Flag dropdown left, Location right */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 4px" }}>
            <LangSelect />
            <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "500", color: "#4b5563", whiteSpace: "nowrap" }}>
              <PinIcon />
              BIRMINGHAM, UK
            </div>
          </div>

        </div>
      ) : (
        // DESKTOP
        <div style={styles.main}>

          {/* Left: Flag dropdown + Help */}
          <div style={styles.left}>
            <LangSelect />
            <span style={styles.help}>NEED HELP?</span>
          </div>

          {/* Center: Logo + School name */}
          <div style={styles.center}>
            <div style={styles.logoRing}>
              <img src={schoolIcon} alt="School logo" style={styles.logoImg} />
            </div>
            <span style={{ ...styles.schoolName, fontSize: "22px" }}>
  SANFORD ELITE SCHOOL
</span>
          </div>

          {/* Right: Location */}
<div style={{ 
  ...styles.right, 
  color: "#4b5563"   // keep the same color
}}>
  <PinIcon />
  BIRMINGHAM, UNITED KINGDOM
</div>

        </div>
      )}

    </div>
  );
}