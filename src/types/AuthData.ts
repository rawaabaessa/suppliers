import type { User } from "../types/User";

export type LoginCredentials = {
  email: string;
  password: string;
};

export type SignupData = {
  name: string;
  email: string;
  password: string;
  role?: User["role"];
};
