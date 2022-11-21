const express = require("express");
const router = express.Router();
const personalController = require("../controllers/personal.controller");

router.post("/", personalController.create);
router.get("/", personalController.find);

router.get("/:numero_documento", personalController.findOne);
router.put("/:numero_documento", personalController.update);
router.delete("/:numero_documento", personalController.remove);

module.exports = router;    
