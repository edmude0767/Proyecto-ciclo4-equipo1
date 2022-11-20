const express = require('express')
const upload = require('../libs/storage')
const { addResultado } = require('../controllers/resultados.controller')
const router = express.Router()

router.post('/resultados', upload.single('resultado'), addResultado)
/* router.get('/resultados', getResultados) */

module.exports = router