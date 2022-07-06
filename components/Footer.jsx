import React from "react";
// import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Phanox Headphone All rights reserverd</p>
      <p className='icons'>
        <a href='https://www.instagram.com/vladikplaksa/' target='_blank'>
          <AiFillInstagram className='cursor-pointer' />
        </a>
        <a href='https://twitter.com/' target='_blank'>
          <AiOutlineTwitter className='cursor-pointer' />
        </a>
      </p>
    </div>
  );
};

export default Footer;
