import AddUserForm from "../components/AddUserForm/AddUserForm";
import UsersList from "../components/UsersLists/UsersList";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5 text-2xl font-bold text-indigo-500">
        USER MANAGEMENT
      </h1>
      <main className="grid grid-cols-1 gap-3 p-2 sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2">
        <section className="rounded border h-auto sm:h-[450px]">
          <AddUserForm />
        </section>
        <section>
          <UsersList />
        </section>
      </main>
    </div>
  );
};

export default Home;

// md:container lg:container mx-auto p-5 grid grid-cols-2 gap-5 mt-12
// xxs:grid xxs:grid-cols-1 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2
