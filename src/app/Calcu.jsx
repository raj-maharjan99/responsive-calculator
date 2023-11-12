import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { evaluate } from "mathjs";
import * as math from "mathjs";
// import * as Icon from "react-bootstrap-icons";
// import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
function Calcu() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const addToText = (value) => {
    setText((text) => [...text, value + ""]);
  };
  const resetInput = () => {
    setText("");
    setResult("");
  };
  const zeroValue = () => {
    setText(0);
    setResult(0);
  };
  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };
  return (
    <>
      {" "}
      <div className=" m-auto bg-black w-[140px] h-[300px]  rounded-[20px] flex  flex-col justify-center items-center gap-1">
        <header className="text-white flex justify-center gap-[15px] text-[10px] mb-[50px] "></header>
        <div className="w-[130px] text-white px-4 flex flex-col justify-around items-end ">
          <Input text={text} result={result} />
        </div>
        <div className="flex gap-1">
          <Button
            textColor="black"
            color="#A5A5A5"
            symbol="AC"
            handleClick={resetInput}
          />
          <Button
            textColor="black"
            color="#A5A5A5"
            symbol="+/-"
            handleClick={addToText}
          />
          <Button
            textColor="black"
            color="#A5A5A5"
            symbol="%"
            handleClick={addToText}
          />

          <Button color="orange" symbol="/" handleClick={addToText} />
        </div>
        <div className="flex gap-1">
          <Button symbol={7} handleClick={addToText} />
          <Button symbol={8} handleClick={addToText} />
          <Button symbol={9} handleClick={addToText} />
          <Button color="orange" symbol={"*"} handleClick={addToText} />
        </div>
        <div className="flex gap-1">
          <Button symbol={4} handleClick={addToText} />
          <Button symbol={5} handleClick={addToText} />
          <Button symbol={6} handleClick={addToText} />
          <Button color="orange" symbol={"-"} handleClick={addToText} />
        </div>
        <div className="flex gap-1">
          <Button symbol={1} handleClick={addToText} />
          <Button symbol={2} handleClick={addToText} />
          <Button symbol={3} handleClick={addToText} />
          <Button color="orange" symbol={"+"} handleClick={addToText} />
        </div>
        <div className="flex gap-1">
          <Button
            width={"60px"}
            color={"red"}
            symbol={0}
            handleClick={addToText}
          />
          <Button symbol={"."} handleClick={addToText} />
          <Button color="orange" symbol={"="} handleClick={calculateResult} />
        </div>{" "}
        <div className="bg-white rounded-[2px] mt-2  w-9 h-1"></div>
      </div>
    </>
  );
}

export default Calcu;
