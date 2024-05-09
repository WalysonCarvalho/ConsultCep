import { createBrowserRouter } from "react-router-dom";
import { LoginForm } from "../Login/pagForm";
import { ConsultCep } from "../ConsultCep/searchCep";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/consult",
    element: <ConsultCep />,
  },
]);
