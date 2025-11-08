"use client";
import React from "react";

function CeritaKami() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "clamp(20px, 5vw, 60px) clamp(10px, 6vw, 80px)",
        gap: "clamp(20px, 4vw, 40px)",
        marginTop: "clamp(60px, 10vw, 130px)",
        marginBottom: "clamp(30px, 5vw, 50px)",
      }}
    >
      <div
        style={{
          flex: "1",
          minWidth: "280px",
          marginLeft: "clamp(0px, 5vw, 100px)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(22px, 4vw, 32px)",
            fontWeight: "700",
            marginBottom: "10px",
            color: "#000000ff",
          }}
        >
          Cerita <span style={{ color: "#FFA726" }}>Kami</span>
        </h2>

        <div
          style={{
            width: "100px",
            height: "4px",
            backgroundColor: "#FF941A",
            marginBottom: "20px",
          }}
        />

        <p
          style={{
            fontSize: "clamp(14px, 2vw, 20px)",
            lineHeight: "1.6",
            maxWidth: "480px",
            color: "#000000ff",
          }}
        >
          Didirikan pada tahun 2017 oleh{" "}
          <span style={{ fontWeight: "600", color: "#FF941A" }}>Pakde Har</span>
          , kedai kami menghadirkan cita rasa Indonesia yang autentik melalui
          hidangan andalan kami - Nasi Goreng. Berawal dari warung kecil di
          rumah, kini telah berkembang menjadi tempat kuliner favorit banyak
          orang.
        </p>
      </div>

      <div style={{ flex: "1", textAlign: "center" }}>
        <img
          src="/images/Gerobak_Pakde.jpg"
          alt="Gerobak Nasi Goreng"
          style={{
            width: "clamp(250px, 50vw, 500px)",
            borderRadius: "20px",
            objectFit: "cover",
            marginRight: "clamp(0px, 5vw, 100px)",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}

export default CeritaKami;
