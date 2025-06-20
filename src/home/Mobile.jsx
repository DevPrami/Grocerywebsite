import React from "react";
import Phone from "../assets/Phone.png";
import App from "../assets/app.png";
import Google from "../assets/google.png";

export default function Mobile() {
  return (
    <>
      <div className="  flex  items-center justify-center w-[90%]  m-auto pt-[30px]   ">
        <div className="w-[60%] ">
          <h1 className=" text-4xl font-bold pb-5 ">Download Our Grocery<br/> Mobile App And Save <br/> Time, Money</h1>
          <p className="pb-5">
            Our grocery mobile app makes it easy to shop for groceries on the<br/>
            go.You can browse our selection of products, create a shopping list,<br/>
            and order groceries for pickup or delivery.
          </p>
          <div className="flex gap-3 mt-5 ">
            <img className=" p-2 bg-black" src={App} />
            <img className=" p-2 bg-black" src={Google} />
          </div>
        </div>
        <div className="w-[40%]">
          <img className="w-[80%] " src={Phone} />
        </div>
      </div>

    </>
  );
}
