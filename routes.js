const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.end("Service is live.");
});

require("./api/opportunity_mission.api")(router);

module.exports = router;