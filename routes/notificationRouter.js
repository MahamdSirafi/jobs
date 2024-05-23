const notificationController = require("../controllers/notificationController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const {addVarBody} = require('./../middlewares/dynamicMiddleware');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/mine").get(authMiddlewers.restrictTo("user"),addVarBody("user","useId"),notificationController.getAllnotification)
    router
    .route("/:id")
    .delete(notificationController.deletenotification);
  module.exports = router;
  