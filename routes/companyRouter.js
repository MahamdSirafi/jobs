const companyController = require("../controllers/companyController");
const company = require("../models/companyModel");
const authMiddlewers = require('./../middlewares/authMiddlewers');
const imgcompanyMiddlewers= require('./../middlewares/imgcompanyMiddlewers ');
// const dynamicMiddleware= require('./../middlewares/dynamicMiddleware');

const checkMiddleware = require('./../middlewares/checkMiddleware');
const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
  const express = require("express");
  const router = express.Router();
  router.route("/my").get(authMiddlewers.protect,dynamicMiddleware.addQuery("manager","userId"),companyController.getAllcompany)

  router.route("/").get(companyController.getAllcompany).post(authMiddlewers.protect ,authMiddlewers.restrictTo("mgr"),dynamicMiddleware.addVarBody("manager","userId"),companyController.createcompany);
  router
  .route("/:id/upload")
  .patch(authMiddlewers.protect ,authMiddlewers.restrictTo("mgr"),checkMiddleware.checkOwner(company,"manager","id"), imgcompanyMiddlewers.uploadcompanyPhoto,companyController.updateMe)
  
  router
    .route("/:id")
    .get(companyController.getcompany)
    .patch(authMiddlewers.protect ,authMiddlewers.restrictTo("mgr"),
    checkMiddleware.checkOwner(company,"manager","id"),companyController.updatecompany)
    .delete(authMiddlewers.protect ,authMiddlewers.restrictTo("admin"),companyController.deletecompany);
  module.exports = router;
  