import React from "react";
import Testimonial from "./Testimonial";
import InfoProduct from "../components/InfoProduct";

const Product = () => {
  return (
    <div className="rounded-[10px] bg-back_product-400 mx-[128px] flex p-[40px] gap-[40px] justify-center">
      <div className="w-6/12">
        <img src="/image 4.png" alt="" />
        <Testimonial />
      </div>
      <div className="w-[550px]">
        <InfoProduct />
      </div>
    </div>
  );
};

export default Product;
