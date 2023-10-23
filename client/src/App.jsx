import { useEffect } from "react";
import "./App.css";
import { initFlowbite } from "flowbite";
import store from "./app/store";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Provider } from "react-redux";

function App() {
  // --- initialize Tailwind Css Flowbite ---
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div>
      <Toaster />
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
