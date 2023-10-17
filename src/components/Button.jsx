import React from "react";
import "./styles.css";
const Button = () => {
  return (
    <div className="flex bg-green_user px-[64px] py-[16px] rounded-[50px] text-button gap-[19.76px] hover:cursor-pointer">
      <h4>Yes - Claim my discount</h4>
      <img src="/arrow.svg" alt="" />
    </div>
  );
};

export default Button;
