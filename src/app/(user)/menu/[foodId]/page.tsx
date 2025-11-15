"use client";
import { useParams, useRouter } from "next/navigation";
import { Badge, Button, Col, Row, Container } from "react-bootstrap";
import foods from "@/app/(user)/menu/components/DataMenu";
import NavbarComponents from "@/app/components/navbarWebUser/navbar";
import Footer from "@/app/(user)/components/footer";

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

export default function FoodDetail() {
  const params = useParams();
  const router = useRouter();

  const foodId = params.foodId as string;
  const food = foods.find((f) => f.foodId === foodId);

  if (!food) {
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
      <NavbarComponents />

      <div
        className="position-relative text-white"
        style={{
          width: "100%",
          height: "50vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${getImagePath(
            food.imageid
          )})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          className="position-absolute bottom-0 start-0 pb-5 ps-5"
          style={{ maxWidth: "90%" }}
        >
          <h1 className="fw-bold mb-3">{food.name}</h1>
          <div className="d-flex flex-wrap gap-2">
            {food.categoryid.map((cat, i) => (
              <Badge
                key={i}
                bg=""
                style={{
                  backgroundColor: "#FFF2CC",
                  color: "#FF941A",
                  padding: "6px 12px",
                  borderRadius: "6px",
                }}
              >
                {IDCategory(cat)}
              </Badge>
            ))}
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
            <img
              src={getImagePath(food.imageid)}
              alt={food.name}
              className="img-fluid rounded shadow-sm"
              style={{
                height: "auto",
                maxHeight: "55vh",
                objectFit: "cover",
              }}
            />
          </Col>

          <Col xs={12} md={6}>
            <h2 className="fw-bold text-dark mb-3">{food.name}</h2>
            <p className="text-dark" style={{ fontSize: "16px" }}>
              {food.description}
            </p>

            <div className="my-3 text-dark">
              <p>
                <strong>Rasa:</strong> {food.flavour}
              </p>
              <p>
                <strong>Harga:</strong>{" "}
                <span style={{ color: "#FF7A00", fontWeight: "bold" }}>
                  Rp {food.price.toLocaleString("id-ID")}
                </span>
              </p>
            </div>



            <Button
              onClick={() => {
                const message = `Lihat menu ${food.name} yang saya lihat di link: http://localhost:3001/menu/${food.foodId}`;
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
              <img
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

      <Footer />
    </div>
  );
}
