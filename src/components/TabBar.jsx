import React, { useEffect, useRef, useState } from "react";

function TabBar() {
  const announcementText =
    "Admissions Open for 2026-27 | Annual Day Celebration on April 15 | Parent-Teacher Meeting This Saturday | Summer Camp Registrations Now Open | Mid-Term Exams Start from May 10 | School Reopens on June 3 | Science Exhibition on July 12 | Inter-School Sports Meet Registrations Open | Scholarship Test Applications Available Now | Kindergarten Orientation Program Next Monday | Independence Day Celebration Preparations Begin | New Library Books Added for Senior Students";

  const menuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && menuRef.current) {
      menuRef.current.scrollLeft = 0; // scroll to start only on mobile
    }
  }, [isMobile]);

  const menuItems = [
    "HOME",
    "ABOUT",
    "ACADEMICS",
    "ADMISSIONS",
    "FACILITIES",
    "EVENTS",
    "ACHIEVEMENTS",
    "CONTACT",
    "CAREERS",
  ];

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {/* Premium Tab Bar */}
      <div
        ref={menuRef}
        style={{
          display: "flex",
          justifyContent: isMobile ? "flex-start" : "center", // left on mobile, center on desktop
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#ffffff",
          padding: "2px 0",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
          overflowX: isMobile ? "auto" : "hidden", // scroll only on mobile
          scrollbarWidth: "none",
        }}
      >
        {menuItems.map((item) => (
          <span
            key={item}
            style={{
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "clamp(12px, 2vw, 13px)",
              color: "#111827",
              letterSpacing: "0.3px",
              transition: "all 0.3s ease",
              padding: "2px 10px 10px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
              fontFamily:
                '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Announcement Bar */}
      <div
        style={{
          width: "100%",
          height: "42px",
          backgroundColor: "#FFD6B0",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          position: "relative",
        }}
      >
        {/* Label */}
        <div
          style={{
            minWidth: "140px",
            height: "100%",
            background: "rgba(255, 255, 255, 0.08)",
            color: "#050504",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "clamp(11px, 2vw, 13px)",
            fontWeight: "700",
            letterSpacing: "1px",
            textTransform: "uppercase",
            borderRight: "1px solid rgba(201, 3, 3, 0.08)",
            zIndex: 2,
          }}
        >
          Announcements
        </div>

        {/* Marquee */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              color: "#1e293b",
              fontSize: "clamp(12px, 2vw, 14px)",
              fontWeight: "500",
              letterSpacing: "0.2px",
              animation: "premiumMarquee 40s linear infinite",
              minWidth: "max-content",
            }}
          >
            <span style={{ paddingRight: "60px" }}>{announcementText}</span>
            <span style={{ paddingRight: "60px" }}>{announcementText}</span>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes premiumMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          /* Hide scrollbar for Chrome, Safari, Edge */
          div[style*="overflow-x: auto"]::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}

export default TabBar;