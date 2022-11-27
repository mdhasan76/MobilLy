import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import useSeller from './hooks/useSeller';
import Spiner from './Spiner';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, sellerLoading] = useSeller(user?.email)
    const location = useLocation();
    if (loading || sellerLoading) {
        return <Spiner />
    }

    if (user && isSeller) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default SellerRoute;