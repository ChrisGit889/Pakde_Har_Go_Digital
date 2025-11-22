"use client"
import { BlogData } from "@/utils/dataTypes/BlogData"
import { useRouter } from "next/navigation"
import { Image } from "react-bootstrap"

export default function CardBlog({ b }: { b: BlogData }) {
    const router = useRouter();
    return (
        <div
            style={{
                width: "330px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                overflow: "hidden",
                backgroundColor: "white",
            }}
        >
            <Image
                src={b.image.data ? b.image.data : '/images/placeholder.jpg'}
                alt=""
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px", textAlign: "left" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#000" }}>{b.blog.title}</h3>
                <p style={{ fontSize: "16px", color: "#000", margin: "10px 0 20px 0" }}>
                    {b.blog.description}
                </p>
                <button
                    onClick={() => router.push(`/blog/${b.id}`)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#ff8c00",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    Detail Berita
                </button>
            </div>
        </div>
    )
}