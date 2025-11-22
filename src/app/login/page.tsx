"use server"
import { Container, Row, Col, } from 'react-bootstrap';
import './LoginPage.css';
import AdminForm from './components/form';
import { cookies } from 'next/headers';

export default async function LoginPage() {
  const x = cookies();
  return (
    <Container fluid className="login-page-wrapper-modern vh-100">
      <Row className="vh-100">
        <Col md={6} lg={7} className="login-image-column">
          <div className="login-branding-overlay">
            <img src="/images/LogoPakDe.png" alt="Logo Pakde Har" width="160" />
            <h2>Admin Dashboard</h2>
            <p>Satu tempat untuk mengelola semuanya.</p>
          </div>
        </Col>
        <Col md={6} lg={5} className="login-form-column">
          <div className="login-form-wrapper">
            <h2 className="login-title mb-3">Welcome Back!</h2>
            <p className="login-subtitle mb-4">Masuk untuk melanjutkan ke dashboard.</p>
            <AdminForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
}