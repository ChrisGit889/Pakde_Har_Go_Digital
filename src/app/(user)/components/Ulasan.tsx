"use client";
import { ReviewData } from "@/utils/dataTypes/ReviewData";
import React, { useState } from "react";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";

function Ulasan({ review }: { review: ReviewData }) {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);


  if (review.data.length === 0) {
    return (
      <Container fluid className="py-4">
        <p className="text-center fw-bold mt-5">Saat ini belum ada ulasan.</p>
      </Container>
    );
  }

  const totalPages = Math.ceil(review.data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = review.data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderStars = (rating: number) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, i) => (
      <span
        key={i}
        style={{
          color: i < rating ? "#FFA726" : "#E0E0E0",
        }}
      >
        {i < rating ? <StarFill /> : <Star />}
      </span>
    ));
  };

  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center g-4" style={{ padding: "0 20px" }}>
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
                  {item.user.name}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2"
                  style={{ color: "#000", fontSize: "14px" }}
                >
                  {item.user.details}
                </Card.Subtitle>

                <div style={{ marginBottom: "12px" }}>{renderStars(item.review.rating)}</div>

                <Card.Text
                  style={{
                    fontSize: "14px",
                    color: "#000",
                    lineHeight: "1.6",
                  }}
                >
                  {item.review.description}
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
