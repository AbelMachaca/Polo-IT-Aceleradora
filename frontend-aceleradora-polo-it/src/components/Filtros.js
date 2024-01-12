import React, { useState } from 'react';
import axios from 'axios';
import './Filtros.css';

const Filtros = ( {onFiltrarEmpresas}) => {
  const [categoria, setCategoria] = useState('hardware');
  const [filtroEspecifico, setFiltroEspecifico] = useState('');

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
    setFiltroEspecifico('');
  };

  const handleFiltroEspecificoChange = (event) => {
    setFiltroEspecifico(event.target.value);
  };

  const filtrarEmpresas = async () => {
    try {
      const response = await axios.get(`https://polo-it-aceleradora-production.up.railway.app/empresas/${categoria}/${filtroEspecifico}`);
      onFiltrarEmpresas(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <h3>Filtrar por Categoría</h3>
      <select onChange={handleCategoriaChange} value={categoria}>
        <option value="hardware">Hardware</option>
        <option value="software">Software</option>
        <option value="servicios">Servicios</option>
        <option value="relaciones-comerciales">Relaciones Comerciales</option>
        <option value="cobertura">Cobertura Geográfica</option>
        <option value="otros">Empleados</option>
      </select>


      {categoria === 'hardware' && (
        <div>
          <h3>Filtrar Hardware Específicos</h3>
          <select onChange={handleFiltroEspecificoChange} value={filtroEspecifico}>
            <option value="hardware-fabricacion-propia">Hardware Fabricación Propia</option>
            <option value="hardware-terceros">Hardware de Terceros (Representación Comercial)</option>
            {}
          </select>
        </div>
      )}




      {categoria === 'servicios' && (
        <div>
          <h3>Filtrar Servicios Específicos</h3>
          <select onChange={handleFiltroEspecificoChange} value={filtroEspecifico}>
            <option value="soporte-customizacion">Soporte / Customización</option>
            <option value="desarrollo">Desarrollo</option>
            <option value="soluciones-iot">Soluciones IOT</option>
            <option value="mantenimiento-soporte">Mantenimiento y Soporte</option>
            <option value="consultoria">Consultoría</option>
            <option value="desarrollo-aplicaciones">Desarrollo de Aplicaciones</option>
            <option value="capacitacion">Capacitación</option>
            <option value="testing">Testing</option>
            <option value="cloud">Cloud</option>
            <option value="big-data">Big Data</option>
            <option value="servicios-verticales">Servicios Verticales</option>
            {}
          </select>
        </div>
      )}

      {categoria === 'software' && (
        <div>
          <h3>Filtrar Software Específicos</h3>
          <select onChange={handleFiltroEspecificoChange} value={filtroEspecifico}>
            <option value="software-propio">Software Propio</option>
            <option value="software-propio-verticales">Software Propio Verticales</option>
            <option value="software-terceros">Software de Terceros</option>
            <option value="software-terceros-verticales">Software de Terceros Verticales</option>
            {}
          </select>
        </div>
      )}


      {categoria === 'relaciones-comerciales' && (
        <div>
          <h3>Filtrar Relaciones Comerciales Específicos</h3>
          <select onChange={handleFiltroEspecificoChange} value={filtroEspecifico}>
            <option value="actividades-exterior">Actividades con el Exterior</option>
           
            
            
            {}
          </select>
        </div>
      )}  


      {categoria === 'cobertura' && (
        <div>
          <h3>Filtrar Cobertura Geográfica Específicos</h3>
          <select onChange={handleFiltroEspecificoChange} value={filtroEspecifico}>
            <option value="cobertura-geografica">Cobertura Geográfica</option>
            {}
          </select>
        </div>
      )}    


      {categoria === 'otros' && (
        <div>
          <h3>Filtrar Tamaño de Empresa Específicos</h3>
          <select onChange={handleFiltroEspecificoChange} value={filtroEspecifico}>
            <option value="tamano-empresa">Tamaño de Empresa</option>
            {}
          </select>
        </div>
      )}    

      <button className='filter-button active' onClick={filtrarEmpresas}>Filtrar</button>
    </div>
  );
};

export default Filtros;
