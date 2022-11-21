const Personal = require("../models/personal.model");

let response = {
    msg: "",
    exito: false
}

exports.create = function (req, res) {
    let personal = new Personal({
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

    personal.save(function (err) {
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
    Personal.find(function (err, personal) {
        res.json(personal)
    })
}

exports.findOne = function (req, res) {
    Personal.findOne({ numero_documento: req.params.numero_documento}, function (err, personal) {
        res.json(personal)
    })
}

exports.update = function (req, res) {
    let personal = ({
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
    Personal.findOneAndUpdate(req.params.numero_documento, { $set: personal }, function (err) {
        if (err) {
            console.error(err)
                response.exito = false
                response.msg = "Error al modificar el usuario"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "El usuario se actualizo correctamente"
        res.json(response)
    })
}

exports.remove = function (req, res) {
    Personal.findOneAndRemove({ numero_documento: req.params.numero_documento }, function (err) {
        if (err) {
            console.error(err)
                response.exito = false
                response.msg = "Error al eliminar al usuario"
            res.json(response)
            return;
        }

        response.exito = true
            response.msg = "El usuario se ha eliminado correctamente"
        res.json(response)
    })
}