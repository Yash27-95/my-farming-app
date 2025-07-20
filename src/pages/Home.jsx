import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          padding: "2.2rem 1.2rem",
          margin: "2rem 0",
          border: "1px solid #ececec",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "#181818",
            fontWeight: 800,
            fontSize: "1.7rem",
            marginBottom: "0.7rem",
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          Sri Shankar Traders
        </h1>
        <p
          style={{
            color: "#222",
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            textAlign: "center",
            lineHeight: 1.6,
            maxWidth: 500,
          }}
        >
          Licensed and trusted for decades, we provide quality fertilizers and expert guidance to empower farmers.
          Our mission is to help you grow better, safer, and smarter.
        </p>
        <div
          style={{
            background: "#f7f7f9",
            borderRadius: "10px",
            padding: "1.2rem",
            marginBottom: "1.5rem",
            border: "1px solid #ececec",
            textAlign: "center",
            maxWidth: 420,
          }}
        >
          <h2
            style={{
              color: "#181818",
              fontSize: "1.15rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            New: AI Farming Assistant
          </h2>
          <p style={{ color: "#444", fontSize: "1rem", marginBottom: "1.2rem" }}>
            Get instant, personalized crop and fertilizer advice powered by AI.
            Just tell us your crop, area, and location—let our assistant do the rest!
          </p>
          <button
            onClick={() => navigate("ai")}
            style={{
              background: "#181818",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.85em 1.5em",
              fontSize: "1.05rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            Try AI Assistant
          </button>
        </div>
        <div style={{ color: "#888", fontSize: "0.97rem", marginTop: "1.2rem", textAlign: "center" }}>
          Quality. Trust. Innovation.<br />
          Serving the farming community since 1980.
        </div>
      </section>
    </main>
  );
};

export default Home;