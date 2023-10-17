import React from "react";

const Step = ({ img, text, type, text2, style_text, icon_text }) => {
  return (
    <div className="flex items-center gap-5">
      <div className={type}>
        {img && <img src={img} alt="" />}
        {text2 && <p className={icon_text}>{text2}</p>}
      </div>
      <p className={style_text}>{text}</p>
    </div>
  );
};

export default Step;
