import React, { useState } from "react";

function UseState3() {
  const [val, setVal] = useState(false);
  return (
    <div>
      <h1>{val == false ? "bahar jao" : "Mat jao"};</h1>
      <button
        onClick={() => {
          setVal(() => !val);
        }}
        className="px-3 py-1 bg-blue-300"
      >
        Change kro
      </button>
    </div>
  );
}
export default UseState3;