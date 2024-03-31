import { Route, Routes } from "react-router-dom";
import Inicio from "./components/inicio";


const App = () => {
  return (
    <div className="custom-font">
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
      </Routes>
    </div>
  );
};

export default App;
