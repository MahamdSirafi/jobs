const offerController = require("../controllers/offerController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(offerController.getAlloffer).post(offerController.createoffer);
  router
    .route("/:id")
    .get(offerController.getoffer)
    .patch(offerController.updateoffer)
    .delete(offerController.deleteoffer);
  module.exports = router;
  