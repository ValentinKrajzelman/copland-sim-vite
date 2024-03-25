import { useState, useEffect } from "react";
import { consulta } from "../api/chatCall";
// import axios from "axios";

const Chat = () => {
  const [chats, setChats] = useState([
    {
    role: "user", 
    content: "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
    hora: "12-5-48",
  },
  {
    role: "user",
    content: "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
    hora: "12-5-48",
  },
    {
    role: "user",
    content: "aljdflkadsjfl;kajfd;lajdf;llajsfljas;dfja;sdjf;asdfj;alskjf",
    hora: "12-5-48",
  },
    {
    role: "user",
    content: "aljdflkadsjfl;kajfd;lajdf;llajsfljas;dfja;sdjf;asdfj;alskjf",
    hora: "12-5-48",
  },
]);
  const [texto, setTexto] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setCurrentTime(new Date());
  }

  const mandarConsulta = async () => {
    console.log(chats);
    if (texto != "" && isLoading == false) {
      setIsLoading(true);
      const nuevaConsulta = {
        role: "user",
        content: texto,
      };
      setTexto("");

      try {
        const response = await consulta([...chats, nuevaConsulta]);
        setChats([...chats, {...nuevaConsulta, hora: currentTime.toLocaleTimeString()}, {...response.data.message, hora: currentTime.toLocaleTimeString()}]);
      } catch (error) {
        setChats([...chats, error]);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[32rem] w-[42rem] bg-[#D9D9D9] bg-opacity-90">
      <div className="flex h-full w-full flex-col justify-between px-3 py-5">
        <div className="overflow-y-auto mb-2">
          {chats.map((chat, index) => {
            return (
              <div>
                <div className="flex items-start mb-2 w-full">
                  <div className={"text-sm min-w-[3rem] " + (chat.role!='user' ? "text-red-600":"text-blue-700")}>[{chat.role}]</div>
                  <div className="min-w-[5rem] pt-1 text-xs">{chat.hora} - </div>
                  <div className="">{chat.content}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex ">
          <textarea
            value={texto}
            onChange={(e) => {
              setTexto(e.target.value);
            }}
            placeholder="Send a message..."
            rows={4}
            cols={50}
            className="sombreadoRetro h-[5rem] w-[35rem] resize-none p-2 text-sm outline-none"
          />
          <div className="ml-5 flex flex-col items-center justify-between">
            <button
              className="sombreadoRetro h-[2rem] w-[5rem] bg-[#BEB5B5] font-medium"
              onClick={() => mandarConsulta()}
            >
              Enviar
            </button>
            <button
              className="sombreadoRetro h-[2rem] w-[5rem] bg-[#BEB5B5] font-medium"
              onClick={() => setTexto("")}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
