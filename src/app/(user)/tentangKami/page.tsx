"use server";
import { Image } from "react-bootstrap";
import HalamanUtamatentangKami from "./components/HalamanUtamatentangKami";
import { AboutData } from "@/utils/dataTypes/AboutData";
import { fetchData } from "@/utils/utils";
import Link from "next/link";
import { EmployeeData } from "@/utils/dataTypes/EmployeeData";
import { BlogData } from "@/utils/dataTypes/BlogData";
import { cookies } from "next/headers";
import CardBlog from "./components/blogCard";

export default async function Menu() {
  const x = (await cookies()).getAll();
  const aboutData: AboutData = await fetchData('/page/about', { method: 'GET' });
  const employees: EmployeeData = await fetchData('/employee/list', { method: 'GET' });
  const blogData: BlogData[] = (await fetchData('/blog/list?limit=3', { method: 'GET' })).data;
  return (
    <>
      <HalamanUtamatentangKami />

      <div
        style={{
          maxWidth: "900px",
          margin: "120px auto 80px auto",
          padding: "0 20px",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "40px",
            color: "#000",
          }}
          id="tentangKami"
        >
          Dari Awal yang Sederhana
        </h2>

        {
          aboutData.data.storyDescription.split('\n').map((par, i) => {
            return <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#000", marginBottom: "22px" }} key={i}>{par}</p>
          })
        }
      </div>

      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 700,
            marginBottom: "10px",
            color: "#000",
          }}
        >
          Berita Harian Kami
        </h2>

        <p style={{ fontSize: "20px", color: "#000", marginBottom: "50px" }}>
          Ikuti berbagai berita dan perkembangan terbaru dari Pakde Har.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          padding: "0 20px",
        }}
      >
        {
          blogData.map(async (b) => {
            return <CardBlog b={b} key={b.id} />
          })
        }
      </div>

      <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "80px" }}>
        <Link
          suppressHydrationWarning
          href={'/blog'}
          style={{
            padding: "10px 24px",
            backgroundColor: "white",
            border: "2px solid #ff8c00",
            color: "#000",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Lihat Berita Lainnya
        </Link>
      </div>

      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "10px", color: "#000" }}>
          Kenali Tim Kami
        </h2>

        <p style={{ fontSize: "20px", color: "#000", marginBottom: "50px" }}>
          Orang dibalik Nasi Goreng Pakde Har
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 20px",
          marginBottom: "80px",
          gap: "20px"
        }}
      >
        {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          employees.data.map(async (emp, _) => {
            return (<div
              key={emp.id}
              style={{
                width: "400px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                overflow: "hidden",
                backgroundColor: "white",
              }}
            >
              <Image
                src={emp.image.data ? emp.image.data : '/images/placeholder.jpg'}
                alt=""
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />

              <div style={{ padding: "20px", textAlign: "left" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#000", marginBottom: "6px" }}>
                  {emp.profile.name}
                </h3>

                <p style={{ fontSize: "16px", color: "#ff8c00", fontWeight: 600, marginBottom: "12px" }}>
                  {emp.profile.role}
                </p>

                <p style={{ fontSize: "16px", color: "#000", lineHeight: 1.6 }}>
                  {emp.profile.description}
                </p>
              </div>
            </div>);

          })
        }
      </div>

    </>
  );
}
