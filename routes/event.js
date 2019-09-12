const express = require("express");
const router = express.Router();

const eventsController = require("../controllers/event");

router.get("/", eventsController.index);
router.get("/id/:id", eventsController.show);
router.post("/post/", eventsController.create);
router.put("/update/:id", eventsController.update);
router.delete("/delete/:id", eventsController.delete);


module.exports = router;