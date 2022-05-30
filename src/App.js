import './App.css';
import logo from './img/Calculator_icon.png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {


  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input) {
      setInput(Math.round(evaluate(input) * 100) / 100)
      ;
    } else {
      alert("Por favor ingrese su cálculo.")
    };
  };

  return (
    <div className="App">

      {/* Contenedor del logo */}
      <div className='logo-container'>
        <img 
            className='logo'
            src={logo}
            alt='Icono de calculadora' />
        <h1 className='logo-title'>Calculator</h1>
        </div>
        
      {/* Contenedor principal */}
      <div className='calculator-container'>
        {/* Pantalla */}
        <Pantalla input={input} />

        {/* Botones */}
        <div className='column'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='column'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='column'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='column'>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='column'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
