import { jwtDecode } from "jwt-decode";

export const decodedToken = () =>{
    const token = localStorage.getItem('jwtToken');
    return jwtDecode(token).userid;
}