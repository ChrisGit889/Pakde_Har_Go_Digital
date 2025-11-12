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
import berita from "./DummyBerita";

const IDCategory = (categoryId: string) => {
  switch (categoryId) {
     case "Category_1":
          return "Nasi Goreng";
        case "Category_2":
          return "Mie Goreng";
        case "Category_3":
          return "Lainnya";
        case "Category_4":
          return "Kwetiau Goreng";
        case "Semua":
          return "Semua";
        default:
          return "lainnya";
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
    case "image_4":
      return "/images/Gerobak_Pakde.jpg";
    default:
      return "/images/local_dining.png";
  }
};

function CardBerita() {
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

  const filteredblogs =
  kategori && kategori.toLowerCase() !== "semua"
    ? berita.filter((blog) => blog.CategoryID === kategori)
    : berita;


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredblogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredblogs.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.push(`${pathname}?${params.toString()}#cardmenu`);
  };

  return (
    <Container fluid className="py-4 px-3 px-md-5">
      <Row
        id="cardblog"
        className="justify-content-center g-4"
        style={{ marginBottom: "40px" }}
      >
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <Col
              key={item.blogId}
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
                  alt={item.title}
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="mb-2">{item.title}</Card.Title>


                    <Card.Text
                      className="text-muted"
                      style={{ fontSize: "14px", color: "black" }}
                    >
                      {item.description}
                    </Card.Text>
                  </div>

                  <Button
                    onClick={() => router.push(`/blog/${item.blogId}`)}
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



    </Container>
  );
}

export default CardBerita;
