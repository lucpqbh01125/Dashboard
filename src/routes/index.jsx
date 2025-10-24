import { createBrowserRouter } from "react-router-dom";
// import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/Dashboard";
import DeThi from "@/pages/DeThi";
import CardExam from "@/components/CardExam"
import Exam from "@/components/Exam";
import HeaderExam from "@/components/HeaderExam";
import FilterBar from "@/components/FilterBar";



const router = createBrowserRouter([
  {
    path: "/",
    element:"",
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "dethi", element: <DeThi /> },
      { path: "cardexam", element: <CardExam/> },
      { path: "examlayout", element: <Exam/> },
      { path: "examheader", element: <HeaderExam/> },
      { path: "filterbar", element: <FilterBar/> },
    ],
  },
]);

export default router;
