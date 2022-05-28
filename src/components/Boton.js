import React from 'react';
import '../stylesheets/Boton.css';

function Button(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
    /* isNaN(is not a number) esto devuelve true su ninguna de las sentencias da false, si una sola da false ya se considera false. */
  };

  return (
    <div
        className={`boton-container ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.manejarClick(props.children)}>
          {/* trimEnd te permite borrar espacios al final de una cadena de caracteres */}
      {props.children}
    </div>
  );
};

export default Button;