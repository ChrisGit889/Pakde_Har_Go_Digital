"use client";
import { Badge, Button, Col, Row, Container, Image } from "react-bootstrap";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/utils";
import { Menu } from "@/utils/dataTypes/MenuData";
import { imgToData } from "@/utils/clientUtils";

export default function FoodDetail() {
  const params = useParams();
  const router = useRouter();

  const [load, setLoad] = useState(false);

  const [data, setData] = useState<Menu>();

  const id = params.foodId as string;

  async function asyncFetch() {
    const data = await fetchData('/menu/' + id, { method: 'GET' });
    console.log(data);
    if (data) {
      setData(data);
    }
    setLoad(true);
  }

  // eslint-disable-next-line react-hooks/set-state-in-effect, react-hooks/exhaustive-deps
  useEffect(() => { asyncFetch() }, []);

  if (!load) return <>Loading</>
  if (!data) {
    return (
      <Container className="text-center py-5">
        <h3>Makanan tidak ditemukan 😢</h3>
        <Button
          onClick={() => router.push("/menu")}
          variant="secondary"
          className="mt-3"
        >
          Kembali ke Menu
        </Button>
      </Container>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">

      <div
        className="position-relative text-white"
        style={{
          width: "100%",
          height: "50vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${data.image.name ? imgToData(data.image.data, data.image.name) : '/images/placeholder.jpg'})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          className="position-absolute bottom-0 start-0 pb-5 ps-5"
          style={{ maxWidth: "90%" }}
        >
          <h1 className="fw-bold mb-3">{data.food.name}</h1>
          <div className="d-flex flex-wrap gap-2">

            <Badge
              bg=""
              style={{
                backgroundColor: "#FFF2CC",
                color: "#FF941A",
                padding: "6px 12px",
                borderRadius: "6px",
              }}
            >
              {data.food.category}
            </Badge>
          </div>
        </Container>
      </div>

      <Container
        fluid="md"
        className="my-5 p-4 shadow-lg rounded"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
          maxWidth: "85%",
        }}
      >
        <Row className="align-items-center g-4">
          <Col xs={12} md={6} className="text-center">
            <Image
              src={data.image.name ? imgToData(data.image.data, data.image.name) : '/images/placeholder.jpg'}
              alt={data.food.name}
              className="img-fluid rounded shadow-sm"
              style={{
                height: "auto",
                maxHeight: "55vh",
                objectFit: "cover",
              }}
            />
          </Col>

          <Col xs={12} md={6}>
            <h2 className="fw-bold text-dark mb-3">{data.food.name}</h2>
            <p className="text-dark" style={{ fontSize: "16px" }}>
              {data.food.description}
            </p>

            <div className="my-3 text-dark">
              <p>
                <strong>Rasa:</strong> {data.food.flavour}
              </p>
              <p>
                <strong>Harga:</strong>{" "}
                <span style={{ color: "#FF7A00", fontWeight: "bold" }}>
                  Rp {data.food.price.toLocaleString("id-ID")}
                </span>
              </p>
            </div>



            <Button
              onClick={() => {
                const message = `Lihat menu ${data.food.name} yang saya lihat di link: http://localhost:3001/menu/${data.id}`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
              }}
              className="w-100 fw-bold d-flex align-items-center justify-content-center gap-2"
              style={{
                backgroundColor: "#FF7A00",
                border: "none",
                padding: "10px 20px",
              }}
            >
              <Image
                src="/images/whatsapp.svg"
                alt="WhatsApp"
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
              Share
            </Button>
            <Button
              onClick={() => router.back()}
              className="w-100 fw-bold d-flex align-items-center justify-content-center gap-2"
              style={{
                backgroundColor: "#FF7A00",
                border: "none",
                padding: "10px 50px",
                marginTop: "2vh",
              }}
            >
              Kembali
            </Button>
          </Col>
        </Row>
      </Container>

    </div>
  );
}
