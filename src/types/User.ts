export interface User {
  id: string;
  name: string;
  email: string;
  role: "farmer" | "restaurant" | "admin";
}
