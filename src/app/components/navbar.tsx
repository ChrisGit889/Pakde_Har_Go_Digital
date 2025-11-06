"use client";
import { use } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponents() {
  return (
    <Navbar expand="lg" className="sticky-top bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/images/LogoPakde.png"
            alt="Logo PakDe"
            width="180"
            height="45"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto gap-5" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">Beranda</Nav.Link>
            <Nav.Link href="#action2">Menu</Nav.Link>
            <Nav.Link href="#action2">Tentang Kami</Nav.Link>
            <Nav.Link href="#action2">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarComponents;
