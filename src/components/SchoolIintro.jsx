import React from "react";
import schoolVideo from "../assets/school-video.mp4";

function SchoolIntro() {
  return (
    <section
  style={{
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "60px 20px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      alignItems: "center",
    }}
  >
        {/* Left Content */}
        <div>
          <p
            style={{
              color: "#ec8507",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Welcome to Sanford Public School
          </p>

          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#0f172a",
              marginBottom: "18px",
              lineHeight: "1.3",
              fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
            }}
          >
            Shaping Bright Futures Through Quality Education
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#475569",
              lineHeight: "1.9",
              marginBottom: "16px",
            }}
          >
            Sanford Public School is committed to nurturing young minds with
            academic excellence, strong values, creativity, and leadership.
            Our institution provides a safe and inspiring environment where
            students are encouraged to learn, grow, and achieve their fullest
            potential.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#475569",
              lineHeight: "1.9",
              marginBottom: "24px",
            }}
          >
            With experienced faculty, modern classrooms, co-curricular
            activities, and a student-centered approach, we aim to prepare
            children for success in academics and life.
          </p>

          <button
            style={{
              backgroundColor: "#ec8507",
              color: "#ffffff",
              border: "none",
              padding: "12px 24px",
              fontSize: "15px",
              fontWeight: "600",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>

        {/* Right Highlight Box */}
        <div
          style={{
            backgroundColor: "#fff7ed",
            border: "1px solid #fed7aa",
            borderRadius: "14px",
            padding: "35px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#0f172a",
              marginBottom: "20px",
            }}
          >
            Why Choose Us?
          </h3>

          <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  }}
>
  <div style={{ fontSize: "15px", color: "#334155", lineHeight: "1.7", display: "flex", alignItems: "center", gap: "10px" }}>
    <span style={{ color: "#ec8507", fontWeight: "700", fontSize: "16px" }}>✓</span>
    <span>Experienced & Dedicated Faculty</span>
  </div>

  <div style={{ fontSize: "15px", color: "#334155", lineHeight: "1.7", display: "flex", alignItems: "center", gap: "10px" }}>
    <span style={{ color: "#ec8507", fontWeight: "700", fontSize: "16px" }}>✓</span>
    <span>Modern Smart Classrooms</span>
  </div>

  <div style={{ fontSize: "15px", color: "#334155", lineHeight: "1.7", display: "flex", alignItems: "center", gap: "10px" }}>
    <span style={{ color: "#ec8507", fontWeight: "700", fontSize: "16px" }}>✓</span>
    <span>Focus on Academics & Discipline</span>
  </div>

  <div style={{ fontSize: "15px", color: "#334155", lineHeight: "1.7", display: "flex", alignItems: "center", gap: "10px" }}>
    <span style={{ color: "#ec8507", fontWeight: "700", fontSize: "16px" }}>✓</span>
    <span>Sports, Arts & Co-Curricular Activities</span>
  </div>

  <div style={{ fontSize: "15px", color: "#334155", lineHeight: "1.7", display: "flex", alignItems: "center", gap: "10px" }}>
    <span style={{ color: "#ec8507", fontWeight: "700", fontSize: "16px" }}>✓</span>
    <span>Safe & Student-Friendly Campus</span>
  </div>
          </div>
        </div>
         </div>
{/* Bottom School Video */}
<div
  style={{
    width: "calc(100% + 40px)",
    marginTop: "40px",
    marginLeft: "-20px",
    marginRight: "-20px",
    overflow: "hidden",
  }}
>
  <video
    src={schoolVideo}
    muted
  autoPlay
  loop
  playsInline

    style={{
      width: "100%",
      height: "620px",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>
</section>
  );
}

export default SchoolIntro;