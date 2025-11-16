"use client";
import { imgToData } from "@/utils/clientUtils";
import { BlogData } from "@/utils/dataTypes/BlogData";
import { fetchData } from "@/utils/utils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Row, Container, Image } from "react-bootstrap";

export default function DetailBerita() {
  const params = useParams();
  const router = useRouter();

  const [load, setLoad] = useState(false);

  const [blog, setBlog] = useState<BlogData>();

  const id = params.blogId as string;

  async function asyncFetch() {
    const data = await fetchData('/blog/' + id, { method: 'GET' });

    if (data) {
      setBlog(data);
    }
    setLoad(true);
  }

  // eslint-disable-next-line react-hooks/set-state-in-effect, react-hooks/exhaustive-deps
  useEffect(() => { asyncFetch(); }, []);

  if (!load) {
    return <>Loading</>
  }

  if (!blog) {
    return (
      <Container className="text-center py-5">
        <h3>Berita tidak ditemukan 😢</h3>
        <Button
          onClick={() => router.push("/blog")}
          variant="secondary"
          className="mt-3"
        >
          Kembali ke Blog
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${blog.image.name ? imgToData(blog.image.data, blog.image.name) : '/images/placeholder.jpg'})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          className="position-absolute bottom-0 start-0 pb-5 ps-4"
          style={{ maxWidth: "90%" }}
        >
          <h1 className="fw-bold mb-2">{blog.blog.title}</h1>

        </Container>
      </div>

      <Container
        fluid="md"
        className="my-5 p-4 shadow-lg rounded"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          maxWidth: "85%",
        }}
      >
        <Row className="align-items-center g-4">
          <Col xs={12} md={6} className="text-center">
            <Image
              src={blog.image.name ? imgToData(blog.image.data, blog.image.name) : '/images/placeholder.jpg'}
              alt={blog.blog.title}
              className="img-fluid rounded shadow-sm"
              style={{
                height: "auto",
                maxHeight: "55vh",
                objectFit: "cover",
              }}
            />
          </Col>

          <Col xs={12} md={6}>
            <h2 className="fw-bold text-dark mb-3">{blog.blog.title}</h2>
            <p className="text-dark" style={{ fontSize: "16px" }}>
              {blog.blog.description}
            </p>
            <hr />
            <div className="text-dark" style={{ fontSize: "15px" }}>
              {blog.blog.story
                ? blog.blog.story
                : "Belum ada cerita untuk berita ini. Nantikan pembaruan selanjutnya!"}
            </div>

            <div className="mt-4 d-flex flex-column gap-3">
              <Button
                onClick={() => {
                  const message = `Baca berita "${blog.blog.title}" di sini: http://localhost:3001/blog/${blog.id}`;
                  const encodedMessage = encodeURIComponent(message);
                  window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
                }}
                className="fw-bold d-flex align-items-center justify-content-center gap-2"
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
                className="fw-bold d-flex align-items-center justify-content-center gap-2"
                style={{
                  backgroundColor: "#FF7A00",
                  border: "none",
                  padding: "10px 20px",
                }}
              >
                Kembali
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}
