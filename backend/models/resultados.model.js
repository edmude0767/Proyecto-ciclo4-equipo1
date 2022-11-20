const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {appConfig} = require('../config')

const ResultadosSchema = new Schema({
    documento_paciente: { type: Number, required: true, max: 15},
    nombre_resultado: { type: String, required: true, max: 200},
    size: { type: Number, required: true, max: 60 },
    unitaryPrice: { type: Number, required: false, max: 200 },
    description: { type: String, required: true, max: 240 },
    pdfUrl: String
}  , {
        timestamps: true
    })


ResultadosSchema.methods.setPdfUrl = function setPdfUrl (filename) {
    /* const { host, port } = appConfig */
    host = 'localhost'
    port = '8081'
    this.pdfUrl = `${host}:${port}/public/${filename}`
  }
  
  module.exports = mongoose.model('Resultados', ResultadosSchema)