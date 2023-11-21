// EmpresaCard.js
import React, { useState } from 'react';
import './EmpresaCard.css';

const EmpresaCard = ({ empresa }) => {
  const [mostrarDescripcionCompleta, setMostrarDescripcionCompleta] = useState(false);

  const descripcionAcortada = empresa.descripcion.slice(0, 100); // Muestra los primeros 100 caracteres

  const handleMostrarMas = () => {
    setMostrarDescripcionCompleta(true);
  };

  return (
    <div className="empresa-card">
      <h3>{empresa.nombre}</h3>
      <p>
        {mostrarDescripcionCompleta ? empresa.descripcion : `${descripcionAcortada}...`}
        {!mostrarDescripcionCompleta && (
          <button onClick={handleMostrarMas}>Leer más</button>
        )}
      </p>
    </div>
  );
};

export default EmpresaCard;
