import { useEffect, useState } from "react";
import "./App.css";
import { initFlowbite } from "flowbite";
import store from "./app/store";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import { ThemeController } from "./context/ThemeController";

function App() {
  // --- initialize Tailwind Css Flowbite ---
  useEffect(() => {
    initFlowbite();
  }, []);

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-auto sm:h-screen pt-3 dark:bg-[#0F172A]">
      <Toaster />
      <Provider store={store}>
        <ThemeController value={{ handleTheme, theme }}>
          <RouterProvider router={routes} />
        </ThemeController>
      </Provider>
    </div>
  );
}

export default App;
