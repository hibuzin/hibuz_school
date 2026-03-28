import React from "react";
import schoolIcon from "../assets/icon1.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const styles = {
  root: {
    fontFamily: "'Outfit', sans-serif",
    width: "100%",
  },

  // ── Gold strip ──────────────────────────────────────────────
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
  },
  links: {
    display: "flex",
    alignItems: "center",
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

  // ── Main bar ────────────────────────────────────────────────
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 24px",
    backgroundColor: "#ffffff",
    gap: "12px",
    flexWrap: "wrap",
  },

  // Left
  left: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    flex: "1 1 160px",
    minWidth: 0,
  },
  selectWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  select: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: "13px",
    fontWeight: "500",
    color: "#1a1a1a",
    background: "transparent",
    border: "none",
    padding: "6px 28px 6px 10px",
    cursor: "pointer",
    outline: "none",
    appearance: "none",
    WebkitAppearance: "none",
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

  // Center
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    flex: "2 1 220px",
    textAlign: "center",
  },

  logoImg: {
    width: "44px",
    height: "44px",
    objectFit: "contain",
  },
  schoolName: {
    fontSize: "17px",
    fontWeight: "600",
    color: "#b89b3b",
    letterSpacing: "0.04em",
    lineHeight: 1.2,
  },

  // Right
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
  },

  // Missing styles added only (required for your existing JSX)
  flagText: {
    fontSize: "16px",
    marginRight: "6px",
    display: "flex",
    alignItems: "center",
    lineHeight: 1,
  },

  logoRing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

// Inline chevron arrow for select
const SelectArrow = () => (
  <span
    style={{
      position: "absolute",
      right: "9px",
      top: "50%",
      transform: "translateY(-50%)",
      width: 0,
      height: 0,
      borderLeft: "4px solid transparent",
      borderRight: "4px solid transparent",
      borderTop: "5px solid #b89b3b",
      pointerEvents: "none",
    }}
  />
);

// Pin icon
const PinIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4z"
      fill="#b89b3b"
    />
    <circle cx="7" cy="5" r="1.5" fill="#fff" />
  </svg>
);

export default function TopBar() {
  const isMobile = window.innerWidth <= 768;

  const mobileStyles = isMobile
    ? {
        strip: {
          ...styles.strip,
          padding: "0 10px",
          gap: "6px",
          height: "auto",
          minHeight: "36px",
          flexWrap: "wrap",
        },
        links: {
          ...styles.links,
          flexWrap: "wrap",
          gap: "4px",
        },
        link: {
          ...styles.link,
          padding: "0 4px",
          fontSize: "10px",
        },
        socialWrap: {
          ...styles.socialWrap,
          gap: "8px",
        },
        socialIcon: {
          ...styles.socialIcon,
          fontSize: "12px",
        },
        main: {
          ...styles.main,
          padding: "10px 10px",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center",
        },
        left: {
          ...styles.left,
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        },
        center: {
          ...styles.center,
          width: "100%",
          flexDirection: "column",
          gap: "6px",
        },
        schoolName: {
          ...styles.schoolName,
          fontSize: "14px",
          textAlign: "center",
        },
        right: {
          ...styles.right,
          width: "100%",
          justifyContent: "center",
          whiteSpace: "normal",
          textAlign: "center",
          flexWrap: "wrap",
          fontSize: "12px",
        },
        select: {
          ...styles.select,
          fontSize: "12px",
          padding: "6px 24px 6px 8px",
        },
        help: {
          ...styles.help,
          fontSize: "12px",
        },
        logoImg: {
          ...styles.logoImg,
          width: "38px",
          height: "38px",
        },
        flagText: {
          ...styles.flagText,
          fontSize: "14px",
        },
      }
    : styles;

  return (
    <div style={mobileStyles.root || styles.root}>
      {/* Gold strip */}
      <div style={mobileStyles.strip}>
        <div style={mobileStyles.links}>
          {["STUDENT LOGIN", "STAFF LOGIN", "ALUMNI"].map((item, i, arr) => (
            <React.Fragment key={item}>
              <span style={mobileStyles.link}>{item}</span>
              {i < arr.length - 1 && <span style={styles.sep}>|</span>}
            </React.Fragment>
          ))}
        </div>

        <div style={mobileStyles.socialWrap}>
          <a href="#" style={mobileStyles.socialIcon} aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" style={mobileStyles.socialIcon} aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" style={mobileStyles.socialIcon} aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" style={mobileStyles.socialIcon} aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div style={mobileStyles.main}>
        {/* Left — language + help */}
        <div style={mobileStyles.left}>
          <div style={styles.selectWrap}>
            <span style={mobileStyles.flagText}>🇬🇧</span>
            <select style={mobileStyles.select}>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
            </select>
            <SelectArrow />
          </div>
          <span style={mobileStyles.help}>Need Help?</span>
        </div>

        {/* Center — logo + school name */}
        <div style={mobileStyles.center}>
          <div style={styles.logoRing}>
            <img src={schoolIcon} alt="School logo" style={mobileStyles.logoImg} />
          </div>
          <span style={mobileStyles.schoolName}>SANFORD PUBLIC SCHOOL</span>
        </div>

        {/* Right — location */}
        <div style={mobileStyles.right}>
          📍
          Birmingham, United Kingdom
        </div>
      </div>
    </div>
  );
}