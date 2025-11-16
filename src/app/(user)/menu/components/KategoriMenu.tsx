"use client";
import { useState } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Category, CategoryData } from "@/utils/dataTypes/CategoryData";
import CardMenu from "./CardMenu";
import { MenuData } from "@/utils/dataTypes/MenuData";

function KategoriMenu({ categories, menu }: { categories: CategoryData, menu: MenuData }) {

  const [activeCategory, setActiveCategory] = useState<Category>(categories.data[0]);

  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center g-3 text-center">
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
                onClick={() => setActiveCategory(cat)}
                className="d-flex align-items-center justify-content-center fw-bold w-100"
                style={{
                  borderColor: "#FF941A",
                  backgroundColor:
                    activeCategory.name === cat.name ? "#FF941A" : "#fff",
                  color: activeCategory.name === cat.name ? "#fff" : "#FF941A",
                  padding: "10px",
                  gap: "8px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
              >
                {/* <Image
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
              /> */}
                <span style={{ fontSize: "clamp(12px, 2vw, 16px)" }}>
                  {cat.name}
                </span>
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
      <CardMenu activeCategory={activeCategory} menu={menu} />
    </>
  );
}

export default KategoriMenu;
