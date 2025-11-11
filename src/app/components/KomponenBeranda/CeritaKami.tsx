"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CeritaKami() {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center justify-content-between g-4">
        <div className="col-12 col-md-6 ps-md-5">
          <h2 className="fw-bold mb-2" style={{ color: "#000" }}>
            Cerita <span style={{ color: "#FFA726" }}>Kami</span>
          </h2>

          <div
            style={{
              width: "100px",
              height: "4px",
              backgroundColor: "#FF941A",
              marginBottom: "20px",
            }}
          ></div>

          <p
            className="text-dark"
            style={{
              fontSize: "clamp(14px, 2vw, 20px)",
              lineHeight: "1.6",
              maxWidth: "480px",
            }}
          >
            Didirikan pada tahun 2017 oleh{" "}
            <span style={{ fontWeight: "600", color: "#FF941A" }}>
              Pakde Har
            </span>
            , kedai kami menghadirkan cita rasa Indonesia yang autentik melalui
            hidangan andalan kami - Nasi Goreng. Berawal dari warung kecil di
            rumah, kini telah berkembang menjadi tempat kuliner favorit banyak
            orang.
          </p>
        </div>

        <div className="col-12 col-md-6 text-center pe-md-5">
          <img
            src="/images/Gerobak_Pakde.jpg"
            alt="Gerobak Nasi Goreng"
            className="img-fluid rounded-4"
            style={{
              maxWidth: "500px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CeritaKami;
