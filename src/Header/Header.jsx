import React from "react";
import Menu from "./Menu";
import Logo from "../assets/Logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



export default function Header({count}) {
  return (
    <>
      <div className="flex  justify-between p-8  items-center">
        <div className="w-[20%] "><img  className= "sm:max-h-6 max-h-5 my-auto cursor-pointer" src={Logo}/></div>
        <div className=" w-[80%] flex justify-end gap-5 items-center ">
          <div className="flex items-center"> <Menu/></div>
         <Link to="/Cart"><div><ShoppingCartIcon style={{ color: 'orange' }}/>{count.length}</div></Link> 
          <Link to  ="/login"><div ><Button   style={{ background: 'green' }} variant="contained">Login</Button></div></Link>
        </div>
      </div>
    </>
  );
}
