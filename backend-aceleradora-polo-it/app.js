require('./importData');


const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const Empresa = require('./empresaModel');

const cors = require('cors');
/*
app.set('view engine', 'ejs');
*/

app.use(express.static(path.join(__dirname)));
app.use(cors());
app.get('/', (req, res) =>{
  res.send('')
});

app.get('/empresas', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  try {
    let empresas;

    // Verifica si se enviaron categorías como parámetros de consulta
    if (req.query.categorias) {
      const categorias = req.query.categorias.split(','); // Convierte las categorías en un array
      empresas = await Empresa.find({
        // Filtra las empresas según las categorías seleccionadas
        $or: categorias.map((categoria) => ({ [categoria]: { $exists: true, $ne: '' } })),
      });
    } else {
      // Si no se enviaron categorías, obtén todas las empresas
      empresas = await Empresa.find();
    }

    res.json(empresas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'No se pudieron obtener las empresas' });
  }
});


app.get('/empresas/hardware/hardware-fabricacion-propia', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  const hardwareFabricacionPropia = req.query.hardwareFabricacionPropia;
  try {
    const empresasFiltradas = await Empresa.find({
      'hardwareFabricacionPropia': { $regex: new RegExp(hardwareFabricacionPropia, 'i') }
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por hardwareFabricacionPropia' });
  }
});


  app.get('/empresas/hardware/hardware-terceros', async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
    const hardwareTerceros = req.query.hardwareTerceros;
    try {
      const empresasFiltradas = await Empresa.find({
        'hardwareTerceros': { $regex: new RegExp(hardwareTerceros, 'i') }
      });
      res.json(empresasFiltradas);
    } catch (err) {
      res.status(500).json({ error: 'No se pudieron filtrar las empresas por hardwareTerceros' });
    }
  });



