import { AppRoutes } from "./app.routes";
import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./app.auth";
import { useAuth } from '../hooks/auth'
import { AdminRoutes } from "./app.admin.routes";

export function Routes(){
  const { user, admin } = useAuth();

  
  return(
    <BrowserRouter>
      {admin?.role === 'admin' ? <AdminRoutes /> : user?.role === 'user' ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );

}

