const express = require("express");
const router = express.Router();

const eventsController = require("../controllers/event");

router.get("/", eventsController.index);
router.get("/:id", eventsController.show);
router.get("/name/:name", eventsController.showByName);
router.post("/", eventsController.create);
router.put("/:id", eventsController.update);
router.delete("/:id", eventsController.delete);


module.exports = router;