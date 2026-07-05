import api from "./api";
import type { SignupData, LoginCredentials } from "../types/AuthData";
import type { FarmerSignupData } from "../types/FarmerSignupData";

export const signupRequest = (data: SignupData) => {
  return api.post("/register", data);
};

export const farmersignupRequest = (data: FarmerSignupData) => {
  return api.post("/farmeregister", data);
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
