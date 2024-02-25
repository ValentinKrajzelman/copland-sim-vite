import BotonNavbar from "./botonNavbar";

import { aplicacion } from "./inicio";

import Links from "./links";
import Chat from "./chat";
import Cmd from "./cmd";
import Help from "./help";
import Musica from "./musica";


interface props {
  aplicaciones: aplicacion[];
  setAplicaciones: Function;
}

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const Navbar = ({ aplicaciones, setAplicaciones }: props) => {
  return (
    <div>
      <div className="flex flex-col  border-2 border-white bg-[#6D754E]">
        <BotonNavbar
          nombre="Links"
          descripcion=" info -Dev-"
          x={screenWidth*0.8}
          y={screenHeight*0.8}
          component={<Links />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
        />
        <BotonNavbar
          nombre="Help"
          x={screenWidth*0.8}
          y={screenHeight*0.8}
          descripcion=" docs v.1.5.3"
          component={<Help />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
        />
        <BotonNavbar
          nombre="Mixer"
          x={screenWidth*0.8}
          y={screenHeight*0.8}
          descripcion=" audio"
          component={<Musica />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
        />
        <BotonNavbar
          nombre="CMD"
          x={screenWidth*0.8}
          y={screenHeight*0.8}
          descripcion=" -help for a list"
          component={<Cmd />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
        />
        <BotonNavbar
          nombre="Ask the Wired"
          x={screenWidth*0.8}
          y={screenHeight*0.8}
          descripcion=" she shall answer"
          component={<Chat />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
        />
      </div>
    </div>
  );
};

export default Navbar;
