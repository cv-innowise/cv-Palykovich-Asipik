import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth/service';

export const ProtectedRoute = () => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};
