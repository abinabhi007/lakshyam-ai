import { headers } from "next/headers";
import api from "./api";

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post("/auth/login/", { username, password });
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const register = async (email: string, password: string,username:string) => {
    try {
        const response = await api.post("/auth/register/", {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error("Error during register:", error);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await api.post("/auth/logout/");
        return response.data;
    } catch (error) {
        console.error("Error during logout:", error);
        throw error;
    }
};

export const getProfile = async () => {
    try {
        const response = await api.get("/auth/profile/",{
            headers:{'Authorization': `Bearer ${localStorage.getItem("access")}`}
        });
        console.log(response.data,"response");
        return response.data;
    } catch (error) {
        console.error("Error during get profile:", error);
        throw error;
    }
};

export const refreshToken = async () => {
    try {
        const response = await api.post("/auth/token/refresh/",{
            'refresh': localStorage.getItem("refresh")
        });
        localStorage.setItem("access", response.data.access);
        return response.data;
    } catch (error) {
        console.error("Error during refresh token:", error);
        throw error;
    }
}