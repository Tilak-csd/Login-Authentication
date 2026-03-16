import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');

    if (!token) {
        // If no token, redirect to login page
        // 'replace' prevents the user from clicking "back" to the restricted page
        return <Navigate to="/auth/login" replace />;
    }

    // If token exists, render the children (the Dashboard)
    return children;
};

export default ProtectedRoute;