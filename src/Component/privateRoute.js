import { Navigate, Outlet, Route, useNavigate } from "react-router-dom";
import { getToken } from "../services/adminLogin"

export function PrivateRoute(){
    const token = getToken();
  //  const navigate =  useNavigate();
  if(token){
    return <Outlet/>
  }else{
   return < Navigate to="/" />
 
  }
}