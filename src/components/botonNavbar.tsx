"use client";
import { ReactNode } from "react";
import { aplicacion } from "./inicio";

interface props {
  aplicaciones: aplicacion[];
  setAplicaciones: Function;
  nombre: String;
  descripcion: String;
  component: ReactNode;
  x: number;
  y: number;
}

const BotonNavbar = ({nombre, x, y, descripcion, component, aplicaciones, setAplicaciones}: props) => {


  const handleClick = () => {
    if (aplicaciones.length != 0) {
      setAplicaciones([
        ...aplicaciones,
        {
          id: 1,
          nombre: nombre,
          minimized: false,
          startx: x,
          starty: y,
          z: 1,
          component: component,
        },
      ]);
    } else {
      setAplicaciones([
        {
          id: 1,
          nombre: nombre,
          minimized: false,
          startx: x,
          starty: y,
          z: 1,
          component: component,
        },
      ]);
    }
  };

  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className="flex justify-start px-3 pl-7 py-1 text-white hover:bg-[#217553]"
    >
      {nombre + ": " + descripcion}
    </button>
  );
};

export default BotonNavbar;
