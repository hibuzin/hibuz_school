import React, { useState } from "react";
import busImage from "../assets/bus2.jpeg"; // your bus image

export default function TrackBus() {
  const [busNumber, setBusNumber] = useState("");
  const [status, setStatus] = useState(null);

  const BUS_DATA = {
    "101": { location: "Main Street, Birmingham", eta: "10 mins" },
    "102": { location: "Park Avenue, Birmingham", eta: "15 mins" },
    "103": { location: "Greenwood Road, Birmingham", eta: "5 mins" },
  };

  const handleTrack = () => {
    if (BUS_DATA[busNumber]) {
      setStatus(BUS_DATA[busNumber]);
    } else {
      setStatus({ location: "Unknown Bus Number", eta: "-" });
    }
  };

  return (
    <section
      style={{
        width: "100%",
        background: "linear-gradient(120deg, #fff7ed 0%, #ffe8c1 100%)",
        padding: "60px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Image Cropped, sharp edges */}
        <div
          style={{
            flex: "1 1 300px",
            overflow: "hidden",
            height: "400px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={busImage}
            alt="School Bus"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // crop to fit container
              display: "block",
            }}
          />
        </div>

        {/* Right Form & Status */}
        <div style={{ flex: "1 1 300px", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#141001",
              marginBottom: "20px",
            }}
          >
            TRACK YOUR CHILD'S SCHOOL BUS
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#475569",
              marginBottom: "30px",
              lineHeight: "1.6",
            }}
          >
            Enter your child bus number to see live location.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "30px",
            }}
          >
            <input
              type="text"
              placeholder="Bus Number"
              value={busNumber}
              onChange={(e) => setBusNumber(e.target.value)}
              style={{
                padding: "14px 18px",
                fontSize: "16px",
                border: "1px solid #f0e5d8",
                outline: "none",
                minWidth: "180px",
                transition: "all 0.3s ease",
              }}
            />
            <button
              onClick={handleTrack}
              style={{
                backgroundColor: "#150c00",
                color: "#fff",
                border: "none",
                padding: "14px 24px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 6px 12px rgba(236, 133, 7, 0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0px)")}
            >
              Track Bus
            </button>
          </div>

          {status && (
            <div
              style={{
                backgroundColor: "#fff3e0",
                borderRadius: "16px",
                padding: "25px 20px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
              }}
            >
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  color: "#0f172a",
                  marginBottom: "10px",
                }}
              >
                Bus Number: {busNumber}
              </p>
              <p style={{ fontSize: "15px", color: "#334155", marginBottom: "6px" }}>
                📍 Location: {status.location}
              </p>
              <p style={{ fontSize: "15px", color: "#334155" }}>⏱ ETA: {status.eta}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}