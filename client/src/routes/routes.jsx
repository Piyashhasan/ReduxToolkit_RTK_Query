import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import UpdateUserForm from "../components/UpdateUserForm/UpdateUserForm";
import UserDetails from "../pages/UserDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "update/:id",
        element: <UpdateUserForm />,
      },
      {
        path: "user-details/:id",
        element: <UserDetails />,
      },
    ],
  },
]);

export default routes;
