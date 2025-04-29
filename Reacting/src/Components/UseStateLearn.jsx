import React, { useState } from "react";

function UseStateLearn() {
  const [val, setVal] = useState({ name: "harsh", isBanned: false });
  return (
    <div className="p-4">
      <h1>name: {val.name}</h1>
      <h2>banned: {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 ${
          val.isBanned ? "bg-blue-500" : "bg-red-500"
        } text-white rounded-full`}
      >
        change kroo
      </button>
      {/* in this button we firstly copy the current state using spread operator {...val} and then change the value of isBanned. */}
    </div>
  );
}
export default UseStateLearn;
