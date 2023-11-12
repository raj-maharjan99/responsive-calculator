import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" flex flex-col items-center ">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)} className="bg-red-500">
          Increase
        </button>
        <button onClick={() => setCount(count - 1)} className="bg-green-500">
          Decrease
        </button>
        <button onClick={() => setCount(0)} className="bg-blue-500">
          Reset
        </button>
      </div>
    </>
  );
};
export default CounterApp;
