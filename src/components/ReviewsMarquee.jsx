import React from "react";

import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.jpg";
import review3 from "../assets/review3.jpg";
import review4 from "../assets/review4.jpg";
import review5 from "../assets/review5.jpg";
import review6 from "../assets/review6.jpg";
import review7 from "../assets/review7.jpg";
import review8 from "../assets/review8.jpg";
import review9 from "../assets/review9.jpg";
import review10 from "../assets/review10.jpg";

function ReviewsMarquee() {
  const reviews = [
    {
      name: "Roston",
      role: "Parent",
      image: review1,
      text: "Sanford Public School has given my child a wonderful learning environment. The teachers are supportive, caring, and truly dedicated.",
    },
    {
      name: "Bairstow",
      role: "Parent",
      image: review2,
      text: "The school focuses not only on academics but also on discipline, confidence, and creativity. We are very happy with the progress.",
    },
    {
      name: "Stokes",
      role: "Parent",
      image: review3,
      text: "Excellent infrastructure, friendly staff, and strong academic guidance. My daughter enjoys going to school every single day.",
    },
    {
      name: "Joe Mills",
      role: "Parent",
      image: review4,
      text: "The communication between teachers and parents is very smooth. We always feel informed and involved in our child’s growth.",
    },
    {
      name: "Alysa",
      role: "Parent",
      image: review5,
      text: "Sanford Public School has a positive atmosphere where children feel safe, respected, and encouraged to do their best.",
    },
    {
      name: "Heather",
      role: "Parent",
      image: review6,
      text: "The school balances academics, sports, and extracurricular activities beautifully. My son has become much more confident.",
    },
    {
      name: "Billingwood",
      role: "Parent",
      image: review7,
      text: "We appreciate the values and discipline the school teaches. It has made a huge difference in our child’s behavior and attitude.",
    },
    {
      name: "Morris J",
      role: "Student",
      image: review8,
      text: "I love my school because the teachers explain everything clearly and always encourage us to participate in activities.",
    },
    {
      name: "De Morre",
      role: "Parent",
      image: review9,
      text: "A great institution with modern teaching methods and caring faculty. We feel lucky to have chosen this school.",
    },
    {
      name: "Kollingwood",
      role: "Parent",
      image: review10,
      text: "The school has exceeded our expectations in every way. The campus, teaching quality, and student support are all excellent.",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "70px 0",
        background: "#fffaf5",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "left",
          marginBottom: "35px",
          padding: "0 20px",
          fontWeight:"400"
        }}
      >
        <h2
          style={{
            fontSize: "clamp(18px, 4vw, 32px)",
            fontWeight: "700",
            color: "#b89b3b",
            margin: "0 0 10px 0",
          }}
        >
          WHAT PARENTS & STUDENT SAY
        </h2>
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "#64748b",
            margin: 0,
          }}
        >
          Trusted by families, loved by students.
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "reviewsLoop 40s linear infinite",
            gap: "22px",
            padding: "10px 0",
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              style={{
                minWidth: "320px",
                maxWidth: "320px",
                background: "#ffffff",
                borderRadius: "20px",
                padding: "24px",
                boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
                border: "1px solid rgba(236,133,7,0.12)",
                flexShrink: 0,
              }}
            >
              {/* Top Profile */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "16px",
                }}
              >
                <img
                  src={review.image}
                  alt={review.name}
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #f59e0b",
                    flexShrink: 0,
                  }}
                />

                <div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#0f172a",
                    }}
                  >
                    {review.name}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#ec8507",
                      fontWeight: "600",
                      marginTop: "4px",
                    }}
                  >
                    {review.role}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div
                style={{
                  fontSize: "18px",
                  color: "#f59e0b",
                  marginBottom: "14px",
                  letterSpacing: "2px",
                }}
              >
                ★★★★★
              </div>

              {/* Review Text */}
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#334155",
                  margin: 0,
                  minHeight: "135px",
                }}
              >
                “{review.text}”
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes reviewsLoop {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 11px));
            }
          }
        `}
      </style>
    </div>
  );
}

export default ReviewsMarquee;