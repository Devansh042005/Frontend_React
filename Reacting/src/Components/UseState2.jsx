import React, { useState } from "react";

function UseState2() {
  const [val, setVal] = useState([
    { name: "Harsh", age: 20 },
    { name: "Shivam", age: 22 },
    { name: "Raghu", age: 25 },
  ]);
  return (
    <div className="p-5">
      {val.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
        </div>
      ))}
      <button
        onClick={() =>
          setVal(() =>
            val.map((item) =>
              item.name === "shivam" ? { name: "shivam", age: 26 } : item
            )
          )
        }
        className="px-2 py-1 rounded text-xs text-white bg-blue-500"
      >
        Click
      </button>
    </div>
  );
}

export default UseState2;
