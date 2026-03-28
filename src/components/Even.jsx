import React from "react";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";

function EventCard({ image, title, date, description }) {
  return (
    <div
      style={{
        flex: "1 1 300px",
        margin: "10px",
        borderRadius: "1px",
        overflow: "hidden",
        backgroundColor: "#f9fafb",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          padding: "15px",
          flex: "1",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#1f2937",
            marginBottom: "8px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#374151",
            lineHeight: "1.8",
            textAlign: "justify",
            marginBottom: "0",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function EventList() {
  const events = [
    {
      image: event1,
      title: "Science Fair",
      description:
        "Join us for the Annual Science Fair where students showcase innovative projects and experiments. Explore exciting demonstrations and learn from the young minds of tomorrow.",
    },
    {
      image: event2,
      title: "Sports Day",
      description:
        "Our Sports Day brings together students for fun and competitive events. Cheer for your teams and enjoy a day full of athletics, games, and teamwork.",
    },
    {
      image: event3,
      title: "Art Exhibition",
      description:
        "Discover creativity at our Art Exhibition. Students present their artworks ranging from paintings to sculptures, highlighting talent and imagination.",
    },
  ];

  return (
    <div
      style={{
        padding: "40px 5px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#b89b3b",
            marginBottom: "10px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            textAlign: "left",
          }}
        >
         Events
        </h2>

        <p
          style={{
            fontSize: "15px",
            color: "#6b7280",
            maxWidth: "700px",
            lineHeight: "1.7",
            textAlign: "left",
          }}
        >
          Stay updated with our latest school events, activities, and celebrations.
        </p>
      </div>

      {/* Event Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {events.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            date={event.date}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}

export default EventList;