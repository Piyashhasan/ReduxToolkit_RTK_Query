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

  // --- Theme state ---
  const [theme, setTheme] = useState("light");
  // --- PC Default theme ---
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // --- Handle theme by clicking Button ---
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
    <div className="min-h-screen sm:h-full pt-3 dark:bg-[#0F172A]">
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
