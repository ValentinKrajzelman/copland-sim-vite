import { aplicacion } from "./inicio";
import listaRand from "../lib/listaRand";
import { useState } from "react";

interface props {
  aplicaciones: aplicacion[];
}

const Appbar = ({ aplicaciones }: props) => {
  const [nums, setNums] = useState(listaRand(8, 3, 5));

  return (
    <div className="relative flex bg-[#6D754E] h-32 w-64 flex-wrap">
      <div className="absolute border-2 border-dashed top-0 left-0 h-16 w-16"></div>
      <div className="absolute border-2 border-dashed top-0 left-16 h-16 w-16"></div>
      <div className="absolute border-2 border-dashed top-0 left-32 h-16 w-16"></div>
      <div className="absolute border-2 border-dashed top-0 left-48 h-16 w-16"></div>
      <div className="absolute border-2 border-dashed top-16 left-0 h-16 w-16"></div>
      <div className="absolute border-2 border-dashed top-16 left-16 h-16 w-16"></div>
      <div className="absolute border-2 border-dashed top-16 left-32 h-16 w-16"></div>
      <div className="absolute border-2 border-dashed top-16 left-48 h-16 w-16"></div>
      {aplicaciones.map((app, index) => {
        if (index < 8) {
          return (
            <div
              key={index}
              className="relative m-1 border-2 w-14 h-14 "
            >
              {nums[index].map((num) => {
                return (
                  <div
                    className="absolute overflow-hidden"
                    style={{
                      animation: "movimiento" + num + " 3s linear infinite",
                    }}
                  ></div>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Appbar;
