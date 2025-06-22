import React from "react";
import Girl from "../assets/header/girl.png"
import Leaf from '../assets/header/leaf.png'
import Button from '@mui/material/Button'

export default function Hero() {
  return (
    <>
      <div className="w-[90%]  m-auto flex items-center justify-center">
        <div className="w-[50%] ">
          <h1 className=" text-[50px] font-bold leading-tight pb-[30px]">
            suyash
            <br /> with <span className="text-green-600">
              fresh grocery
            </span>
            <br />
            products<img src={Leaf}/>
          </h1>
          <p>
            Get the best quality and most delicious grocery food in the world,<br/>
            you can get them our website. Fresh grocery every day to your
            family.
          </p>
          <Button  className="!mt-4" style={{ background: 'green'  }} variant="contained">Shop now</Button>
        </div>
        <div className="w-[50%] flex justify-center">
          <img className="w-[90%] h-[50%]" src={Girl} />
        </div>
      </div>
    </>
  );
}
