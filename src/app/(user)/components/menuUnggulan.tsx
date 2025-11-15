/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { MenuData } from "@/utils/dataTypes/MenuData";
import { imgToData } from "@/utils/clientUtils";

function MenuUnggulan({ menu }: { menu: MenuData }) {
  const router = useRouter();

  if (menu!.data.length === 0) {
    return (
      <Container fluid className="py-5" style={{ padding: "0 5vw" }}>
        <p className="text-center fw-bold mt-5">
          Saat ini belum ada menu unggulan.
        </p>
      </Container>
    );
  }

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
        {menu!.data.map((item) => (
          <Col
            key={item.id}
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
                src={imgToData(item.image.data, item.image.name)}
                alt={item.image.name}
                style={{
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-2 fw-bold">{item.food.name}</Card.Title>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  <Badge
                    key={item.id}
                    bg=""
                    style={{
                      backgroundColor: "#FFF2CC",
                      color: "#FF941A",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      fontSize: "13px",
                    }}
                  >
                    {item.food.category}
                  </Badge>
                </div>

                <Card.Text
                  style={{
                    fontSize: "14px",
                    flexGrow: 1,
                  }}
                >
                  {item.food.description}
                </Card.Text>

                <Button
                  onClick={() => router.push(`/menu/${item.id}`)}
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
