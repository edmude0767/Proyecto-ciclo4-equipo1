const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PacienteSchema = new Schema({
    tipo_documento:{type: String, required: true, max:10},
    numero_documento:{type: Object, required: true, max:10, unique: true},
    primer_nombre:{type: String, required: true, max:60},
    segundo_nombre:{type: String, required: false, max:60},
    apellido_p:{type: String, required: true, max:40},
    apellido_m:{type: String, required: true, max:40},
    telefono:{type: String, required: true, max:15},
    mail:{type: String, required: false, max:70},
    direccion:{type: String, required: false, max:150},
    sexo:{type: String, required: true, max:15},
    fecha_nacimiento:{type: String, required: true, max:10},
}) 

module.exports = mongoose.model("pacientes", PacienteSchema);