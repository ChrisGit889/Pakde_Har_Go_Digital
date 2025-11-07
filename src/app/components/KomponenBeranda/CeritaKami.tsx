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
        padding: "60px 80px",
        gap: "40px",
        marginTop: "130px",
        marginBottom: "50px",
      }}
    >
      <div style={{ flex: "1", minWidth: "280px" , marginLeft: "100px"}}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "10px", color: "#000000ff" }}>
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

        <p style={{ fontSize: "20px", lineHeight: "1.6", maxWidth: "480px" , color: "#000000ff"}}>
          Didirikan pada tahun 2017 oleh <span style={{ fontWeight: "600" , color : "#FF941A"}}>Pakde Har</span>, 
          kedai kami menghadirkan cita rasa Indonesia yang autentik melalui hidangan andalan kami - 
          Nasi Goreng. Berawal dari warung kecil di rumah, kini telah berkembang menjadi tempat 
          kuliner favorit banyak orang.
        </p>
      </div>

      <div>
        <img
          src="/images/Gerobak_Pakde.jpg" 
          alt="Gerobak Nasi Goreng"
          style={{
            width: "500px",
            borderRadius: "20px",
            objectFit: "cover",
            marginRight: "100px",
          }}
        />
      </div>
    </div>
  );
}

export default CeritaKami;
