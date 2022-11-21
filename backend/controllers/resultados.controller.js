const Resultado = require('../models/resultados.model')

async function addResultado(req, res) {
    try {
        const {
            documento_paciente,
            nombre_resultado,
            size,
            unitaryPrice,
            description
        } = req.body

        const resultado = Resultado({
            documento_paciente,
            nombre_resultado,
            size,
            unitaryPrice,
            description
        })

        if (req.file) {
            const { filename } = req.file
            resultado.setPdfUrl(filename)
        }

        const resultadoStored = await resultado.save()

        res.status(201).send({ resultadoStored })
        console.log(resultadoStored)
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function getResultados(req, res) {
    const resultados = await Resultado.find().lean().exec()
    res.status(200).send({ resultados })
}

async function getResultadosId(req, res) {
    const resultados = await Resultado.find({ _id: req.params._id}).lean().exec()
    res.status(200).send({ resultados })
}

async function getResultadosCedula(req, res) {
    const resultados = await Resultado.find({ numero_documento: req.params.numero_documento}).lean().exec()
    res.status(200).send({ resultados })
}

module.exports = {
    addResultado,
    getResultados,    
    getResultadosId,
    getResultadosCedula
}
