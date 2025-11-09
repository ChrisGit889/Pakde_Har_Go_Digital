"use client";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";

function KategoriMenu() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const kategori = searchParams.get("kategori") || "Semua";

  const [activeCategory, setActiveCategory] = useState("Semua");

  useEffect(() => {
    const CategoryID = (kategoriValue: string) => {
      switch (kategoriValue) {
        case "Category_1":
          return "Nasi Goreng";
        case "Category_2":
          return "Mie Goreng";
        case "Category_3":
          return "Kwetiau Goreng";
        case "Category_4":
          return "Rekomendasi";
        default:
          return "Semua";
      }
    };

    setActiveCategory(CategoryID(kategori));
  }, [kategori]); 

  const KategoriAktif = (kategoriValue: string, label: string) => {
    setActiveCategory(label);
    if (kategoriValue === "Semua") {
      router.push("/menu#cardmenu");
    } else {
      router.push(`/menu?kategori=${kategoriValue}#menuUnggulan`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "3vh",
        margin: "5vh 10vw",
      }}
    >

      <Button
        variant="outline-warning"
        onClick={() => KategoriAktif("Semua", "Semua")}
        style={{
          width: "clamp(120px, 15vw, 180px)",
          borderColor: "#FF941A",
          padding: "10px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          backgroundColor: activeCategory === "Semua" ? "#FF941A" : "#fff",
          color: activeCategory === "Semua" ? "#fff" : "#FF941A",
        }}
      >
        <img
          src="/images/local_dining.png"
          style={{
            width: "clamp(20px, 3vw, 20px)",
            filter:
              activeCategory === "Semua" ? "brightness(0) invert(1)" : "none",
          }}
          alt="Semua"
        />
        Semua
      </Button>

      <Button
        variant="outline-warning"
        onClick={() => KategoriAktif("Category_4", "Rekomendasi")}
        style={{
          width: "clamp(150px, 17vw, 200px)",
          borderColor: "#FF941A",
          padding: "10px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          backgroundColor:
            activeCategory === "Rekomendasi" ? "#FF941A" : "#fff",
          color: activeCategory === "Rekomendasi" ? "#fff" : "#FF941A",
        }}
      >
        <img
          src="/images/starsOrange.png"
          style={{
            width: "clamp(20px, 3vw, 20px)",
            filter:
              activeCategory === "Rekomendasi"
                ? "brightness(0) invert(1)"
                : "none",
          }}
          alt="Rekomendasi"
        />
        Rekomendasi
      </Button>

      <Button
        variant="outline-warning"
        onClick={() => KategoriAktif("Category_1", "Nasi Goreng")}
        style={{
          width: "clamp(120px, 15vw, 180px)",
          borderColor: "#FF941A",
          padding: "10px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          backgroundColor:
            activeCategory === "Nasi Goreng" ? "#FF941A" : "#fff",
          color: activeCategory === "Nasi Goreng" ? "#fff" : "#FF941A",
        }}
      >
        <img
          src="/images/rice_bowl.png"
          style={{
            width: "clamp(20px, 3vw, 20px)",
            filter:
              activeCategory === "Nasi Goreng"
                ? "brightness(0) invert(1)"
                : "none",
          }}
          alt="Nasi Goreng"
        />
        Nasi Goreng
      </Button>

      <Button
        variant="outline-warning"
        onClick={() => KategoriAktif("Category_2", "Mie Goreng")}
        style={{
          width: "clamp(120px, 15vw, 180px)",
          borderColor: "#FF941A",
          padding: "10px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          backgroundColor: activeCategory === "Mie Goreng" ? "#FF941A" : "#fff",
          color: activeCategory === "Mie Goreng" ? "#fff" : "#FF941A",
        }}
      >
        <img
          src="/images/mieGoreng.png"
          style={{
            width: "clamp(20px, 3vw, 20px)",
            filter:
              activeCategory === "Mie Goreng"
                ? "brightness(0) invert(1)"
                : "none",
          }}
          alt="Mie Goreng"
        />
        Mie Goreng
      </Button>

      <Button
        variant="outline-warning"
        onClick={() => KategoriAktif("Category_3", "Kwetiau Goreng")}
        style={{
          width: "clamp(120px, 15vw, 180px)",
          borderColor: "#FF941A",
          padding: "10px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          backgroundColor:
            activeCategory === "Kwetiau Goreng" ? "#FF941A" : "#fff",
          color: activeCategory === "Kwetiau Goreng" ? "#fff" : "#FF941A",
        }}
      >
        <img
          src="/images/mieGoreng.png"
          style={{
            width: "clamp(20px, 3vw, 20px)",
            filter:
              activeCategory === "Kwetiau Goreng"
                ? "brightness(0) invert(1)"
                : "none",
          }}
          alt="Kwetiau Goreng"
        />
        Kwetiau Goreng
      </Button>
    </div>
  );
}

export default KategoriMenu;
