import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import BusinessInfo from "../pages/auth/suppliers/BusinessInfo";
import DocumentUpload from "../pages/auth/suppliers/DocumentUpload";
import AddressInfo from "../pages/auth/suppliers/AddressInfo";
import BankDetails from "../pages/auth/suppliers/BankDetails";
import SupplierRegistrationLayout from "../layouts/SupplierRegistrationLayout";

export const router = createBrowserRouter([
  { path: "/", element: <h1>Home</h1> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/supplier/signup",
    element: <SupplierRegistrationLayout />,
    children: [
      {
        path: "step-1",
        index: true,
        element: <BusinessInfo />,
      },
      {
        path: "step-2",
        element: <DocumentUpload />,
      },
      {
        path: "step-3",
        element: <AddressInfo />,
      },
      {
        path: "step-4",
        element: <BankDetails />,
      },
    ],
  },
]);
