"use client";
import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CategoryData } from "@/utils/dataTypes/CategoryData";
import { BlogData } from "@/utils/dataTypes/BlogData";
import CardBerita from "./CardBerita";

function KategoriBerita({ categories, blogs }: { categories: CategoryData, blogs: BlogData[] }) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  return (
    <>
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
          {categories.data.map((cat) => (
            <Col
              key={cat.name}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              className="d-flex justify-content-center"
            >
              <Button
                variant="outline-warning"
                onClick={() => setActiveCategory(cat.name)}
                className="d-flex align-items-center justify-content-center fw-bold w-100"
                style={{
                  borderColor: "#FF941A",
                  backgroundColor:
                    activeCategory === cat.name ? "#FF941A" : "#fff",
                  color: activeCategory === cat.name ? "#fff" : "#FF941A",
                  padding: "10px",
                  gap: "8px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
              >
                <span style={{ fontSize: "clamp(12px, 2vw, 16px)" }}>
                  {cat.name}
                </span>
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
      <CardBerita blogs={blogs} category={activeCategory} />
    </>
  );
}

export default KategoriBerita;
