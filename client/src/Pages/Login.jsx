import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Stop page reload
        setLoading(true);
        setError(null);

        try {
            // 1. Make the API Call
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password
            });

            // 2. Extract Data (Assuming your API returns { token, user })
            const { token, user } = response.data;

            // 3. Save to LocalStorage (Production Standard for Persistence)
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            // 4. Redirect to Dashboard/Home
            console.log("Login Successful", user);
            navigate('/home');

        } catch (err) {
            // 5. Advanced Error Handling
            const message = err.response?.data?.message || "Invalid email or password. Please try again.";
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h2>Login to Your Account</h2>

                {/* Show error alert if login fails */}
                {error && (
                    <div style={{ color: 'white', backgroundColor: '#ff4d4d', padding: '10px', borderRadius: '5px' }}>
                        {error}
                    </div>
                )}

                <input 
                    type="text" 
                    placeholder="Email Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                    disabled={loading}
                />

                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    disabled={loading}
                />

                <button type="submit" disabled={loading} style={{ cursor: loading ? 'not-allowed' : 'pointer' }}>
                    {loading ? "Authenticating..." : "Login"}
                </button>

                <p>
                    Don't have an account? <Link to="/auth/register">Register here</Link>
                </p>
            </form>
        </div>
    );
}