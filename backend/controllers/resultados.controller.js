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
            resultado.setPdfUrl(filename)
        }

        const resultadoStored = await resultado.save()

        res.status(201).send({resultadoStored})
        console.log(resultadoStored)
    }catch (e){
        res.status(500).send({message: e.message})
    }
}

module.exports = {
    addResultado,
    //getResultado
}





// const Resultado = require('../models/resultados.model')

// async function addResultado (req, res) {
//   try {
//     const {
//             documento_paciente,
//             nombre_resultado,
//             size,
//             unitaryPrice,
//             description
//     } = req.body

//     const resultado = Resultado({
//         documento_paciente,
//         nombre_resultado,
//         size,
//         unitaryPrice,
//         description
//     })

//     if (req.file) {
//       const { filename } = req.file
//       resultado.setPdfUrl(filename)
//     }

//     const resultadoStored = await resultado.save()

//     res.status(201).send({ resultadoStored })
//   } catch (e) {
//     res.status(500).send({ message: e.message })
//   }
// }

// /* async function getProducts (req, res) {
//   const products = await Product.find().lean().exec()
//   res.status(200).send({ products })
// } */

// module.exports = {
//     addResultado,
//   //getProducts
// }