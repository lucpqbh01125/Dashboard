import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/Dashboard";
import DeThi from "@/pages/DeThi";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "dethi", element: <DeThi/> },
    ],
  },
]);

export default router;
