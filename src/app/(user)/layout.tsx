import Footer from "./components/footer";
import NavbarComponents from "../components/navbarWebUser/navbar";
import styles from "../page.module.css";
import { Image } from "react-bootstrap";

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.container}>
            <NavbarComponents />
            <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/images/whatsapp.svg"
                    alt=''
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        left: "20px",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        border: "4px solid #ffffff",
                        backgroundColor: "#ffffffff",
                        cursor: "pointer",
                        zIndex: 1000,
                    }}
                />
            </a>
            {children}
            <Footer />
        </div>
    );
}