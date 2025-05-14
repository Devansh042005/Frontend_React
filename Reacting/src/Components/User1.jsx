import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";

const User1 = () => {
  const { users, setusers } = useContext(UserContext);
  return (
    <div>
      <h1 className="text-3xl">User List</h1>
      <div className=" flex w-1/2 flex-col mt-10">
        {users.map((u) => (
          <Link key={u.id} to={`/user/${u.id}`} className="bg-red-200 mb-3 p-3">
            {u.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User1;
