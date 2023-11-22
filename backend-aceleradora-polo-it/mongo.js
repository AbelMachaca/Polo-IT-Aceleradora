require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Empresa = require('./empresaModel');


const connectionString = process.env.MONGODB_URI



mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', async () => {
  console.log('Conexión exitosa a la base de datos MongoDB');

  // Lee el archivo JSON
  const rawData = fs.readFileSync('Productos&Servicios-PoloIT6.json', 'utf-8');
  const empresasData = JSON.parse(rawData);

  // Mapeo de los campos y creación de objetos Empresa
  const empresasMapeadas = empresasData.map((empresa) => ({
    nombre: empresa['Empresa'],
    descripcion: empresa['Breve Descripción de tu empresa'],
    logoUrl: empresa['Logo Url'],
    hardwareFabricacionPropia: empresa['Hardware Fabricación Propia'],
    hardwareTerceros: empresa['Hardware de Terceros (Representación Comercial)'],
    softwarePropio: empresa['Software Propio'],
    softwarePropioVerticales: empresa['Software Propio Verticales'],
    softwareTerceros: empresa['Software de Terceros'],
    softwareTercerosVerticales: empresa['Software de Terceros Verticales'],
    soporteCustomizacion: empresa['Soporte / Customización'],
    desarrollo: empresa['Desarrollo'],
    solucionesIOT: empresa['Soluciones IOT'],
    mantenimientoSoporte: empresa['Mantenimiento y Soporte'],
    consultoria: empresa['Consultoría'],
    desarrolloAplicaciones: empresa['Desarrollo de Aplicaciones'],
    capacitacion: empresa['Capacitación'],
    testing: empresa['Testing'],
    cloud: empresa['Cloud'],
    bigData: empresa['Big Data'],
    actividadesExterior: empresa['Actividades con el Exterior'],
    coberturaGeografica: empresa['Cobertura Geográfica'],
    serviciosVerticales: empresa['Servicios Verticales'],
    tamanoEmpresa: empresa['Tamaño de Empresa'],
  }));

  // Inserta los datos mapeados en la base de datos
  try {
    await Empresa.insertMany(empresasMapeadas);
    console.log('Datos importados exitosamente');
  } catch (err) {
    console.error('Error al importar datos:', err);
  } finally {
    // Cierra la conexión a la base de datos
    mongoose.connection.close();
  }
});











