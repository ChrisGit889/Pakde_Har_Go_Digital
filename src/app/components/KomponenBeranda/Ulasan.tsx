"use client";
import React from "react";

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
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "60px 80px",
        marginBottom: "150px",
      }}
    >
      {ulasan.map((item, index) => (
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
          <h4 style={{ marginBottom: "4px" , color: "#000000ff",fontWeight: "600"}}>{item.nama}</h4>
          <p style={{ fontSize: "14px", marginBottom: "8px", color: "#000000ff" }}>
            {item.status}
          </p>

          <div style={{ color: "#FFA726", marginBottom: "12px" }}>
            ★ ★ ★ ★ ★
          </div>

          <p style={{ fontSize: "14px",color: "#000000ff", lineHeight: "1.6" }}>{item.teks}</p>
        </div>
      ))}
    </div>
  );
}

export default Ulasan;