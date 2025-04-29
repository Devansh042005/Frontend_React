import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod libero ut enim ullamcorper, sed tincidunt lectus facilisis. Integer euismod, turpis sed efficitur",
      instock: true,  
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664110691129-ca0f4fbe8533?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Objects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod libero ut enim ullamcorper, sed tincidunt lectus facilisis. Integer euismod, turpis",
        instock: false,  
    },
    {
      image:
        "https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod libero ut enim ullamcorper, sed tincidunt lectus facilisis. Integer euismod, turpis sed efficit",
        instock: true,  
    },
  ];
  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">{elem.description}</p>
            <button className = {`mt-2 py-1 px-4 ${elem.instock? 'bg-sky-600' : 'bg-red-600'} text-xs rounded text-zinc-100`}>
              {
                elem.instock? "In Stock" : "Out of Stock"
              }
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
