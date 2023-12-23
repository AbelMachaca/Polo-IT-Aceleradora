import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmpresaCard from './EmpresaCard';
import Filtros from './Filtros';
import ModalContacto from './ModalContacto';
import './EmpresaList.css';

const EmpresaList = () => {
  const [empresa, setEmpresas] = useState([]);
  const [empresasFiltradas, setEmpresasFiltradas] = useState([]);
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState(null);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await axios.get('https://backend-polo-it.onrender.com/empresas');
        setEmpresas(response.data);
        setEmpresasFiltradas(response.data); // Inicialmente, muestra todas las empresas
      } catch (error) {
        console.error('Error al obtener empresas', error);
      }
    };

    fetchEmpresas();
  }, []);

  const filtrarEmpresas = (empresasFiltradas) => {
    setEmpresasFiltradas(empresasFiltradas);
  };

/*
  const abrirModalContacto = (empresa) => {
    setEmpresaSeleccionada(empresa);
  };*/

  const cerrarModalContacto = () => {
    setEmpresaSeleccionada(null);
  };

  return (
    <div className="empresa-list-container">
      <h2>Lista de Empresas</h2>
      <Filtros onFiltrarEmpresas={filtrarEmpresas} />
      <div className="empresa-card-list">
        {empresasFiltradas.map((empresa, index) => (
          <div key={index}>
            <EmpresaCard empresa={empresa} />
           
          </div>
        ))}
      </div>
      {empresaSeleccionada && (
        <ModalContacto
          empresa={empresaSeleccionada}
          onClose={cerrarModalContacto}
        />
      )}
    </div>
  );
};

export default EmpresaList;
