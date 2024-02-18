import { Route, Routes } from "react-router-dom";
import Inicio from "./components/inicio";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
      </Routes>
    </div>
  );
};

export default App;
