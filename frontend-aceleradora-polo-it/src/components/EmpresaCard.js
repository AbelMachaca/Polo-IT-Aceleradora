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
      {empresa.logoUrl && 
      <div className='contenedor-logo'>
        
      <img src={empresa.logoUrl} alt={`Logo de ${empresa.nombre}`} />
      
      </div>}

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
