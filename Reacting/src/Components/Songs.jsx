import React from "react";

function Song(){

    const data = [
        {name: "Mahiya Ve", description: "lorem 10 will be displayed"},
        {name: "Junoon", description: "lorem 30 will be displayed"},
    ];

    const handleClick = () => {alert("Download clicked")};

    return(
        <div className="w-full h-screen bg-zinc-300 flex flex-col justify-center gap-5 items-center">
            {data.map((elem, index) => (
                <div key={index} className=" w-60 song px-3 py-2 bg-zinc-100 rounded-md">
                <h3 className="font-semibold text-xl ">{elem.name}</h3>
                <p className="text-xs mt-2">{elem.description}</p>
                <button onMouseOver={handleClick} className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3 "> Download</button>
            </div>
            ))}
        </div>
    )
}
export default Song;