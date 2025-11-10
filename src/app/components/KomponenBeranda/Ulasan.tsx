"use client";
import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

function Ulasan() {
  const ulasan = [
    {
      nama: "Budi Is Man",
      status: "Mahasiswa Untar",
      teks: `"Nasi Goreng Original di sini adalah yang terbaik yang pernah saya coba di Jakarta. Bumbu yang sempurna dan pelayanan yang ramah membuat saya selalu kembali."`,
    },
    {
      nama: "Budi Is Man",
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
      status: "investor",
      teks: `"Nasi Goreng di Pakde Har benar-benar lezat! Setiap suapan membawa kenikmatan yang tak terlupakan. Saya sangat merekomendasikan tempat ini kepada siapa saja yang mencari cita rasa autentik."`,
    },
    {
      nama: "NuelGB",
      status: "trader",
      teks: `"Nasi Goreng di sini luar biasa! Rasanya yang kaya dan bumbu yang pas membuat saya ketagihan. Tempat yang sempurna untuk menikmati hidangan Indonesia yang autentik."`,
    },
    {
      nama: "Annuel",
      status: "Hfinancial advisor",
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
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          padding: "60px 20px",
          boxSizing: "border-box",
        }}
      >
        {currentItems.map((item, index) => (
          <div
            key={index}
            style={{
              width: "320px",
              background: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <h4
              style={{
                marginBottom: "4px",
                color: "#000000ff",
                fontWeight: "600",
              }}
            >
              {item.nama}
            </h4>
            <p
              style={{
                fontSize: "14px",
                marginBottom: "8px",
                color: "#000000ff",
              }}
            >
              {item.status}
            </p>
            <div style={{ color: "#FFA726", marginBottom: "12px" }}>
              ★ ★ ★ ★ ★
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "#000000ff",
                lineHeight: "1.6",
              }}
            >
              {item.teks}
            </p>
          </div>
        ))}
      </div>

      <Pagination
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
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
  );
}

export default Ulasan;
