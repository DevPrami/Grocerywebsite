import React from "react";
import Logo from "../assets/white.png";
import CallIcon from '@mui/icons-material/Call';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <>
      <div className="bg-[#123f1e] pt-[40px] pb-[20px] ">
        <div className="w-[90%] m-auto flex  items-center  justify-evenly 
        gap-5 ">
          <div>
            <img src={Logo} />
            <p className="text-[white] py-4">
              We provide fresh, top-notch meat, vegetables, and<br/> more. Enjoy
              quick delivery and savor the finest <br/>ingredients for a delicious
              dining experience.
            </p>
            <div className="flex  text-[white] gap-4">
              <ul />
              <li className="list-none"><FacebookIcon/></li>
              <li className="list-none"><InstagramIcon/></li>
              <li className="list-none"><TwitterIcon/></li>
              <li className="list-none"><LinkedInIcon/></li>
            </div>
          </div>
          <div>
            <h1 className="text-[white] text-2xl font-semibold pb-4">About us</h1>
            <ul className="list-none "/>
            <li className="list-none text-[white] pb-4">About us</li>
            <li className="list-none text-[white] pb-4">Why us</li>
            <li className="list-none text-[white] pb-4">Security</li>
            <li className="list-none text-[white]">Testimonial</li>
          </div>
          <div>
            <h1 className="text-[white] text-2xl font-semibold pb-4">Help</h1>
            <ul />
            <li className="list-none text-[white] pb-4">Account</li>
            <li className="list-none text-[white] pb-4">Support center</li>
            <li className="list-none text-[white] pb-4">Privacy ploicy</li>
            <li className="list-none text-[white]">Term and condition</li>
          </div>
          <div>
            <h1 className="text-[white] text-2xl font-semibold pb-4 ">Contact Us</h1>
            <ul />
            <li className="list-none text-[white] pb-4"><CallIcon/> +1 (406) 555-0120</li>
            <li className="list-none text-[white] pb-4"><LocalPostOfficeIcon/> developer@gmail.com</li>
            <li className="list-none text-[white]"><LocationOnIcon/> 123 Main Street, New York</li>
            
          </div>
        </div>
         <hr class="border-t border-gray-300 my-4 " />
         <h1 className=" flex itemes-center justify-center text-[white] pt-4">© 2025 Developed By Pramila</h1>
      </div>
   


    </>
  );
}
