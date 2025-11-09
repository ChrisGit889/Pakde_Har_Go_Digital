"use client";
import React from "react";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import { useRouter } from "next/navigation";

const getImagePath = (imageid: string) => {
  switch (imageid) {
    case "image_1":
      return "/images/Nasi_Goreng_Ayam.jpg";
    case "image_2":
      return "/images/miegorengayam.png";
    case "image_3":
      return "/images/kwetiaugorengayam.png";
    default:
      return "/images/local_dining.png";
  }
};

const IDCategory = (categoryId: string) => {
  switch (categoryId) {
    case "Category_1":
      return "Nasi Goreng";
    case "Category_2":
      return "Mie Goreng";
    case "Category_3":
      return "Kwetiau Goreng";
    case "Category_4":
      return "Rekomendasi";
    default:
      return "Lainnya";
  }
};

function MenuUnggulan() {
  const router = useRouter();

  const menu = [
    {
      foodId: "food_1",
      name: "Nasi Goreng Ayam",
      description:
        "Nasi Goreng Ayam khas Pakde dengan kecap manis, disajikan dengan ayam, dan kerupuk udang",
      flavour: "pedas",
      price: 22000,
      visitors: 0,
      categoryid: ["Category_4", "Category_1"],
      imageid: "image_1",
    },
    {
      foodId: "food_2",
      name: "Nasi Goreng Ayam",
      description:
        "Nasi Goreng Ayam khas Pakde dengan kecap manis, disajikan dengan ayam, dan kerupuk udang",
      flavour: "pedas",
      price: 22000,
      visitors: 0,
      categoryid: ["Category_4", "Category_1"],
      imageid: "image_1",
    },
    {
      foodId: "food_3",
      name: "Nasi Goreng Ayam",
      description:
        "Nasi Goreng Ayam khas Pakde dengan kecap manis, disajikan dengan ayam, dan kerupuk udang",
      flavour: "pedas",
      price: 22000,
      visitors: 0,
      categoryid: ["Category_4", "Category_1"],
      imageid: "image_1",
    },
  ];

  return (
    <div>
      <div style={{ width: "100%", padding: "0 40px" }}>
        <Row
          className="justify-content-center gap-4 m-0"
          style={{ marginBottom: "40px" }}
        >
          {menu.map((item, index) => (
            <Col key={index} md={3}>
              <Card style={{ borderRadius: "12px", overflow: "hidden" }}>
                <Card.Img
                  src={getImagePath(item.imageid)}
                  style={{ height: "180px", objectFit: "cover" }}
                />

                <Card.Body>
                  <Card.Title className="mb-2 fw-bold">{item.name}</Card.Title>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {item.categoryid.map((cat, i) => (
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
                        {IDCategory(cat)}
                      </Badge>
                    ))}
                  </div>

                  <Card.Text style={{ fontSize: "14px" }}>
                    {item.description}
                  </Card.Text>

                  <Button
                    onClick={() => router.push(`/menu/${item.foodId}`)}
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
  );
}

export default MenuUnggulan;
