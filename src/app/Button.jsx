import React from "react";

function Button({ symbol, color, width, textColor, handleClick }) {
  // we can use props too. function Button(props)  <button className="bg-gray-700">{props.symbol}</button>
  return (
    <div>
      <button
        onClick={() => handleClick(symbol)}
        className="bg-[#333333f6] rounded-[25px] text-center flex flex-1 justify-center text-white w-[30px]  "
        style={{ width: width, background: color, color: textColor }}
      >
        {symbol}
      </button>
    </div>
  );
}

export default Button;
