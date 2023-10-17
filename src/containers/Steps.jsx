import React from "react";
import Step from "../components/Step";
const Steps = () => {
  return (
    <div className="w-full flex justify-between items-center  px-[128px] mt-[60px] mb-[40px]">
      <Step
        img={"/tick-circle.svg"}
        text={"Step 1 : Cart Review"}
        type={"green-circle"}
        style_text={"past-step"}
      ></Step>
      <Step
        img={"/tick-circle.svg"}
        text={"Step 2 : Checkout"}
        type={"green-circle"}
        style_text={"past-step"}
      ></Step>
      <Step
        text={"Step 3 : Special Offer"}
        type={"green-circle blue-circle"}
        text2={"3"}
        style_text={"past-step past-step-bold"}
        icon_text={"icon-text-white"}
      ></Step>
      <Step
        text={"Step 4 : Confirmation"}
        type={"green-circle blue-stroke"}
        text2={"4"}
        style_text={"past-step "}
        icon_text={"icon-text-blue"}
      ></Step>
    </div>
  );
};

export default Steps;
