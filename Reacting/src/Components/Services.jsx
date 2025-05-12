import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from '../utils/axios';

const Services = () => {
  const [first, setFirst] = useState("This is normal data");
  const [seconed, setSeconed] = useState("This is very large data");

   const getusers = () => {
    

    axios
      .get("/users")
      .then((users) => {
        console.log(users);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getusers();
    console.log("Services Component Mounted");
    return () => {
      console.log("Services Component Unmounted");
    };
  },[seconed]); // square brackets controls the re rendering
  return (
    <div>
      <h1>{first}</h1>
      <button
        onClick={() => setFirst("normal data has been changed")}
        className="rounded mb-10 bg-red-200 p-2"
      >
        Change normal data
      </button>

      <h1>{seconed}</h1>
      <button
        onClick={() => setSeconed("large data has been changed")}
        className="rounded-md-10 bg-blue-200 p-2"
      ></button>
    </div>
  );    
};

export default Services;

