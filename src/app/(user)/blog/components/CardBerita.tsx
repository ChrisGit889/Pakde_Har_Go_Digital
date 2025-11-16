"use client";
import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Pagination,
  Container,
} from "react-bootstrap";
import { useRouter } from "next/navigation";
import { BlogData } from "@/utils/dataTypes/BlogData";
import { imgToData } from "@/utils/clientUtils";

function CardBerita({ blogs, category }: { blogs: BlogData[], category: string }) {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredblogs = category == 'Semua' ? blogs : blogs.filter((b) => b.blog.category == category);

  if (filteredblogs.length === 0) {
    return (
      <Container fluid className="py-4 px-3 px-md-5">
        <p className="text-center fw-bold mt-5">Saat ini belum ada blog.</p>
      </Container>
    );
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredblogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredblogs.length / itemsPerPage);

  return (
    <Container className="py-4 px-3 px-md-5">
      <Row
        id="cardblog"
        className="justify-content-center g-4"
        style={{ marginBottom: "40px" }}
      >
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <Col
              key={item.id}
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
                  src={item.image.name ? imgToData(item.image.data, item.image.name) : '/images/placeholder.jpg'}
                  alt={item.blog.title}
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="mb-2">{item.blog.title}</Card.Title>

                    <Card.Text
                      className="text-muted"
                      style={{ fontSize: "14px", color: "black" }}
                    >
                      {item.blog.description}
                    </Card.Text>
                  </div>

                  <Button
                    onClick={() => router.push(`/blog/${item.id}`)}
                    className="mt-3 fw-bold"
                    style={{
                      width: "100%",
                      backgroundColor: "#FF7A00",
                      border: "none",
                      padding: "10px",
                    }}
                  >
                    Detail Blog
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center fw-bold mt-5">
            Tidak ada blog untuk kategori ini.
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

export default CardBerita;
