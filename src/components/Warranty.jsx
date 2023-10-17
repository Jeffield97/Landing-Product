import React from "react";
import "./styles.css";
const Warranty = () => {
  return (
    <div className="flex items-center gap-[16px]">
      <img src="/warranty.png" alt="" />
      <p className="text-warranty">
        If you are not completely thrilled with your Clarifion - We have a 30
        day satisfaction guarantee. Please refer to our return policy at the
        bottom of the page for more details. Happy Shopping!
      </p>
    </div>
  );
};

export default Warranty;
