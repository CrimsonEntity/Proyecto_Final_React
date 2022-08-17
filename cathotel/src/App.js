import { useState } from "react";
import './App.css';
import Formulario from './Formulario';
import VisorDeHuespedes from './VisorDeHuespedes';


function App() {

  const [huespedes,setHuespedes]=useState([])

  return (
    <div className='container mx-auto mt-5 flex justify-center'>
      <h1 className='text-green-800 font-black text-center'>Hola mundo de React</h1>
        <Formulario
        huespedes={huespedes}
        setHuespedes={setHuespedes}
        />
        <VisorDeHuespedes
        huespedes={huespedes}/>
    </div>
  );
}

export default App;
