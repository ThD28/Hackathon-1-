const express = require("express");

const router = express.Router();

const TravelControllers = require("./controllers/TravelControllers");

router.get("/travels", TravelControllers.browse);
router.get("/travels/:id", TravelControllers.read);
router.put("/travels/:id", TravelControllers.edit);
router.post("/travels", TravelControllers.add);
router.delete("/travels/:id", TravelControllers.destroy);

module.exports = router;
