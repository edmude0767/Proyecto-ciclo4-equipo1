const Paciente = require("../models/pacientes.model");

let response = {
    msg: "",
    exito: false
}

exports.create = function (req, res) {
    let paciente = new Paciente({
        tipo_documento: req.body.tipo_documento,
        numero_documento: req.body.numero_documento,
        primer_nombre: req.body.primer_nombre,
        segundo_nombre: req.body.segundo_nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion,
        sexo: req.body.sexo,
        fecha_nacimiento: req.body.fecha_nacimiento
    })

    paciente.save(function (err) {
        if (err) {
            console.log(err);
            response.exito = false;
            response.msg = "Error al guardar el usuario";
            res.json(response);
            return;
        }
        response.exito = true;
        response.msg = "El usuario se guardó correctamente";
        res.json(response);
    })
}

exports.find = function (req, res) {
    Paciente.find(function (err, pacientes) {
        res.json(pacientes)
    })
}

exports.findOne = function (req, res) {
    Paciente.findOne({ numero_documento: req.params.numero_documento}, function (err, paciente) {
        res.json(paciente)
    })
}

exports.update = function (req, res) {
    let paciente = ({
        tipo_documento: req.body.tipo_documento,
        numero_documento: req.body.numero_documento,
        primer_nombre: req.body.primer_nombre,
        segundo_nombre: req.body.segundo_nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion,
        sexo: req.body.sexo,
        fecha_nacimiento: req.body.fecha_nacimiento
    })
    Paciente.findByIdAndUpdate(req.params.numero_documento, { $set: paciente }, function (err) {
        if (err) {
            console.error(err)
                response.exito = false
                response.msg = "Error al modificar el Paciente"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "El Paciente se actualizo correctamente"
        res.json(response)
    })
}

exports.remove = function (req, res) {
    Paciente.findByIdAndRemove({ numero_documento: req.params.numero_documento }, function (err) {
        if (err) {
            console.error(err)
                response.exito = false
                response.msg = "Error al eliminar al paciente"
            res.json(response)
            return;
        }

        response.exito = true
            response.msg = "El paciente se ha eliminado correctamente"
        res.json(response)
    })
}