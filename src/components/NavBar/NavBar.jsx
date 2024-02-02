import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeController";

const NavBar = () => {
  const { handleTheme, theme } = useTheme();
  return (
    <div className="grid grid-cols-2 bg-indigo-300 py-3 mx-1 mb-5 rounded-full">
      <div className="">
        <Link to="/">
          <h1 className="font-['Agbalumo'] mx-5 italic text-[12px] sm:text-xl hover:text-indigo-700">
            CRUD OPERATION
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-end mx-10">
        {theme === "light" ? (
          <button onClick={handleTheme} className="sm:mx-5">
            <BsMoonStars className="text-xl" />
          </button>
        ) : (
          <button onClick={handleTheme} className="sm:mx-5">
            <BsMoonStarsFill className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
