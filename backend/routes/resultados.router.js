const express = require('express')
const upload = require('../libs/storage')
const { addResultado, getResultados, getResultadosId, getResultadosCedula } = require('../controllers/resultados.controller')
const router = express.Router()

router.post('/resultados', upload.single('resultado'), addResultado)
router.get('/resultados', getResultados)
router.get('/resultados/id/:_id', getResultadosId)
router.get('/resultados/cc/:numero_documento', getResultadosCedula)


module.exports = router