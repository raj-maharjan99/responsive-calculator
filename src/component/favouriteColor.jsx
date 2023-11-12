import React, { useState } from "react";

function FavouriteColor() {
  const [color, setColor] = useState("Red");
  return (
    <div>
      <h1>my favourite color is {color}</h1>
      <button type="button" onClick={() => setColor("Blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button
        className="bg-red-500"
        type="button"
        onClick={() => setColor("pink")}
      >
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </div>
  );
}

export default FavouriteColor;
