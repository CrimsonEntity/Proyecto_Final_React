import { useState } from "react";
import './App.css';
import Formulario from './Formulario';
import VisorDeHuespedes from './VisorDeHuespedes';
import Encabezado from "./Encabezado";


function App() {

  const [huespedes,setHuespedes]=useState([])

  return (
    <div className="bg-yellow-800/25"> 
      <Encabezado/>
      <div className='container mx-auto mt-5 md:flex'>

        <Formulario className='md:-1/2 lg:w-2/5'
        huespedes={huespedes}
        setHuespedes={setHuespedes}
        />

        <VisorDeHuespedes className='md:-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'
        huespedes={huespedes}/>

      </div>
    </div>
  );
}

export default App;
