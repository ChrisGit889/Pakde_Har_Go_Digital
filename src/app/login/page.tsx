'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { useRouter } from 'next/navigation';
import './LoginPage.css';

const ErrorModal = ({ message, onClose }: { message: string, onClose: () => void }) => {
  return (
    <div className="error-modal-overlay" onClick={onClose}>
      <div className="error-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="error-modal-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
          </svg>
        </div>
        
        <h3>Input Tidak Lengkap</h3>
        <p>{message}</p>
        
        <button className="error-modal-button" onClick={onClose}>
          Oke
        </button>
      </div>
    </div>
  );
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const router = useRouter();
  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 

    if (!email) {
      setModalMessage('Harap isi bagian Email.'); // <-- Tampilkan modal
      return;
    }
    if (!password) {
      setModalMessage('Harap isi bagian Password.'); // <-- Tampilkan modal
      return;
    }
    console.log('Login berhasil, mengarahkan ke dashboard...');
    router.push('/admin/dashboard');
  };

  return (
    <Container fluid className="login-page-wrapper-modern vh-100">
      {modalMessage && (
        <ErrorModal 
          message={modalMessage} 
          onClose={() => setModalMessage(null)} 
        />
      )}

      <Row className="vh-100">
        
        <Col md={6} lg={7} className="login-image-column">
          <div className="login-branding-overlay"> 
              <img src="/images/logopakde.png" alt="Logo Pakde Har" width="160" />
              <h2>Admin Dashboard</h2>
              <p>Satu tempat untuk mengelola semuanya.</p>
          </div>
        </Col>
        <Col md={6} lg={5} className="login-form-column">
          <div className="login-form-wrapper">
            <h2 className="login-title mb-3">Welcome Back!</h2>
            <p className="login-subtitle mb-4">Masuk untuk melanjutkan ke dashboard.</p>
            <Form> 
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="name@example.com" 
                  className="modern-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="modern-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroup.Text 
                    className="modern-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              
              <div className="mb-4"></div>

              <Button 
                className="btn-login-modern w-100 mb-3" 
                onClick={handleSignIn}
                type="button" 
              >
                Sign In
              </Button>
            </Form>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}