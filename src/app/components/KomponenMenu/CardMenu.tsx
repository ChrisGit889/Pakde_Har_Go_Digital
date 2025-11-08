"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Row, Col, Card, Button, Badge, Pagination } from "react-bootstrap";
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
    <div>
      <div style={{ width: "100%", padding: "0 40px" }}>
        <Row
          id="cardmenu"
          className="justify-content-center gap-4 m-0"
          style={{
            marginBottom: "40px",
            width: "100%",
          }}
        >
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <Col key={item.foodId} md={3}>
                <Card style={{ borderRadius: "12px", overflow: "hidden" }}>
                  <Card.Img
                    src={getImagePath(item.imageid)}
                    style={{ height: "180px", objectFit: "cover" }}
                    alt={item.name}
                  />
                  <Card.Body>
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

                    <Card.Text style={{ fontSize: "14px" }}>
                      {item.description}
                    </Card.Text>

                    <Button
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
            ))
          ) : (
            <p
              style={{
                textAlign: "center",
                marginTop: "50px",
                fontWeight: "bold",
              }}
            >
              Tidak ada makanan untuk kategori ini.
            </p>
          )}
        </Row>

        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Pagination>
              {totalPages > 1 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
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

                    {currentPage < totalPages - 3 && (
                      <Pagination.Ellipsis disabled />
                    )}

                    {totalPages > 1 && (
                      <Pagination.Item
                        active={totalPages === currentPage}
                        onClick={() => handlePageChange(totalPages)}
                      >
                        {totalPages}
                      </Pagination.Item>
                    )}

                    <Pagination.Next
                      id="next-button"
                      onClick={() =>
                        handlePageChange(
                          currentPage < totalPages
                            ? currentPage + 1
                            : totalPages
                        )
                      }
                      disabled={currentPage === totalPages}
                    />
                  </Pagination>
                </div>
              )}
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardMenu;
