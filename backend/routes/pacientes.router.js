const express = require("express");
const router = express.Router();
const pacientesController = require("../controllers/pacientes.controller");

router.post("/", pacientesController.create);
router.get("/", pacientesController.find);

//*********************************************************//
//Estas funciones aún hay que revisarlas, no funcionan bien//
//*********************************************************//

router.get("/:numero_documento", pacientesController.findOne);
router.put("/:numero_documento", pacientesController.update);
router.delete("/:numero_documento", pacientesController.remove);

module.exports = router;    
