function Input({ result, text }) {
  return (
    <div className=" h-[70px]   flex flex-col justify-end  ">
      <div>
        <h1 className="text-[24px]">{result}</h1>
      </div>

      <div>
        <h3 className="text-[18px] flex-1">{text}</h3>
      </div>
    </div>
  );
}

export default Input;
