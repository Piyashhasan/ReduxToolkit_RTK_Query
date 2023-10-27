import { useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../services/API/apiSlice";

const UserDetails = () => {
  // --- user id get from URL ---
  const { id } = useParams();
  const { data } = useGetSingleUserQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <main className="md:container lg:container mx-auto p-5 dark:text-white">
      <div className="mt-10 border rounded p-5 w-[600px] mx-auto">
        <h1 className="text-center text-2xl font-semibold text-indigo-600">
          User Details
        </h1>
        <div className="text-lg space-y-3 mt-4 text-justify">
          <p>Name: {data?.users?.name}</p>
          <p>Email: {data?.users?.email}</p>
          <p>Phone: {data?.users?.phone}</p>
          <p>Address: {data?.users?.address}</p>
          <p>About: {data?.users?.about}</p>
        </div>
      </div>
    </main>
  );
};

export default UserDetails;
