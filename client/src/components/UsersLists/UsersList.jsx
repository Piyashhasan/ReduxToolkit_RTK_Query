import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const UsersList = () => {
  return (
    <div className="p-2 flex items-center justify-between border rounded">
      <div className="">
        <p>Name : Piyash Hasan</p>
        <p>Email : piyashhasan38@gmail.com</p>
        <p>Phone: 01790800372</p>
      </div>
      <div className="space-x-2">
        <button className="text-white bg-green-500 hover:bg-green-800 focus:outline-none font-medium text-sm w-full sm:w-auto  px-5 py-2 text-center rounded-full">
          <BiEditAlt />
        </button>
        <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium text-sm w-full sm:w-auto px-5 py-2 text-center rounded-full">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default UsersList;
