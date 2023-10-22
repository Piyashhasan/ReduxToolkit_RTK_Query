import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { initFlowbite } from "flowbite";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import UsersList from "./components/UsersLists/UsersList";

function App() {
  // --- initialize Tailwind Css Flowbite ---
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div>
      <NavBar />
      <main className="md:container lg:container mx-auto p-5 grid grid-cols-2 gap-5 mt-12">
        <section className="p-5 rounded border">
          <AddUserForm />
        </section>
        <section className="p-3">
          <UsersList />
        </section>
      </main>
    </div>
  );
}

export default App;
