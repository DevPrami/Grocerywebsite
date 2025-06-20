import React from "react";
import Aboutimg from '../assets/about.gif'

export default function About() {
  return (
    <>
      <div className=" w-[90%] flex  m-auto items-center justify-center  ">
        <div className="w-[50%]">
          <h1 className="text-3xl font-bold mb-8">Welcome to Our Grocery App</h1>
          <p className="pb-8">
            At Grocery, we are committed to providing you with the freshest and
            highest quality products for your everyday needs. Our extensive
            range includes fresh vegetables, succulent meats, dairy products,
            pantry essentials, and much more. We carefully select our suppliers
            to ensure that you receive only the best.<br/><br/> With our user-friendly
            interface and reliable delivery service, grocery shopping has never
            been easier. Simply browse our wide selection, add items to your
            cart, and enjoy the convenience of doorstep delivery. Say goodbye to
            long supermarket queues and heavy bags.<br/><br/> We take pride in our
            commitment to exceptional customer service. Our dedicated support
            team is always ready to assist you with any questions or concerns
            you may have. Your satisfaction is our top priority.<br/><br/> Experience the
            convenience and joy of shopping from the comfort of your home. Join
            us at Grocery and discover a new way to grocery shop.<br/><br/> Start shopping
            now and make your everyday life healthier and more convenient.
          </p>
        </div>
        <div className="w-[50%]">
            <img src={Aboutimg}/>
        </div>
      </div>
    </>
  );
}
