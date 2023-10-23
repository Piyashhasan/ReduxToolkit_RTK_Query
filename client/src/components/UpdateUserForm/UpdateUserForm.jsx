import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "../../services/API/apiSlice";
import toast from "react-hot-toast";

const UpdateUserForm = () => {
  // --- user id get from URL ---
  const { id } = useParams();

  //   --- get single user data from server ---
  const { data } = useGetSingleUserQuery(id);

  //   --- update data send to server ---
  const [updateUser, { isSuccess, isError }] = useUpdateUserMutation();

  //   --- input field state ---
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    about: "",
  });

  //   --- user previous info auto fill ---
  useEffect(() => {
    setUserData({
      name: data?.users?.name || "",
      email: data?.users?.email || "",
      phone: data?.users?.phone || "",
      address: data?.users?.address || "",
      about: data?.users?.about || "",
    });
  }, [data]);

  //   --- get value from input field ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: name === "phone" ? Number(value) : value,
    });
  };

  //   --- update form submit handler ---
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ userId: id, updatedData: userData });
    setUserData({
      name: "",
      email: "",
      phone: "",
      address: "",
      about: "",
    });
  };

  //   --- toast message handler ---
  useEffect(() => {
    if (isSuccess) {
      toast.success("Update user info..", { id: "users" });
    }
    if (isError) {
      toast.error("Sorry User not update..", { id: "users" });
    }
  }, [isSuccess, isError]);

  return (
    <main className="md:container lg:container mx-auto p-5">
      <Link to="/">
        <button className="bg-indigo-500 px-5 py-2 text-xl text-white rounded hover:bg-indigo-600">
          Back
        </button>
      </Link>

      <div className="mt-10 w-[600px] mx-auto border p-5 rounded">
        <h1 className="text-center text-indigo-500 text-xl font-semibold mb-5">
          UPDATE INFORMATION
        </h1>
        <form onSubmit={handleSubmit} className="">
          <div className="flex items-center justify-between gap-5">
            <div className="mb-3 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="name"
                required
              />
            </div>
            <div className="mb-3 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                type="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="email"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-5">
            <div className="mb-3 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="phone"
                required
              />
            </div>

            <div className="mb-3 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                name="address"
                value={userData.address}
                onChange={handleInputChange}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="address"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your message
            </label>
            <textarea
              name="about"
              value={userData.about}
              onChange={handleInputChange}
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="about your self..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Update User
          </button>
        </form>
      </div>
    </main>
  );
};

export default UpdateUserForm;
