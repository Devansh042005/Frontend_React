// import React, { useState } from "react";
// import Cards from "./Components/Cards";
// import Form from "./Components/form";
// import MiniProj1 from "./Components/MiniProj1";
// import Navbar from "./Components/Navbar";
// import FormHandling from "./Components/FormHandling";
//import Props1 from "./Components/Props1";
//import UseState1 from "./Components/UseState1";
//import MiniProj from "./Components/MiniProj";
// import Card from "./Components/Card";
// import Song from "./Components/Songs";
//import  UseStateLearn from "./Components/UseStateLearn";

// function App() {

//   const [users, setUsers] = useState([1]);

//   const handleFormSubmit = (data) => {
//     setUsers([...users, data])
//   }

//   const handleRemove = (id) => {
//     setUsers(()=> users.filter((item, index) => index!= id));
//   }

// const data = [
//   {image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name: "ABCD2" , artist: "divesh" , added: false},
//   {image: "https://images.unsplash.com/photo-1493225577306-ecbf5f7a9d8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name: "Softcore" , artist: "dholak" , added: false},
//   {image: "https://images.unsplash.com/photo-1493246886675-0042d822e0db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name: "Totta" , artist: "bansh" , added: false},
//   {image: "https://images.unsplash.com/photo-1493246976946-697de3c70d3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name: "JAAT" , artist: "sukhad" , added: true},

// ]

// const [songData, setSongData] = useState(data);
// const handleClick = (index) => {
//   setSongData((prev) => {
//     return prev.map((item , itemindex) => {
//       if(itemindex === index) return {...item, added: !item.added};
//       return item;
//     })
//   })
// }
// const data = [
//   {name: "devansh" , profession: "software engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , friends: false},
//   {name: "rahul" , profession: "painter", image: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
//   {name: "krish" , profession: "Stake", image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , friends: false},
//   {name: "dholak" , profession: "scammer", image: "https://plus.unsplash.com/premium_photo-1689632031083-518b012767a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , friends: false},
// ];

// const [realdata, setRealData] = useState(data);
// state jaha banti h wahi manage hoti hai
// const handleFriendsButton = (cardindex) => {
//   setRealData((previous) => {
//     return previous.map((item,index) => {
//       if(index === cardindex){
//         return {...item, friends:!item.friends};
//       }
//       return item;
//     })
//   });
// }

// return (
//   <>
{
  /* <Card/> */
}
{
  /* <Song/> */
}
{
  /* <UseStateLearn/>   */
}
{
  /* <UseState1/> */
}
{
  /* <MiniProj/> */
}
{
  /* <div className="w-full h-screen bg-zinc-300 "> */
}
{
  /* {realdata.map((item, index) => (
      <Props1 key={index} index = {index} handleClick = {handleFriendsButton} values = {item} />
     ))} */
}
{
  /* <Navbar data = {songData} />
     <div className="px-20 flex gap-10 mt-10 flex-wrap">
     {songData.map((obj ,index) => {
      return <MiniProj1 data = {obj} handleClick = {handleClick} index = {index} key={index} />
     })}

     </div>
     </div> */
}
{
  /* <FormHandling/> */
}

{
  /* <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards handleRemove = {handleRemove} users = {users}/>
        <Form handleFormSubmitData = {handleFormSubmit}/>
      </div>
     </div> */
}

{
  /* </> // these are called fragments in react, they help in grouping elements without adding extra divs to the DOM */
}
{
  /* //   );
// } */
}

// export default App;
// In the map arrow function, we used () to actually get the value of the div but if we used {} it would just return a string "elem"

//dynamic routing

// import React from "react";
// import { Link, Route, Routes} from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import User from "./Components/User";
// import Nav from "./Components/Nav";
// import Routing from "./utils/Routing";

// const App = () => {
//   return (
//     <>
//     <Nav/>

//     <Routing/>
//     </>
//   )
// }

// export default App;

// API

import React, { useState } from "react";
import axios from "axios";
import { Link, Routes, Route } from "react-router-dom";
import Home1 from "./Components/Home1";
import Show from "./Components/Show";
import Services from "./Components/Services";
const App = () => {
  // const addProducts = () => {
  //   const api = "https://fakestoreapi.com/products";

  //   axios
  //     .post(api, {
  //       title: "New Product",
  //       price: 29.99,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className="pt-[5%] pl-[5%]">
      <nav className="flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/show">Show</Link>
        <Link to="/services">Services</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};
export default App;
