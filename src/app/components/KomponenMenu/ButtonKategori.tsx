"use client";
import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function KategoriMenu() {
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
          return "Kwetiau Goreng";
        case "Category_4":
          return "Rekomendasi";
        default:
          return "Semua";
      }
    };
    setActiveCategory(CategoryID(kategori));
  }, [kategori]);

  const KategoriAktif = (kategoriValue: string, label: string) => {
    setActiveCategory(label);
    if (kategoriValue === "Semua") {
      router.push("/menu#menuUnggulan");
    } else {
      router.push(`/menu?kategori=${kategoriValue}#menuUnggulan`);
    }
  };

  const categories = [
    {
      id: "Semua",
      label: "Semua",
      img: "/images/local_dining.png",
    },
    {
      id: "Category_4",
      label: "Rekomendasi",
      img: "/images/starsOrange.png",
    },
    {
      id: "Category_1",
      label: "Nasi Goreng",
      img: "/images/rice_bowl.png",
    },
    {
      id: "Category_2",
      label: "Mie Goreng",
      img: "/images/mieGoreng.png",
    },
    {
      id: "Category_3",
      label: "Kwetiau Goreng",
      img: "/images/mieGoreng.png",
    },
  ];

  return (
    <Container className="my-5">
      <Row className="justify-content-center g-3 text-center">
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
              <Image
                src={cat.img}
                alt={cat.label}
                style={{
                  width: "22px",
                  height: "22px",
                  filter:
                    activeCategory === cat.label
                      ? "brightness(0) invert(1)"
                      : "none",
                }}
              />
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

export default KategoriMenu;
