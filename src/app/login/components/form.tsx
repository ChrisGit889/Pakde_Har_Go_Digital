'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { EyeSlash, Eye } from "react-bootstrap-icons";
import { login } from "@/utils/utils";

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

export default function AdminForm({ }) {
    const [modalMessage, setModalMessage] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const handleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        //Clientside Controller
        if (!username) {
            setModalMessage('Harap isi bagian Username.'); // <-- Tampilkan modal
            return;
        }
        if (!password) {
            setModalMessage('Harap isi bagian Password.'); // <-- Tampilkan modal
            return;
        }
        const success: number | string = await login(username, password);
        if (success == 1) router.push('/admin/dashboard');
        else {
            setModalMessage("Informasi login invalid!");
            console.log(success);
        }
    };
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        name="username"
                        type="text"
                        placeholder="admin username"
                        className="modern-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <Form.Control
                            name="password"
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
            {modalMessage && (
                <ErrorModal
                    message={modalMessage}
                    onClose={() => setModalMessage(null)}
                />
            )}
        </>
    );
}