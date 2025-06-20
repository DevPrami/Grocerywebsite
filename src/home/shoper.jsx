import React from "react";
import Delivery from "../assets/delivery.png";
import Fastest from '../assets/Fastest.png'
import Orders from '../assets/Orders.png'
import Customer from '../assets/Customer.png'
import Price from '../assets/Price.png'


export default function shoper() {
  return (
    <>
      <div className="w-[90%]  m-auto flex items-center justify-center ">
        <div className="w-[50%]">
          <h1 className="text-2xl font-bold pb-3">Why We’re Best Quality grocery Shopper</h1>
          <p className="pb-6">
            We offer a wide variety of products to choose from you can find
            everything you need to feed your family.
          </p>
          <ul>
          <li className="flex gap-6 pb-6 font-bold text-[20px]"><img src={Orders}/>Track and Manage Orders</li>
          <li className="flex gap-6 pb-6 font-bold text-[20px]"><img src={Customer}/>Customer Support</li>
          <li className="flex gap-6 pb-6 font-bold text-[20px]"><img src={Price}/>Competitive Price</li>
          <li className="flex gap-6 pb-6 font-bold text-[20px]"><img src={Fastest}/>Extra Fastest Delivery</li>
          </ul>
        </div>
        <div className="w-[50%]">
          <img className="w-[90%] h-50%]"  src={Delivery} />
        </div>
      </div>
    </>
  );
}
