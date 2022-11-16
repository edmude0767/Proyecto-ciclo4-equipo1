const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { appConfig } = require('../config')

const ResultadosSchema = new Schema({
    documento_paciente: { type: Number, required: true, max: 15},
    nombre_resultado: { type: Object, required: true, max: 200},
    size: { type: Number, required: true, max: 60 },
    unitaryPrice: { type: Number, required: false, max: 200 },
    pdfUrl: { type: String, required: true, max: 200 },
    description: { type: String, required: true, max: 240 },
}
    , {
        timestamps: true
    })

ResultadosSchema.methods.setPdfUrl = function setPdfUrl(){
    const {host, port} = appConfig
    this.pdfUrl = `${host}:${port}/public/${filename}`
}
    
module.exports = mongoose.model("resultados", ResultadosSchema);