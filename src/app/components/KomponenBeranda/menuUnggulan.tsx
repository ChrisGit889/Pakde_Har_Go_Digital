"use client";
import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
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
      name: "Mie Goreng Ayam",
      description:
        "Mie Goreng Ayam spesial dengan bumbu rahasia dan topping ayam suwir gurih.",
      flavour: "gurih",
      price: 20000,
      visitors: 0,
      categoryid: ["Category_2", "Category_4"],
      imageid: "image_2",
    },
    {
      foodId: "food_3",
      name: "Kwetiau Goreng Ayam",
      description:
        "Kwetiau goreng dengan rasa manis gurih, ditumis dengan ayam dan sayuran segar.",
      flavour: "manis",
      price: 23000,
      visitors: 0,
      categoryid: ["Category_3"],
      imageid: "image_3",
    },
  ];

  return (
    <Container
      fluid
      className="py-5"
      style={{
        padding: "0 5vw",
      }}
    >
      <Row
        className="justify-content-center g-4"
        style={{ marginBottom: "40px" }}
      >
        {menu.map((item, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-stretch"
          >
            <Card
              className="w-100 shadow-lg p-3 mb-5 bg-white rounded"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Card.Img
                src={getImagePath(item.imageid)}
                alt={item.name}
                style={{
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <Card.Body className="d-flex flex-column">
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
                        fontSize: "13px",
                      }}
                    >
                      {IDCategory(cat)}
                    </Badge>
                  ))}
                </div>

                <Card.Text
                  style={{
                    fontSize: "14px",
                    flexGrow: 1,
                  }}
                >
                  {item.description}
                </Card.Text>

                <Button
                  onClick={() => router.push(`/menu/${item.foodId}`)}
                  className="mt-2"
                  style={{
                    width: "100%",
                    backgroundColor: "#FF7A00",
                    border: "none",
                    color: "white",
                    padding: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Detail Makanan
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="justify-content-center">
        <Col xs="auto">
          <Button
            href="/menu"
            variant="outline-warning"
            className="mx-auto d-block fw-bold"
            style={{
              width: "200px",
              backgroundColor: "#ffffff",
              color: "#FF941A",
              padding: "10px",
              marginTop: "20px",
              border: "2px solid #FF941A",
            }}
          >
            Lihat Menu Lainnya
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MenuUnggulan;
