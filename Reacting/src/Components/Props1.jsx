import React from "react";

function Props({values, handleClick, index}) {
  const {name, image, profession, friends } = values; // destructuring values object into individual variables.
  return (
    <div className="w-52 bg-white rounded overflow-hidden">
      <div className="w-full h-40 bg-sky-200">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button onClick={() => handleClick(index)} className="mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md">
          {friends === true? "Friends" : "Add friend"}
        </button>
      </div>
    </div>
  );
}

export default Props;
// props use hote h aapke components ko reusable bnane k liye.
