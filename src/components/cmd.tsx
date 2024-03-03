import { useState, ChangeEvent, useEffect } from "react";

const Cmd = () => {

  const [text, setText] = useState(
    "Copland OS.                                                  v.2.556.8588 \n(C) Copland Corp. All rigths reserved.\n \n \n \n \n".split(
      /\n/,
    ),
  );
  const [input, setInput] = useState("C:\\User> ");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value[e.target.value.length - 1] == "\n") {
      switch ((e.target.value).replace(/C:\\User> (.*)/s,'$1').trim()) {
        case "-color blue":
          setText([...text, input, "something"]);
          setInput("C:\\User> ");
          break;
        case "-help":
          setText([...text, input, "-color [blue,red,green] //change console color\n-run [links, help, mixer, ask] //run de desired program\n-off //powers off the OS"]);
          setInput("C:\\User> ");
          break;
        default:
          setText([
            ...text,
            input,
            "no command found! \n to see commands use -help",
          ]);
          setInput("C:\\User> ");
      }
    } else if (e.target.value.length > 73) {
      setText([...text, input]);
      setInput("");
    } else if (e.target.value.length < 10) {
      setInput("C:\\User> ");
    } else {
      setInput(e.target.value);
    }
  };

  return (
    <div className="h-[35rem] w-[38rem] bg-[#D9D9D9] bg-opacity-90 overflow-y-scroll">
      <div className="relative min-h-full h-fit w-full">
        <textarea
          value={input}
          onChange={handleChange}
          className="absolute left-0 bottom-0 z-10 h-full w-full resize-none overflow-hidden border-none bg-transparent text-transparent outline-none "
        />
        {text.map((line, index) => {
          return (
            <div
              key={index}
              className={
                "pointer-events-none h-auto w-fit select-none whitespace-pre bg-[#00002A] pl-1 text-white"
              }
            >
              {line}
            </div>
          );
        })}
        <div
          className={
            "pointer-events-none h-auto w-fit select-none whitespace-pre bg-[#00002A] pl-1 text-white"
          }
        >
          {input}
        </div>
      </div>
    </div>
  );
};

export default Cmd;
