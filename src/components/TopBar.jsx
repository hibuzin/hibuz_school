import React from "react";

function TopBar() {
  return (
    <div>
      {/* Top orange bar */}
      <div
        style={{
          backgroundColor: "#b89b3b",
          color: "white",
          fontSize: "13px",
          fontWeight: "500",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        {/* Left side login links */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <span style={{ cursor: "pointer" }}>STUDENT LOGIN</span>
          <span>|</span>
          <span style={{ cursor: "pointer" }}>STAFF LOGIN</span>
          <span>|</span>
          <span style={{ cursor: "pointer" }}>ALUMNI</span>
        </div>
      </div>

      {/* School title + left language + right location */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 20px",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Left: Language selector + Need Help */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#334155",
          }}
        >
          {/* Language dropdown */}
          <select
            style={{
              fontSize: "14px",
              fontWeight: "500",
              padding: "2px 6px",
              cursor: "pointer",
            }}
          >
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 French</option>
            <option value="es">🇪🇸 Spanish</option>
            <option value="de">🇩🇪 German</option>
          </select>

          {/* Need Help */}
          <span style={{ cursor: "pointer" }}>Need Help?</span>
        </div>

        {/* Center: School title */}
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "500",
            fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
            color: "#bda03e",
          }}
        >
          SANFORD PUBLIC SCHOOL
        </div>

        {/* Right side location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#334155",
            fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
          }}
        >
          <span style={{ fontSize: "16px" }}>📍</span>
          <span>Birmingham, United Kingdom</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;