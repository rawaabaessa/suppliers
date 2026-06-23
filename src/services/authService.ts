import api from "./api";
import type { SignupData, LoginCredentials } from "../types/AuthData";

export const signupRequest = (data: SignupData) => {
  return api.post("/register", data);
};

export const loginRequest = (data: LoginCredentials) => {
  return api.post("/login", data);
};

export const logoutRequest = () => {
  return api.post("/logout");
};

export const getUser = () => {
  return api.get("/user");
};
