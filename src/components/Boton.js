import React from 'react';
import '../stylesheets/Boton.css';

function Button(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
    /* isNaN(is not a number) esto devuelve true su ninguna de las sentencias da false, si una sola da false ya se considera false. */
  };

  if(esOperador(props.children)) {
    return (
      <div
          className='boton-container operador'
          onClick={() => props.manejarClick(props.children)}>
            {/* trimEnd te permite borrar espacios al final de una cadena de caracteres */}
        {props.children}
      </div>
    );
  } else {
    return (
      <div
          className='boton-container'
          onClick={() => props.manejarClick(props.children)}>
            {/* trimEnd te permite borrar espacios al final de una cadena de caracteres */}
        {props.children}
      </div>
    );
  }
};

export default Button;