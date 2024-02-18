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

const Navbar = ({ aplicaciones, setAplicaciones }: props) => {
  return (
    <div>
      <div className="flex flex-col  border-2 border-white bg-[#6D754E]">
        <BotonNavbar
          nombre="Links"
          descripcion=" info -Dev-"
          component={<Links />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
        />
        <BotonNavbar
          nombre="Help"
          descripcion=" docs v.1.5.3"
          component={<Chat />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
        />
        <BotonNavbar
          nombre="Mixer"
          descripcion=" audio"
          component={<Cmd />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
        />
        <BotonNavbar
          nombre="Termianl (CMD)"
          descripcion=" -help for a list"
          component={<Help />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
        />
        <BotonNavbar
          nombre="Ask the Wired"
          descripcion=" she shall answer"
          component={<Links />}
          aplicaciones={aplicaciones}
          setAplicaciones={setAplicaciones}
        />
      </div>
    </div>
  );
};

export default Navbar;
