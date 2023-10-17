import React from "react";
import Button from "./Button";
import PaymentInfo from "./PaymentInfo";
import Warranty from "./Warranty";
import "./styles.css";
const InfoProduct = () => {
  return (
    <div className="flex flex-col gap-[32px]">
      <h4 className="text-product-announcement">
        <span className="text-product-announcement-blue">ONE TIME ONLY</span>{" "}
        special price for 6 extra Clarifion for only
        <span className="text-product-announcement-blue">$14 each</span> ($84.00
        total!)
      </h4>
      <div className="flex gap-6">
        <div className="min-w-[134px] min-h-[134px] bg-blue_user rounded-[10px]">
          <img src="/image-removebg-preview (12) 1.png" alt="" />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h4 className="text-product-name">Clarifion Air Ionizer</h4>
            <div className="flex items-center gap-[10px]">
              <p className="text-price">$180</p>
              <p className="text-price-2">$84</p>
            </div>
          </div>
          <div className="flex">
            <img src="/Stars.svg" alt="" />
            <p className="text-stock">12 left in Stock</p>
          </div>
          <div className="text-description">
            <p>
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </div>
        </div>
      </div>
      <div className="text-description">
        <div className="flex gap-[12px] items-center">
          <img src="/tick-circle-blue.svg" alt="" />
          <h5>
            Negative Ion Technology may <span>help with allergens</span>
          </h5>
        </div>
        <div className="flex gap-[12px] items-center">
          <img src="/tick-circle-blue.svg" alt="" />
          <h5>
            Designed for <span> air rejuvenation </span>
          </h5>
        </div>
        <div className="flex gap-[12px] items-center">
          <img src="/tick-circle-blue.svg" alt="" />
          <h5>
            <span>Perfect for every room</span> in all types of places.
          </h5>
        </div>
      </div>
      <div className="flex gap-[16px] px-[16px] py-[12px] rounded-[10px] items-center bg-blue_opaque text-discount">
        <img src="/percent.svg" alt="" />
        <p>
          Save <span className="text-blue_user">53%</span> and get{" "}
          <span className="text-blue_user">6 extra Clarifision</span> for only{" "}
          <span className="text-blue_user">$14 Each</span>.
        </p>
      </div>
      <Button />
      <PaymentInfo />
      <div className="text-center">
        <h5 className="text-no-thanks">No thanks, I don’t want this.</h5>
      </div>
      <Warranty />
    </div>
  );
};

export default InfoProduct;
