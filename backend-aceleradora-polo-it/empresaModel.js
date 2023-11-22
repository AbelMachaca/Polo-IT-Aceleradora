const mongoose = require('mongoose');




const empresaSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    logoUrl: String,
    hardwareFabricacionPropia: String,
    hardwareTerceros: String,
    softwarePropio: String,
    softwarePropioVerticales: String,
    softwareTerceros: String,
    softwareTercerosVerticales: String,
    soporteCustomizacion: String,
    desarrollo: String,
    solucionesIOT: String,
    mantenimientoSoporte: String,
    consultoria: String,
    desarrolloAplicaciones: String,
    capacitacion: String,
    testing: String,
    cloud: String,
    bigData: String,
    actividadesExterior: String,
    coberturaGeografica: String,
    serviciosVerticales: String,
    tamanoEmpresa: String,
  });
  
  const Empresa = mongoose.model('Empresa', empresaSchema);
  
  module.exports = Empresa;
  