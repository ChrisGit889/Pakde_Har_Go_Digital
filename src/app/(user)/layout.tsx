import Footer from "../components/footerWebUser/footer";
import NavbarComponents from "../components/navbarWebUser/navbar";
import styles from "../page.module.css";

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.container}>
            <NavbarComponents />
            {children}
            <Footer />
        </div>
    );
}