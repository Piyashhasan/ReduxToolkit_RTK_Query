import { useEffect } from "react";
import "./App.css";
import { initFlowbite } from "flowbite";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import UsersList from "./components/UsersLists/UsersList";
import { Toaster } from "react-hot-toast";

function App() {
  // --- initialize Tailwind Css Flowbite ---
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div>
      <Toaster />
      <h1 className="text-center mt-5 text-2xl">USER MANAGEMENT</h1>
      <main className="md:container lg:container mx-auto p-5 grid grid-cols-2 gap-5 mt-12">
        <section className="p-5 rounded border h-[450px]">
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