app.get('/empresas/software/software-propio', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  const softwarePropio = req.query.softwarePropio;
  try {
    const empresasFiltradas = await Empresa.find({
      'softwarePropio': { $regex: new RegExp(softwarePropio, 'i') }
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por softwarePropio' });
  }
});


app.get('/empresas/software/software-propio-verticales', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  const softwarePropioVerticales = req.query.softwarePropioVerticales;
  try {
    const empresasFiltradas = await Empresa.find({
      'softwarePropioVerticales': { $regex: new RegExp(softwarePropioVerticales, 'i') }
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por softwarePropioVerticales' });
  }
});


app.get('/empresas/software/software-terceros', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  const softwareTerceros = req.query.softwareTerceros;
  try {
    const empresasFiltradas = await Empresa.find({
      'softwareTerceros': { $regex: new RegExp(softwareTerceros, 'i') }
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por softwareTerceros' });
  }
});

app.get('/empresas/software/software-terceros-verticales', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  const softwareTercerosVerticales = req.query.softwareTercerosVerticales;
  try {
    const empresasFiltradas = await Empresa.find({
      'softwareTercerosVerticales': { $regex: new RegExp(softwareTercerosVerticales, 'i') }
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por softwareTercerosVerticales' });
  }
});


app.get('/empresas/servicios/desarrollo', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  
  try {
    const empresasFiltradas = await Empresa.find({
      'desarrollo': /^SI/i, // Usamos una expresión regular que busca 'SI' al inicio (case-insensitive)
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por desarrollo' });
  }
});

app.get('/empresas/servicios/soporte-customizacion', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  
  try {
    const empresasFiltradas = await Empresa.find({
      'soporteCustomizacion': /^SI/i, 
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por soporteCustomizacion' });
  }
});



app.get('/empresas/servicios/soluciones-iot', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  
  try {
    const empresasFiltradas = await Empresa.find({
      'solucionesIOT': /^SI/i, 
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por solucionesIOT' });
  }
});


app.get('/empresas/servicios/mantenimiento-soporte', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  
  try {
    const empresasFiltradas = await Empresa.find({
      'mantenimientoSoporte': /^SI/i, 
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por mantenimientoSoporte' });
  }
});


app.get('/empresas/servicios/consultoria', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  
  try {
    const empresasFiltradas = await Empresa.find({
      'consultoria': /^SI/i, 
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por consultoria' });
  }
});


app.get('/empresas/servicios/desarrollo-aplicaciones', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  
  try {
    const empresasFiltradas = await Empresa.find({
      'desarrolloAplicaciones': /^SI/i, 
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por desarrolloAplicaciones' });
  }
});


app.get('/empresas/servicios/capacitacion', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  
  try {
    const empresasFiltradas = await Empresa.find({
      'capacitacion': /^SI/i, 
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por capacitacion' });
  }
});
app.get('/empresas/servicios/testing', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  
  try {
    const empresasFiltradas = await Empresa.find({
      'testing': /^SI/i, 
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por testing' });
  }
});


app.get('/empresas/servicios/cloud', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  
  try {
    const empresasFiltradas = await Empresa.find({
      'cloud': /^SI/i, 
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por cloud' });
  }
});


app.get('/empresas/servicios/big-data', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  
  try {
    const empresasFiltradas = await Empresa.find({
      'bigData': /^SI/i, 
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por bigData' });
  }
});


app.get('/empresas/servicios/servicios-verticales', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  const serviciosVerticales = req.query.serviciosVerticales;
  try {
    const empresasFiltradas = await Empresa.find({
      'serviciosVerticales': { $regex: new RegExp(serviciosVerticales, 'i') }
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por serviciosVerticales' });
  }
  
});



app.get('/empresas/relaciones-comerciales/actividades-exterior', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  const actividadesExterior = req.query.actividadesExterior;
  try {
    const empresasFiltradas = await Empresa.find({
      'actividadesExterior': { $regex: new RegExp(actividadesExterior, 'i') }
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por actividadesExterior' });
  }
});



app.get('/empresas/cobertura/cobertura-geografica', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  const coberturaGeografica = req.query.coberturaGeografica;
  try {
    const empresasFiltradas = await Empresa.find({
      'coberturaGeografica': { $regex: new RegExp(coberturaGeografica, 'i') }
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por coberturaGeografica' });
  }
  
});



app.get('/empresas/otros/tamano-empresa', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  const tamanoEmpresa = req.query.tamanoEmpresa;
  try {
    const empresasFiltradas = await Empresa.find({
      'tamanoEmpresa': { $regex: new RegExp(tamanoEmpresa, 'i') }
    });
    res.json(empresasFiltradas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron filtrar las empresas por tamanoEmpresa' });
  }
  
});



app.get('/empresas/hardware', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  try {
      const empresasHardware = await Empresa.find({
          $or: [
              { 'hardwareFabricacionPropia': { $exists: true, $ne: '' } },
              { 'hardwareTerceros': { $exists: true, $ne: '' } }
          ]
      });
      res.json(empresasHardware);
  } catch (err) {
      res.status(500).json({ error: 'No se pudieron obtener las empresas de la categoría Hardware' });
  }
});




app.get('/empresas/software', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  try {
      const empresasSoftware = await Empresa.find({
          $or: [
              { 'softwarePropio': { $exists: true, $ne: '' } },
              { 'softwarePropioVerticales': { $exists: true, $ne: '' } },
              { 'softwareTerceros': { $exists: true, $ne: '' } },
              { 'softwareTercerosVerticales': { $exists: true, $ne: '' } }
          ]
      });
      res.json(empresasSoftware);
  } catch (err) {
      res.status(500).json({ error: 'No se pudieron obtener las empresas de la categoría Software' });
  }
});


app.get('/empresas/servicios', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  try {
      const empresasServicios = await Empresa.find({
          $or: [
              { 'soporteCustomizacion': { $exists: true, $ne: '' } },
              { 'desarrollo': { $exists: true, $ne: '' } },
              { 'solucionesIOT': { $exists: true, $ne: '' } },
              { 'mantenimientoSoporte': { $exists: true, $ne: '' } },
              { 'consultoria': { $exists: true, $ne: '' } },
              { 'capacitacion': { $exists: true, $ne: '' } },
              { 'testing': { $exists: true, $ne: '' } },
              { 'cloud': { $exists: true, $ne: '' } },
              { 'bigData': { $exists: true, $ne: '' } },
              { 'actividadesExterior': { $exists: true, $ne: '' } },

          ]
      });
      res.json(empresasServicios);
  } catch (err) {
      res.status(500).json({ error: 'No se pudieron obtener las empresas de la categoría Servicios' });
  }
});


app.get('/empresas/relaciones-comerciales', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  try {
      const empresasRelacionesComerciales = await Empresa.find({
          'actividadesExterior': { $exists: true, $ne: '' }
      });
      res.json(empresasRelacionesComerciales);
  } catch (err) {
      res.status(500).json({ error: 'No se pudieron obtener las empresas de la categoría Relaciones Comerciales' });
  }
});

app.get('/empresas/cobertura', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  try {
      const empresasCobertura = await Empresa.find({
          'coberturaGeografica': { $exists: true, $ne: '' }
      });
      res.json(empresasCobertura);
  } catch (err) {
      res.status(500).json({ error: 'No se pudieron obtener las empresas de la categoría Cobertura' });
  }
});

app.get('/empresas/otros', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-polo-it.onrender.com');
  try {
      const empresasOtros = await Empresa.find({
          $or: [
            { 'tamanoEmpresa': { $exists: true, $ne: '' } },
          ]
      });
      res.json(empresasOtros);
  } catch (err) {
      res.status(500).json({ error: 'No se pudieron obtener las empresas de la categoría Otros' });
  }
});




// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});




app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
