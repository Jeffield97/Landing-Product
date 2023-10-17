import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between bg-topbar text-white py-[24px] items-center">
      <div className="flex ml-[127px]">
        <span>Copyright (c) 2023</span>
        <div className="mx-[16px] h-[24px] w-[1px] bg-white"></div>
        <span>Clarifionsupport@clarifion.com</span>
      </div>
      <div className="flex mr-[119px] gap-[16px]">
        <img src="/lock (7) 1.svg" alt="" />
        <p>Secure 256-bit SSL encryption.</p>
      </div>
    </div>
  );
};

export default Footer;
