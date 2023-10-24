import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Link to="/">
        <button className="bg-indigo-500 px-5 py-2 mx-5 my-5 text-white hover:bg-indigo-600">
          Back
        </button>
      </Link>
      <h1 className="text-center text-4xl mt-10 mb-5 font-bold text-red-500">
        Not Found
      </h1>
      <p className="text-center text-xl text-indigo-600 font-semibold">404 Error ...!</p>
    </div>
  );
};

export default NotFound;
