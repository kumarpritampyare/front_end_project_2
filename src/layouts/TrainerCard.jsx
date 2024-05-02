import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const TrainerCard = (props) => {
  return (
    <div className=" flex flex-col items-center gap-3 pt-8 w-full md:w-1/4 bg-[#222] rounded-xl">
      <div className=" w-3/4">
        <img className=" rounded-lg" src={props.img} alt="img" />
      </div>
      <div>
        <h1 className=" text-xl font-semibold py-2 text-center">{props.name}</h1>
        <div className=" flex flex-row justify-between py-4 gap-2">
        <a href="https://www.instagram.com/_purab.sharma_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
        <BsInstagram size={25} className="hover:text-[#e53961] cursor-pointer" />
        </a>

        
        <a href={props.facebookUrl} target="_blank" rel="noopener noreferrer">
          <BsFacebook size={25} className=" hover:text-[#4267B2] cursor-pointer" />
        </a>
        <a href={props.twitterUrl} target="_blank" rel="noopener noreferrer">
          <RiTwitterXFill size={25} className="cursor-pointer" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;




