import React from "react";
import "./styles.css";
const PaymentInfo = () => {
  return (
    <div className="flex gap-[16px] items-center text-payment border py-[8px] px-[16px] rounded-[4px] justify-center">
      <p>Free Shipping</p>
      <div className="h-[16px] w-[1px] bg-separator_user"></div>
      <div>
        <img src="" alt="" />
        <p>Secure 256-bit SSL encryption.</p>
      </div>
      <div className="h-[16px] w-[1px] bg-separator_user"></div>

      <div className="flex">
        <img src="/visa.svg" alt="" />
        <img src="/shop pay.svg" alt="" />
        <img src="/paypal.svg" alt="" />
        <img src="/mastercard.svg" alt="" />
        <img src="/gpay.svg" alt="" />
        <img src="/apple pay.svg" alt="" />
        <img src="/amex.svg" alt="" />
      </div>
    </div>
  );
};

export default PaymentInfo;
