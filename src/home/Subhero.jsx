import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import Subbanner from  '../assets/subbanner.png'
import Tick from '../assets/tick.png'

export default function Subhero() {
  return (
    <>
      <div className=" w-[80%]  m-auto flex items-center justify-center ">
        <div  className="w-[50%] flex justify-center">
          <img  className="w-[80%] h-[50%]"      src={Subbanner} />
        </div>
        <div className="w-[50%]">
          <h1 className="text-2xl font-semibold pb-[20px]">Best Quality Healthy And Fresh Grocery</h1>
          <p className="pb-[20px]">
            We prioritize quality in each of our grocery, below are the
            advantage
            <br /> of our products. Organic food is food produced.
             </p>
            <ul >
              <li className="flex gap-5 pb-3"><img src={Tick}/>100% Organic & Natural Products</li>
              <li className="flex gap-5 pb-3" ><img src={Tick}/>Best Quality Healthy And Fresh Grocery</li>
              <li className="flex gap-5 pb-3"><img src={Tick}/>100% Returns & Refunds</li>
              <li className="flex gap-5 pb-3"><img src={Tick}/>User-Friendly Mobile Apps</li>
            </ul>
           
         <Button  className="!mt-4" style={{ background: 'green'  }} variant="contained">order now</Button>
        </div>
      </div>
    </>
  );
}
