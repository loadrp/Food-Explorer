import { AppRoutes } from "./app.routes";
import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./app.auth";
import { useAuth } from '../hooks/auth'

export function Routes(){
  const { user } = useAuth();
  return(
    <BrowserRouter>
      {user ?  <AppRoutes/> : <AuthRoutes/> } 
    </BrowserRouter>
  )

}