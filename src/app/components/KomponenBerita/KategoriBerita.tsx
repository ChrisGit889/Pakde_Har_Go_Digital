"use client";
import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function KategoriBerita() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const kategori = searchParams.get("kategori") || "Semua";

  const [activeCategory, setActiveCategory] = useState("Semua");

  useEffect(() => {
    const CategoryID = (kategoriValue: string) => {
      switch (kategoriValue) {
        case "Category_1":
          return "Nasi Goreng";
        case "Category_2":
          return "Mie Goreng";
        case "Category_3":
          return "Lainnya";
        case "Category_4":
          return "Kwetiau Goreng";
        case "Semua":
          return "Semua";
        default:
          return "lainnya";
      }
    };
    setActiveCategory(CategoryID(kategori));
  }, [kategori]);

  const KategoriAktif = (kategoriValue: string, label: string) => {
    setActiveCategory(label);
    if (kategoriValue === "Semua") {
      router.push(`/blog?kategori=${kategoriValue}#blogterbaru`);
    } else {
      router.push(`/blog?kategori=${kategoriValue}#blogterbaru`);
    }
  };

  const categories = [
    {
      id: "Semua",
      label: "Semua",
    },
    {
      id: "Category_4",
      label: "Kwetiau Goreng",
    },
    {
      id: "Category_1",
      label: "Nasi Goreng",
    },
    {
      id: "Category_2",
      label: "Mie Goreng",
    },
    {
      id: "Category_3",
      label: "Lainnya",
    },
  ];

  return (
    <Container className="my-5">
        <div className="text-center mb-4" id="blogterbaru">
      <h1
        className="fw-bold" id="blogterbaru"
        style={{
          fontSize: "clamp(20px, 4vw, 32px)",
          color: "#000000ff",
        }}
      >
        Blog Terbaru Kami
      </h1>

      <p
        style={{
          fontSize: "clamp(12px, 2vw, 16px)",
          color: "#000000ff",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Temukan informasi terbaru, menu baru, cerita dapur, dan kabar penting dari Nasi Goreng Pakde Har.
      </p>
    </div>

      <Row className="justify-content-center g-3 text-center" >
        {categories.map((cat) => (
          <Col
            key={cat.id}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            className="d-flex justify-content-center"
          >
            <Button
              variant="outline-warning"
              onClick={() => KategoriAktif(cat.id, cat.label)}
              className="d-flex align-items-center justify-content-center fw-bold w-100"
              style={{
                borderColor: "#FF941A",
                backgroundColor:
                  activeCategory === cat.label ? "#FF941A" : "#fff",
                color: activeCategory === cat.label ? "#fff" : "#FF941A",
                padding: "10px",
                gap: "8px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ fontSize: "clamp(12px, 2vw, 16px)" }}>
                {cat.label}
              </span>
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default KategoriBerita;
