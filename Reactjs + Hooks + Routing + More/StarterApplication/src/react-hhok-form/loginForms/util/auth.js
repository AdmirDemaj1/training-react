import { redirect } from "react-router-dom";

export function getAuthToken(){
    const token = localStorage.getItem("token")
    return token;
}

export function checkAuthToken(){
    const token = getAuthToken()
    console.log(token)

    if(!token){
        return redirect("/auth")
    }

    return {};
}