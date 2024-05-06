const categurieController = require("../controllers/categurieController");
  const express = require("express");
  const router = express.Router();
  router.route("/").get(categurieController.getAllcategurie).post(categurieController.createcategurie);
  router
    .route("/:id")
    .get(categurieController.getcategurie)
    .patch(categurieController.updatecategurie)
    .delete(categurieController.deletecategurie);
  module.exports = router;
  