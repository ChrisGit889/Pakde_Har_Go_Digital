"use client";
import React, { useState } from "react";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";

function Ulasan() {
  const ulasan = [
    {
      nama: "Zen",
      status: "Trader Crypto",
      teks: `"Nasi Goreng Original di sini adalah yang terbaik yang pernah saya coba di Jakarta. Bumbu yang sempurna dan pelayanan yang ramah membuat saya selalu kembali."`,
    },
    {
      nama: "Vivi",
      status: "Mahasiswa Untar",
      teks: `"Nasi Goreng Original di sini adalah yang terbaik yang pernah saya coba di Jakarta. Bumbu yang sempurna dan pelayanan yang ramah membuat saya selalu kembali."`,
    },
    {
      nama: "Budi Is Man",
      status: "Mahasiswa Untar",
      teks: `"Nasi Goreng Original di sini adalah yang terbaik yang pernah saya coba di Jakarta. Bumbu yang sempurna dan pelayanan yang ramah membuat saya selalu kembali."`,
    },
    {
      nama: "Christio",
      status: "Investor",
      teks: `"Nasi Goreng di Pakde Har benar-benar lezat! Setiap suapan membawa kenikmatan yang tak terlupakan. Saya sangat merekomendasikan tempat ini kepada siapa saja yang mencari cita rasa autentik."`,
    },
    {
      nama: "NuelGB",
      status: "Trader",
      teks: `"Nasi Goreng di sini luar biasa! Rasanya yang kaya dan bumbu yang pas membuat saya ketagihan. Tempat yang sempurna untuk menikmati hidangan Indonesia yang autentik."`,
    },
    {
      nama: "Annuel",
      status: "Financial Advisor",
      teks: `"Nasi Goreng disini enak sekali, Seenak Ramen Ichiraku Favoritku!"`,
    },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ulasan.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ulasan.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container fluid className="py-4">
      

      <Row
        className="justify-content-center g-4"
        style={{ padding: "0 20px" }}
      >
        {currentItems.map((item, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={3}>
            <Card
              className="shadow-sm"
              style={{
                borderRadius: "10px",
                minHeight: "270px",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    color: "#000",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {item.nama}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2"
                  style={{ color: "#000", fontSize: "14px" }}
                >
                  {item.status}
                </Card.Subtitle>
                <div
                  style={{
                    color: "#FFA726",
                    marginBottom: "12px",
                    fontSize: "1.2rem",
                  }}
                >
                  ★ ★ ★ ★ ★
                </div>
                <Card.Text
                  style={{
                    fontSize: "14px",
                    color: "#000",
                    lineHeight: "1.6",
                  }}
                >
                  {item.teks}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-4 mb-5">
        <Pagination>
          <Pagination.Prev
            onClick={() =>
              handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
            }
            disabled={currentPage === 1}
          />

          <Pagination.Item
            active={currentPage === 1}
            onClick={() => handlePageChange(1)}
          >
            1
          </Pagination.Item>

          {currentPage > 3 && <Pagination.Ellipsis disabled />}

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (num) =>
                num !== 1 &&
                num !== totalPages &&
                num >= currentPage - 1 &&
                num <= currentPage + 1
            )
            .map((num) => (
              <Pagination.Item
                key={num}
                active={currentPage === num}
                onClick={() => handlePageChange(num)}
              >
                {num}
              </Pagination.Item>
            ))}

          {currentPage < totalPages - 2 && <Pagination.Ellipsis disabled />}

          {totalPages > 1 && (
            <Pagination.Item
              active={currentPage === totalPages}
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </Pagination.Item>
          )}

          <Pagination.Next
            onClick={() =>
              handlePageChange(
                currentPage < totalPages ? currentPage + 1 : totalPages
              )
            }
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </Container>
  );
}

export default Ulasan;
