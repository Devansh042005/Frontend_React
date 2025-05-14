import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useContext(UserContext);
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-200">{users[id].username}</h1>
      <h3>{users[id].city}</h3>
      <button onClick={() => navigate(-1)} className="bg-red-100 p-2 mt-5 rounded">Go Back</button>
    </div>
  );
};

export default UserDetails1;
