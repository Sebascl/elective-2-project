const axios = require('axios')
const departamentoMunicipio = require('../models/departamentoMunicipio')
const express = require('express')
const app = express.Router()

/* app.get("/datosabiertos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.datos.gov.co/resource/xdk5-pm3f.json"
    );
    const data = response.data;
    await departamentoMunicipio.deleteMany();
    await departamentoMunicipio.insertMany(data);
    res.status(201).send("Datos almacenados en la mongoDB");
  } catch {
    console.log("Error accediendo al JSON", error);
    res.status(500).send("Error accediendo al JSON");
  }
}); */

app.get('/departamentos-municipios', async (req, res) => {
  try {
    const departamento = req.query.departamento;
    const query = departamento ? { departamento: { $regex: new RegExp(departamento, 'i') } } : {};
    const data = await departamentoMunicipio.find(query);
    res.send(data);
  } catch (error) {
    console.log('Error accediendo a la base de datos', error);
    res.status(500).send('Error accediendo a la base de datos');
  }
});


module.exports = app
