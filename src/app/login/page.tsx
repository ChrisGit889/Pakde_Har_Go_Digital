'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { useRouter } from 'next/navigation'; 
import './LoginPage.css';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  
  const router = useRouter();

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 
    
    const newErrors = { email: '', password: '' };
    let hasError = false;

    if (!email) {
      newErrors.email = 'Harap isi bagian Email.';
      hasError = true;
    }
    if (!password) {
      newErrors.password = 'Harap isi bagian Password.';
      hasError = true;
    }
    setErrors(newErrors); 

    if (!hasError) {
      localStorage.setItem('admin_token', '12345_ini_adalah_admin_sah');
      console.log('Login berhasil, mengarahkan ke dashboard...');
      router.push('/admin/dashboard'); 
    }
  };

  return (
    <Container fluid className="login-page-wrapper-modern vh-100">
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
                  isInvalid={!!errors.email} 
                />
                <Form.Control.Feedback type="invalid" className="error-message">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="modern-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!errors.password} 
                  />
                  <InputGroup.Text 
                    className="modern-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid" className="error-message">
                    {errors.password}
                  </Form.Control.Feedback>
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