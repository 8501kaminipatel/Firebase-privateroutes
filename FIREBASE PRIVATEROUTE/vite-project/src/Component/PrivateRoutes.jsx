import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { Usercontext } from '../CONTEXT/AuthContext';

const PrivateRoutes = ({ children }) => {
  const {user} = useContext( Usercontext)

    if (!user) {
        return <Navigate to={"/login"} />;
    }
    
    return children;
};

export default PrivateRoutes;



