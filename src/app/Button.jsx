import React from "react";

function Button({ symbol, color, width, textColor }) {
  // we can use props too. function Button(props)  <button className="bg-gray-700">{props.symbol}</button>
  return (
    <div>
      <button
        className="bg-[#333333f6] rounded-[25px] text-center text-white w-[30px]  "
        style={{ width: width, background: color, color: textColor }}
      >
        {symbol}
      </button>
    </div>
  );
}

export default Button;
