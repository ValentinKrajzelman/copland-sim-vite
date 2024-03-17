import { useState } from "react";
import { consulta } from "../api/chatCall";
import axios from "axios";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [texto, setTexto] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log(chats);

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
        setChats([...chats,nuevaConsulta,response.data.message]);
      } catch (error) {
        setChats([...chats, error]);
      }
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Textarea for user input */}
      <textarea
        value={texto}
        onChange={(e) => {
          setTexto(e.target.value);
        }}
        placeholder="Type here..."
        rows={4}
        cols={50}
      />
      <button onClick={() => mandarConsulta()}>aca</button>
    </div>
  );
};

export default Chat;
