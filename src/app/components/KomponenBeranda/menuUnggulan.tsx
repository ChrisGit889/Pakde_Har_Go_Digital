"use client";
import React from "react";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";

function MenuUnggulan() {
  const menu = [
    {
      gambar: "/images/Nasi_Goreng_Ayam.jpg",
      nama: "Nasi Goreng Ayam",
      label: ["Nasi Goreng", "Rekomandasi",],
      deskripsi:
        "Nasi Goreng Ayam khas Pakde dengan kecap manis, disajikan dengan ayam, dan kerupuk udang",
    },
    {
      gambar: "/images/Nasi_Goreng_Ayam.jpg",
      nama: "Nasi Goreng Ayam",
      label: ["Nasi Goreng", "Rekomandasi",],
      deskripsi:
        "Nasi Goreng Ayam khas Pakde dengan kecap manis, disajikan dengan ayam, dan kerupuk udang",
    },
    {
      gambar: "/images/Nasi_Goreng_Ayam.jpg",
      nama: "Nasi Goreng Ayam",
      label: ["Nasi Goreng", "Rekomandasi",],
      deskripsi:
        "Nasi Goreng Ayam khas Pakde dengan kecap manis, disajikan dengan ayam, dan kerupuk udang",
    },
  ];

  return (
    <div>
      <div style={{ width: "100%", padding: "0 40px" }}>
        <Row
          className="justify-content-center gap-4 m-0"
          style={{
            marginBottom: "40px",
            width: "100%",
            margin: 0,
          }}
        >
          {menu.map((item, index) => (
            <Col key={index} md={3}>
              <Card style={{ borderRadius: "12px", overflow: "hidden" }}>
                <Card.Img
                  src={item.gambar}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="mb-2">{item.nama}</Card.Title>

                  <div
                    className="d-flex flex-wrap gap-2 mb-3"
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    {item.label.map((label, i) => (
                      <Badge
                        key={i}
                        bg=""
                        style={{
                          backgroundColor: "#FFF2CC",
                          color: "#FF941A",
                          padding: "6px 10px",
                          borderRadius: "6px",
                        }}
                      >
                        {label}
                      </Badge>
                    ))}
                  </div>

                  <Card.Text style={{ fontSize: "14px" }}>
                    {item.deskripsi}
                  </Card.Text>

                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#FF7A00",
                      border: "none",
                      color: "white",
                      padding: "10px",
                      fontWeight: "bold",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Detail Makanan
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <a href="/menu">
          <Button
            type="button"
            className="btn btn-outline-warning mx-auto d-block"
            style={{
              width: "200px",
              backgroundColor: "#ffffffff",
              color: "#FF941A",
              padding: "10px",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            Lihat Menu Lainnya
          </Button>
        </a>
      </div>
    </div>
  );
}

export default MenuUnggulan;
