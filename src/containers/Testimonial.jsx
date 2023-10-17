import React from "react";
import "/src/components/styles.css";
const Testimonial = () => {
  return (
    <div className="w-[575px] flex-col p-6 rounded-[10px] bg-back_testimonial">
      <div className="flex gap-[13px]">
        <img src="/Rectangle 1127.png" alt="" />
        <div className="flex gap-[13px] items-center w-full">
          <div className="flex-col gap-[8.35px] justify-center items-center">
            <img src="/Stars.svg" alt="" />
            <div className="flex gap-[10px]">
              <p className="text-testimonial-name">Ken T.</p>
              <img src="/verify 1.svg" alt="" />
              <p className="text-testimonial-verified">Verified Customer</p>
            </div>
          </div>
        </div>
      </div>
      <p className="max-w-full mt-[18px] text-testimonial-body">
        “As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”
      </p>
    </div>
  );
};

export default Testimonial;
