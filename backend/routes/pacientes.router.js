const express = require("express");
const router = express.Router();
const pacientesController = require("../controllers/pacientes.controller");

router.post("/", pacientesController.create);
router.get("/", pacientesController.find);

router.get("/:numero_documento", pacientesController.findOne);
router.put("/:numero_documento", pacientesController.update);
router.delete("/:numero_documento", pacientesController.remove);

module.exports = router;    
