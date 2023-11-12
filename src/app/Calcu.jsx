import Button from "./Button";
import Input from "./Input";
// import * as Icon from "react-bootstrap-icons";
// import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
function Calcu() {
  return (
    <>
      {" "}
      <div className=" m-auto bg-black w-[140px] h-[330px] rounded-[20px] flex flex-col justify-center items-center gap-1">
        <header className="text-white flex justify-center gap-[15px] text-[10px] mb-[50px] ">
          <span>9:41</span>
          <div className=" bg-gray-800 rounded-lg w-[50px] h-5"></div>
          <div className="flex flex-wrap ">
            <p>B</p>
            <p>C</p>
          </div>
        </header>
        <div className="w-[130px] text-white px-4 flex flex-col justify-around items-end ">
          <Input />
          <img src="tower.svg" alt="" />
          <i class="bi bi-reception-4"></i>
          <p className="text-white text-[25px]">0</p>
        </div>
        <div className="flex gap-1">
          <Button textColor="black" color="#A5A5A5" symbol="AC" />
          <Button textColor="black" color="#A5A5A5" symbol="+/-" />
          <Button textColor="black" color="#A5A5A5" symbol="%" />

          <Button color="orange" symbol="÷" />
        </div>
        <div className="flex gap-1">
          <Button symbol={7} />
          <Button symbol={8} />
          <Button symbol={9} />
          <Button color="orange" symbol={"X"} />
        </div>
        <div className="flex gap-1">
          <Button symbol={4} />
          <Button symbol={5} />
          <Button symbol={6} />
          <Button color="orange" symbol={"-"} />
        </div>
        <div className="flex gap-1">
          <Button symbol={1} />
          <Button symbol={2} />
          <Button symbol={3} />
          <Button color="orange" symbol={"+"} />
        </div>
        <div className="flex gap-1">
          <Button width={"60px"} color={"red"} symbol={0} />
          <Button symbol={"."} />
          <Button color="orange" symbol={"="} />
        </div>{" "}
        <div className="bg-white rounded-[2px] mt-2  w-9 h-1"></div>
      </div>
    </>
  );
}

export default Calcu;
