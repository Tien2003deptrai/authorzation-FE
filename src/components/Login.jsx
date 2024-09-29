// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Set the user role in local storage
        localStorage.setItem('userRole', role);

        // Redirect based on role
        switch (role) {
            case 'Admin':
                navigate('/admin');
                break;
            case 'MedicalCenter':
                navigate('/medical-center');
                break;
            case 'SalesAgent':
                navigate('/sales-agent');
                break;
            case 'PetDealer':
                navigate('/pet-dealer');
                break;
            case 'Customer':
                navigate('/');
                break;
            default:
                navigate('/login');
                break;
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="MedicalCenter">Medical Center</option>
                <option value="SalesAgent">Sales Agent</option>
                <option value="PetDealer">Pet Dealer</option>
                <option value="Customer">Customer</option>
            </select>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
