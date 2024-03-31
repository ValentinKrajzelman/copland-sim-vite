import { useEffect, useState } from "react";

const Time = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString())


    useEffect(()=>{
        setInterval(()=>{setHora(new Date().toLocaleTimeString())},1000)
      },[])

  return (
    <div className="text-xl text-white flex h-16 w-32 items-center justify-center border-2 border-dashed bg-[#6D754E]">
      <div>{hora}</div>
    </div>
  );
};

export default Time;
