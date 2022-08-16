import './App.css';
import Formulario from './Formulario';
import VisorDeHuespedes from './VisorDeHuespedes';

function App() {
  return (
    <div className='m-8 mt-4'>
      <h1 className='text-green-800 font-black text-center'>Hola mundo de React</h1>
      <div className='container flex justify-center'>
        <Formulario className='mr-3'  nombre={"Cat´s Hotel"}/>
        <VisorDeHuespedes/>
      </div>
    </div>
  );
}

export default App;
