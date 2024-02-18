import { useEffect, useRef } from "react";

import { aplicacion } from "./inicio";

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
  aplicacionActual,
  aplicaciones,
  setAplicaciones,
  index,
  currentActiva,
  activa,
  setActiva
}: props) => {
  //con lo useRef devolvemos un objeto con el contenido de los elementos,
  //con la propiedad ref
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
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!box.current || !bar.current) return;
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
      if (!isClicked.current) return;
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
    boxCur.addEventListener("mousedown", onMouseDown);
    boxCur.addEventListener("mouseup", onMouseUp);
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
    box.current.style.top =   `-100000px`;
    box.current.style.left =  `-100000px`;
  };

  return (

      <div ref={box} className="absolute border-2" style={{zIndex: currentActiva ? 10 : 0}}>
        <div ref={bar} className="h-6 bg-blue-400">
          <button
            onClick={() => {
              minimizarApp();
            }}
          >
            A
          </button>
        </div>
        <div>{aplicacionActual.component}</div>
      </div>

  );
};

export default DraggableApp;
