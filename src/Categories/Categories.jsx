import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const result = [
    {
      id: 1,
      catagory: "meat",
      url: "meat.png",
      color: "rgb(254, 244, 234)",
    },
    {
      id: 2,
      catagory: "Vegatables",
      url: "vagetable.png",
      color: "rgb(245, 245, 245)",
    },
    {
      id: 3,
      catagory: "Fruits",
      url: "fruits.png",
      color: "rgb(234, 245, 227",
    },
    {
      id: 4,
      catagory: "Dairy",
      url: "dairy.png",
      color: "rgb(234, 244, 244)",
    },
    {
      id: 5,
      catagory: "grains",
      url: "grains.png",
      color: "rgb(250, 249, 215)",
    },
  ];
  return (
    <>
      <div className="w-[90%] m-auto">
        <h1 className="text-3xl font-bold">All Categories</h1>
      </div>
      <div className="w-[90%]  m-auto pt-[30px] pb-[30px] flex flex-wrap items-center justify-center gap-5">
        {result.map((catadata, index) => (
          <li className=" list-none" key={index}>
            <div
              className=" w-50 h-58 flex flex-col items-center justify-center p-4 rounded-xl shadow-md "
              style={{ backgroundColor: catadata.color }}
            >
              <img
                src={`/src/assets/Categories/${catadata.url}`}
                alt={catadata.catagory}
                className="w-[64%] h-[40%] object-cover rounded-lg mb-4"
              />
             <Link to ={`/category/${catadata.catagory}`}> <h2>{catadata.catagory}</h2></Link>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}
