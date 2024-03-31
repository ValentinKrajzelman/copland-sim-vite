import { useState } from "react";
import { preguntas } from "../assets/preguntas";
import interrogante from '/simboloPregunta.png'

const Help = () => {
  
  const [pregunta, setPregunta] = useState({
    indice: 0 ,
    pregunta: 'Welcome!',
    respuesta:  "Get ready for the ultimate digital experience. In 'Ask the wired' you'll be able to surf the web and make any inquiries you have. And the web will choose from a myriad of possibilities the one you need.",
  });
  
  return (
    <div className="h-[35rem] w-[38rem] p-[1rem] flex bg-[#D9D9D9] bg-opacity-90">
      {/* preguntas */}
      <div className="sombreadoRetro p-[0.5rem] w-[12rem] h-[33rem] mr-[1rem] bg-[#D9D9D9]">
        <div className="text-3xl font-semibold mb-[1rem] text-blue-700">Subjects</div>
        <div>
          {preguntas.map((preguntaActual, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setPregunta({
                    indice: preguntaActual.indice,
                    pregunta: preguntaActual.pregunta,
                    respuesta: preguntaActual.respuesta,
                  })
                }}
                className="flex mb-[0.4rem] " 
              >
              <img src={interrogante} alt="?" />  <div className={'p-1 ' + (preguntaActual.indice == pregunta.indice ? 'bg-black bg-opacity-30 border-2 border-dashed text-white' : '')}>{preguntaActual.pregunta}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* respuestas */}
      <div className="sombreadoRetro w-[23rem] h-[33rem] bg-[#D9D9D9]">
        <div className="bg-blue-700 bg-opacity-40 p-[0.2rem] text-2xl  font-semibold text-blue-700">
        Explanations
        </div>
        <div className="p-[0.5rem] ">
          <div className="text-2xl  font-semibold text-blue-700">
          {pregunta.pregunta}
          </div>
          <div>{pregunta.respuesta}</div>
        </div>
      </div>
    </div>
  );
};

export default Help;
