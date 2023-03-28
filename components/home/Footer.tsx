import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from 'next/link'

export const Footer: React.FC<any> = () => {
  const socialMediaLinks = [
    { path: <FaFacebookF size={25} /> },
    { path: <FaLinkedinIn size={25} /> },
    { path: <FaTwitter size={25} /> },
    { path: <FaYoutube size={25} /> },
  ];
  return (
    <div className="flex flex-col justify-center items-center h-full w-full lg:px-20 text-[#6471DD] dark:text-[#C1B0EB]" >
      <div className="flex justify-center items-center space-x-4">
        {socialMediaLinks.map((paths, index) => {
          return (
            <Link key={index} href="#" className="hover:opacity-80">
              {paths.path}
            </Link>
          );
        })}
      </div>
      <p className="text-sm lg:text-lg mt-5 font-bold hover:opacity-80">Copyright 2023 AI Search</p>
    </div>
  );
};