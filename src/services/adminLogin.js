import axios from "axios";
import { ADMIN_TOKEN_STORAGE_KEY } from "../constants/AuthConstant";

export function adminLogin(loginCred){
   
    return axios.post("http://127.0.0.1:6800/admins/login",loginCred)
}
export function storeToken(token){
    localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY,token)
}
export function removeToken(){
    localStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY)
}
export function getToken(){
   return  localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY)
}

// import axios from "axios"

// export function adminLogin(loginCredentials){
//     return axios.post("http://127.0.0.1:6800/admins/login",loginCredentials)
// }

// export function storeToken(token){
//     localStorage.setItem('admin-token',token);
// }

// export function removeToken(){
//    localStorage.removeItem('admin-token',token);
// }

// export function getToken(){
    
// }