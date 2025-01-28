import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Authentication/useAuth";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <div className="min-h-screen flex justify-center"><span className="loading loading-ball loading-lg"></span></div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/joinus" state={{ from: location }}></Navigate>

};
export default AdminRoute;