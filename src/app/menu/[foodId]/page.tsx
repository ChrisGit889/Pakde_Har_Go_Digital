"use client";
import { useParams, useRouter } from "next/navigation";
import { Badge, Button, Col, Row } from "react-bootstrap";
import foods from "@/app/components/KomponenMenu/DataMenu";
import NavbarComponents from "@/app/components/navbarWebUser/navbar";
import Footer from "@/app/components/footerWebUser/footer";

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
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h3>Makanan tidak ditemukan 😢</h3>
        <Button onClick={() => router.push("/menu")} variant="secondary">
          Kembali ke Menu
        </Button>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavbarComponents />

      <div
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
        <div
          className="food-detail-header"
          style={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 10vh",
          }}
        >
          <h1>{food.name}</h1>
          <div className="badgefood" style={{ display: "flex", gap: "3vh" }}>
            {food.categoryid.map((cat, i) => (
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
        </div>
      </div>

      <div
        className="FoodDetail"
        style={{
          margin: "6vh auto",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          padding: "5vh 5vh",
          backgroundColor: "#fff",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 2)",
        }}
      >
        <Row className="align-items-center">
          <Col md={6} style={{ textAlign: "center" }}>
            <img
              src={getImagePath(food.imageid)}
              alt={food.name}
              style={{
                width: "90%",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                height: "50vh",
              }}
            />
          </Col>

          <Col md={6}>
            <h2
              style={{
                marginBottom: "10px",
                fontWeight: "bold",
                color: "#000000ff",
              }}
            >
              {food.name}
            </h2>
            <p style={{ fontSize: "16px", color: "#000000ff" }}>
              {food.description}
            </p>

            <div style={{ margin: "20px 0", color: "#000000ff" }}>
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

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {food.categoryid.map((cat, i) => (
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

            <Button
              onClick={() => {
                const message = `Lihat menu ${food.name} yang saya lihat di link: http://localhost:3001/menu/${food.foodId}`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
              }}
              style={{
                width: "100%",
                marginTop: "30px",
                backgroundColor: "#FF7A00",
                border: "none",
                padding: "10px 20px",
                fontWeight: "bold",
              }}
            >
              <img
                src="/images/whatsapp.svg"
                style={{
                  width: "clamp(30px, 3vw, 30px)",
                  marginRight: "1vh",
                  marginBottom: "4px",
                }}
                alt="Nasi Goreng"
              />
              Share
            </Button>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
