const express = require("express");
const upload = require('../libs/storage')
const resultadosController = require("../controllers/pacientes.controller");
const router = express.Router();

router.post("/resultados", upload.single('resultado', resultadosController));

module.exports = router;    
