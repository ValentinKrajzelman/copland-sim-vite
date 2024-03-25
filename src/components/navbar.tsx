import BotonNavbar from "./botonNavbar";

import { aplicacion } from "./inicio";

import Links from "./links";
import Chat from "./chat";
import Cmd from "./cmd";
import Help from "./help";
// import Musica from "./musica";

interface props {
  aplicaciones: aplicacion[];
  setAplicaciones: Function;
}

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const Navbar = ({ aplicaciones, setAplicaciones }: props) => {
  return (
    <div>
      <div className="flex flex-col border-2 border-white bg-[#6D754E]">
        <BotonNavbar
          id={1}
          nombre="Links"
          descripcion=" info -Dev-"
          x={screenWidth * 0.55}
          y={screenHeight * 0.12}
          component={<Links />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
          />
        <BotonNavbar
          id={2}
          nombre="Help"
          x={screenWidth * 0.22}
          y={screenHeight * 0.05}
          descripcion=" docs v.1.5.3"
          component={<Help />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
          />
        {/* <BotonNavbar
          id={3}
          nombre="Mixer"
          descripcion=" audio"
          x={screenWidth * 0.7}
          y={screenHeight * 0.05}
          component={<Musica />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
          /> */}
        <BotonNavbar
          id={4}
          nombre="CMD"
          descripcion=" -help for a list"
          x={screenWidth * 0.05}
          y={screenHeight * 0.25}
          component={<Cmd />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
          />
        <BotonNavbar
          id={5}
          nombre="Ask the Wired"
          descripcion=" she shall answer"
          x={screenWidth * 0.4}
          y={screenHeight * 0.05}
          component={<Chat />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
          />
      </div>
    </div>
  );
};

export default Navbar;
