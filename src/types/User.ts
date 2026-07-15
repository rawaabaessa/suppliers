export interface Role {
  id: number;
  name: string;
}

export interface Farmer {
  id: number;
  farm_name: string;
  city: string;
  status: "pending" | "approved" | "rejected";
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  farmer?: Farmer | null;
}
