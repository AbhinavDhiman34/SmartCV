import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { API } from "../service/UserApi";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await API.get("/user/check", {
          withCredentials: true,
        });

        setIsAuthenticated(res.data?.success || false);
      } catch (err) {
        setIsAuthenticated(false);
      }
    };

  
      checkAuth();
  

    
  }, []);

  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
