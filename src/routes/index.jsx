import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/Dashboard";
import Dethi from "@/pages/Dethi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
    ], 
  },
  {
    path: "/dethi",
    element: <Dethi />,
  }
]);

export default router;
