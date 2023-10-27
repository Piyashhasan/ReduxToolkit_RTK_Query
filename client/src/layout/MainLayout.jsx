import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";


const MainLayout = () => {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
