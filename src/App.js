import './App.css';
import logo from './img/Calculator_icon.png';
import Boton from './components/Boton';

function App() {
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
        <div className='column'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='column'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>/</Boton>
        </div>
        <div className='column'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='column'>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>=</Boton>
          <Boton>-</Boton>
        </div>
        <div className='column'></div>
      </div>

    </div>
  );
}

export default App;
