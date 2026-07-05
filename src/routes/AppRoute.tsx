import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import BusinessInfo from "../pages/auth/suppliers/BusinessInfo";
import DocumentUpload from "../pages/auth/suppliers/DocumentUpload";
import AddressInfo from "../pages/auth/suppliers/AddressInfo";
import BankDetails from "../pages/auth/suppliers/BankDetails";
import SupplierRegistrationLayout from "../layouts/SupplierRegistrationLayout";
import Home from "../pages/Home";
import AccountPendingPage from "../pages/AccountPendingPage";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    children: [
      {
        index: true,
        element: <Signup />,
      },
    ],
  },
  {
    path: "/signup/supplier",
    element: <SupplierRegistrationLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="step-1" replace />,
      },
      {
        path: "step-1",
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
  {
    path: "/account-pending",
    element: <AccountPendingPage />,
  },
]);
