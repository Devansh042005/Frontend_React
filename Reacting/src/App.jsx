import React from "react";
import UseState1 from "./Components/UseState1";
// import Card from "./Components/Card";
// import Song from "./Components/Songs";
//import  UseStateLearn from "./Components/UseStateLearn";

function App() {
  
  return (
    <>
     {/* <Card/> */}
     {/* <Song/> */}
     {/* <UseStateLearn/>   */}
     <UseState1/>
    </> // these are called fragments in react, they help in grouping elements without adding extra divs to the DOM
  );
}

export default App;
// In the map arrow function, we used () to actually get the value of the div but if we used {} it would just return a string "elem"
