import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../services/API/apiSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";

const UsersList = () => {
  const { data, isLoading, isError } = useGetUsersQuery();
  const [deleteUser, { isSuccess }] = useDeleteUserMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully delete one user...", { id: "users" });
    }
    // if (!isSuccess) {
    //   toast.error("User not deleted...", { id: "users" });
    // }
  }, [isSuccess]);

  if (isLoading) {
    return <h1 className="text-indigo-600">Loading ....</h1>;
  }

  if (isError) {
    return (
      <h1 className="text-red-600">
        Sorry something happened please wait for few second...!
      </h1>
    );
  }

  return (
    <>
      {data?.users.map((users) => {
        const { _id, name, email, phone } = users;
        return (
          <div
            key={_id}
            className="p-2 flex items-center justify-between border rounded my-2"
          >
            <div className="">
              <p>Name : {name}</p>
              <p>Email : {email}</p>
              <p>Phone: {phone}</p>
            </div>
            <div className="space-x-2">
              <button className="text-white bg-indigo-400  hover:bg-indigo-600 focus:outline-none font-medium text-sm w-full sm:w-auto px-5 py-2 text-center rounded-full">
                <GrCircleInformation className="text-xl" />
              </button>
              <button className="text-white bg-green-500 hover:bg-green-800 focus:outline-none font-medium text-sm w-full sm:w-auto  px-5 py-2 text-center rounded-full">
                <BiEditAlt className="text-xl" />
              </button>
              <button
                onClick={() => deleteUser(_id)}
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium text-sm w-full sm:w-auto px-5 py-2 text-center rounded-full"
              >
                <AiFillDelete className="text-xl" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UsersList;
