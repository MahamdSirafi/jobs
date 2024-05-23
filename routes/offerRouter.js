const offerController = require("../controllers/offerController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
  const express = require("express");
  const router = express.Router();
  
  router.use(authMiddlewers.protect);
  router.route("/mine").get(authMiddlewers.restrictTo("mgr"),dynamicMiddleware.addQuery("hr","userId"),
  offerController.getAlloffer)
  router.route("/").get(offerController.getAlloffer)
  .post(authMiddlewers.restrictTo("mgr"),dynamicMiddleware.addVarBody("hr","userId"), offerController.createoffer);
  router
    .route("/:id")
    .get(offerController.getoffer)
    .patch(authMiddlewers.restrictTo("mgr"),offerController.updateoffer)
    .delete(authMiddlewers.restrictTo("mgr","admin"),offerController.deleteoffer);
  module.exports = router;
  