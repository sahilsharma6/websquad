import React from 'react'
import { useAuth } from '../../../contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ allowedRoles, children }) => {
    const { user } = useAuth(); // Your auth context/hook

    if (!user) {
        return <Navigate to="/Authentication/login" />;
    }

    return children;
};

export default PrivateRoute