"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

function NavbarComponents() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`position-fixed w-100 z-3 transition-all ${
        scrolled || expanded
          ? "bg-white navbar-shadow py-2"
          : "bg-transparent py-4"
      }`}
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="/images/LogoPakde.png" alt="Logo" width="160" />
        </Navbar.Brand>
        <Navbar.Toggle
          className={scrolled || expanded ? "toggler-dark" : "toggler-light"}
        />
        <Navbar.Collapse>
          <Nav className="ms-auto gap-4 align-items-center">
            <Nav.Link
              href="/"
              className={`nav-link-custom ${
                isActive("/") ? "active-link" : ""
              } ${scrolled || expanded ? "text-dark" : "text-white"}`}
            >
              Beranda
            </Nav.Link>
            <Nav.Link
              href="/menu"
              className={`nav-link-custom ${
                isActive("/menu") ? "active-link" : ""
              } ${scrolled || expanded ? "text-dark" : "text-white"}`}
            >
              Menu
            </Nav.Link>

            <Nav.Link
              href="/tentangKami"
              className={`nav-link-custom ${
                isActive("/tentangKami") ? "active-link" : ""
              } ${scrolled || expanded ? "text-dark" : "text-white"}`}
            >
              Tentang Kami
            </Nav.Link>

            <Nav.Link
              href="/kontak"
              className={`nav-link-custom ${
                isActive("/kontak") ? "active-link" : ""
              } ${scrolled || expanded ? "text-dark" : "text-white"}`}
            >
              Kontak
            </Nav.Link>

            <Nav.Link
              href="/blog"
              className={`nav-link-custom ${
                isActive("/blog") ? "active-link" : ""
              } ${scrolled || expanded ? "text-dark" : "text-white"}`}
            >
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponents;
