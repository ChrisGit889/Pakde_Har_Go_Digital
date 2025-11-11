"use client";
import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Badge,
  Pagination,
  Container,
} from "react-bootstrap";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import foods from "./DataMenu";

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

function CardMenu() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const kategori = searchParams.get("kategori");
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const itemsPerPage = 6;

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  const filteredFoods =
    kategori && kategori !== "semua"
      ? foods.filter((food) => food.categoryid.includes(kategori))
      : foods;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFoods.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.push(`${pathname}?${params.toString()}#cardmenu`);
  };

  return (
    <Container fluid className="py-4 px-3 px-md-5">
      <Row
        id="cardmenu"
        className="justify-content-center g-4"
        style={{ marginBottom: "40px" }}
      >
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <Col
              key={item.foodId}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              className="d-flex align-items-stretch"
            >
              <Card
                className="w-100 shadow-sm"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <Card.Img
                  src={getImagePath(item.imageid)}
                  alt={item.name}
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="mb-2">{item.name}</Card.Title>

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

                    <Card.Text
                      className="text-muted"
                      style={{ fontSize: "14px", color: "black" }}
                    >
                      {item.description}
                    </Card.Text>
                  </div>

                  <Button
                    onClick={() => router.push(`/menu/${item.foodId}`)}
                    className="mt-3 fw-bold"
                    style={{
                      width: "100%",
                      backgroundColor: "#FF7A00",
                      border: "none",
                      padding: "10px",
                    }}
                  >
                    Detail Makanan
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center fw-bold mt-5">
            Tidak ada makanan untuk kategori ini.
          </p>
        )}
      </Row>

      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-3">
          <Pagination>
            <Pagination.Prev
              onClick={() =>
                handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
              }
              disabled={currentPage === 1}
            />

            <Pagination.Item
              active={1 === currentPage}
              onClick={() => handlePageChange(1)}
            >
              1
            </Pagination.Item>

            {currentPage > 4 && <Pagination.Ellipsis disabled />}

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (num) =>
                  num !== 1 &&
                  num !== totalPages &&
                  num >= currentPage - 2 &&
                  num <= currentPage + 2
              )
              .map((num) => (
                <Pagination.Item
                  key={num}
                  active={num === currentPage}
                  onClick={() => handlePageChange(num)}
                >
                  {num}
                </Pagination.Item>
              ))}

            {currentPage < totalPages - 3 && <Pagination.Ellipsis disabled />}

            {totalPages > 1 && (
              <Pagination.Item
                active={totalPages === currentPage}
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
      )}
    </Container>
  );
}

export default CardMenu;
