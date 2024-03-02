import { useEffect, useRef } from "react";

import { aplicacion } from "./inicio";

import x from "/x.svg";

interface props {
  aplicaciones: aplicacion[];
  aplicacionActual: aplicacion;
  setAplicaciones: Function;
  index: number;
  currentActiva: boolean;
  activa: number;
  setActiva: Function;
}

const DraggableApp = ({
  setAplicaciones,
  aplicaciones,
  aplicacionActual,
  index,
  currentActiva,
  setActiva,
}: props) => {
  //con lo useRef devolvemos un objeto con el contenido
  //de los elementos, con la propiedad ref
  const box = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  //useRef sirve para manipular datos sin re-renderizar el dom
  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: aplicacionActual.startx,
    startY: aplicacionActual.starty,
    lastX: aplicacionActual.startx,
    lastY: aplicacionActual.starty,
  });

  useEffect(() => {
    if (!box.current || !bar.current) return;
    box.current.style.top = aplicacionActual.starty+"px";
    box.current.style.left = aplicacionActual.startx+"px";

    //box cur se usa para la posicion absolute del elemento
    const boxCur = box.current;
    //bar cur se utiliza para recibir el evento de click
    const barCur = bar.current;

    //hacemos los eventos, que asignamos con el ref a los elementos
    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = boxCur.offsetLeft;
      coords.current.lastY = boxCur.offsetTop;
    };
    
    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current ) return;
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;
      boxCur.style.top = `${nextY}px`;
      boxCur.style.left = `${nextX}px`;
    };

    const onMouseClick = (e: MouseEvent) => {
      if (!isClicked.current) return;
      setActiva(index);
    };

    //asignamos los eventos a los ref
    barCur.addEventListener("mousedown", onMouseDown);
    barCur.addEventListener("mouseup", onMouseUp);
    boxCur.addEventListener("mousedown", onMouseClick);
    barCur.addEventListener("mousemove", onMouseMove);
    barCur.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      boxCur.removeEventListener("mousedown", onMouseDown);
      boxCur.removeEventListener("mouseup", onMouseUp);
      barCur.removeEventListener("mousemove", onMouseMove);
      barCur.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  }, []);

  const minimizarApp = () => {
    box.current.style.top = `-100000px`;
    box.current.style.left = `-100000px`;
    let aplicacionesAux = aplicaciones;
    aplicacionesAux[index] = {...aplicacionActual, minimized: true}; 
    setAplicaciones(aplicacionesAux);
  };

  return (
    <div
      ref={box}
      className="sombreadoRetro absolute"
      style={{ zIndex: currentActiva ? 10 : 0 }}
    >
      <div ref={bar} className="bg-[#1A0DAC] h-[3.5rem] flex items-center">
        <div className="flex grow items-center justify-center">
          <div className="flex flex-col items-end mx-5 w-[35%] space-y-2">
            <div className="border-dotted w-full border-white border-t-[0.3rem]"></div>
            <div className="border-dotted w-full border-white border-t-[0.3rem]"></div>
            <div className="border-dotted w-full border-white border-t-[0.3rem]"></div>
          </div>
          <div className="text-white">-{aplicacionActual.nombre}-</div>
          <div className="flex flex-col items-start mx-5 w-[35%] space-y-2">
            <div className="border-dotted w-full border-white border-t-[0.3rem]"></div>
            <div className="border-dotted w-full border-white border-t-[0.3rem]"></div>
            <div className="border-dotted w-full border-white border-t-[0.3rem]"></div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[3rem]">
          <button
            onClick={() => {
              minimizarApp();
            }}
            className="sombreadoRetro flex justify-center items-center w-5 h-5 p-1 bg-slate-300"
          >
            <img src={x}></img>
          </button>
        </div>
      </div>
      <div className="">{aplicacionActual.component}</div>
    </div>
  );
};

export default DraggableApp;
