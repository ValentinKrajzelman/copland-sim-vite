import listaRand from "../lib/listaRand";
import { useEffect, useState } from "react";
//lo que voy a hacer aca es que un grupo de numeros, y estadisticas dependa de los numeros random asi se refleja visualmente en la pag, 
//una lista de las barras, una serie de circulos y nums rand como fan: 844rm cpu: 85% intenta que sean reales no seas chafa etc
const DataRand = () => {
  const [nums, setNums] = useState(listaRand(5, 3, 5));

  useEffect(()=>{
      setInterval(()=>{setNums(listaRand(5, 3, 5))},3000)
    },[])

  return <div>
    <div className="border-2 border-white p-2 ">
        <div className="">{nums[0]}</div>
    </div>
  </div>;
};

export default DataRand;

// lista 
// circulo
// nums rand 