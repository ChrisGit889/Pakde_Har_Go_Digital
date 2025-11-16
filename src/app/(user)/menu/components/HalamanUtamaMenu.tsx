"use client";
import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "@mui/material";

function HalamanUtamaMenu() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/Nasi_Goreng_Ayam.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        color: "white",
      }}
    >

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <Container
        className="position-relative z-1"
        style={{ maxWidth: "800px", padding: "0 20px" }}
      >
        <h1
          className="fw-bold"
          style={{
            fontSize: "clamp(32px, 5vw, 64px)",
          }}
        >
          Menu<span style={{ color: "#FF941A" }}>Kami</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(14px, 2vw, 20px)",
            marginTop: "20px",
            lineHeight: "1.6",
          }}
        >
          Temukan berbagai nasi goreng lezat yang disajikan dengan cinta dan rasa
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link href="/menu/#menuUnggulan">
            <Button
              style={{
                backgroundColor: "#FF941A",
                border: "none",
                fontWeight: "bold",
                color: "white",
                padding: "10px 25px",
                borderRadius: "6px",
              }}
            >
              Lihat Menu
            </Button>
          </Link>
        </div>
      </Container>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Image
          src="/images/PanahBawah.png"
          alt="Scroll Down"
          style={{ width: "30px", opacity: 0.9 }}
        />
      </div>
    </div>
  );
}

export default HalamanUtamaMenu;
