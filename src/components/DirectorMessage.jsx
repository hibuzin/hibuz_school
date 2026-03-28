import React from "react";
import directorImage from "../assets/director.png"; // replace with your actual image

function DirectorMessage() {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "60px",
        backgroundColor: "#fff7ed",
        padding: "60px 20px", // slightly smaller padding for mobile
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "800px", // slightly smaller max width for better readability
          gap: "25px",
        }}
      >
        {/* Director image */}
        <img
          src={directorImage}
          alt="Director"
          style={{
            width: "120px",
            height: "120px",
            maxWidth: "30vw", // responsive image width
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
            border: "3px solid #ec8507",
          }}
        />

        {/* Director message */}
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 24px)", // scales between 16px (mobile) and 24px (desktop)
            color: "#334155",
            lineHeight: "1.8",
            fontWeight: "500",
            letterSpacing: "0.3px",
          }}
        >
          At Sanford Public School, we are committed to empowering every student to achieve excellence in academics, creativity, and leadership. Our mission is to foster strong values, critical thinking, teamwork, and a lifelong love of learning, ensuring that each child is prepared to thrive in today’s dynamic world.
        </p>

        {/* Director name */}
        <span
          style={{
            fontWeight: "700",
            fontSize: "clamp(14px, 1.5vw, 18px)", // scales on mobile
            color: "#0f172a",
          }}
        >
          — Dr. John Smith, Director
        </span>
      </div>
    </div>
  );
}

export default DirectorMessage;