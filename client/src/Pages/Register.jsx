import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Axios automatically stringifies 'formData' to JSON
            // and sets 'Content-Type: application/json' for you.
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);

            // With Axios, the actual data from the server is in .data
            console.log("Success:", response.data);
            
            alert("Registration successful!");
            navigate("/auth/login");

        } catch (err) {
            // Axios puts the server's error response inside err.response
            const serverMessage = err.response?.data?.message || "Something went wrong";
            setError(serverMessage);
            console.error("Registration Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <input name="username" placeholder="Username" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

            <button type="submit" disabled={loading}>
                {loading ? "Processing..." : "Register"}
            </button>
        </form>
    );
}