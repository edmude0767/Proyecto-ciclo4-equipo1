const Resultado = require('../models/resultados.model')

async function addResultado (req,res){
    try{
        const{
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
            const {filename} = req.file
            resultados.setPdfUrl(filename) 
        }

        const resultadoStored = await resultados.save()

        res.status(201).send({resultadoStored})
    }catch (e){
        res.status(500).send({message: e.message})
    }
}

module.exports = {
    addResultado
}
