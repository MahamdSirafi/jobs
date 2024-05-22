const applyController = require('../controllers/applyController');
const { protect, restrictTo } = require('./../middlewares/authMiddlewers');
const { uploadCvPhoto } = require('../middlewares/imgApplytMiddlewar');
const dynamicMiddleware = require('../middlewares/dynamicMiddleware');
const express = require('express');
const router = express.Router();
router
  .route('/')
  .get(protect, restrictTo('mgr'), applyController.getAllapply)
  .post(
    protect,
    restrictTo('user'),
    dynamicMiddleware.addVarBody('user', 'userId'),
    uploadCvPhoto,
    dynamicMiddleware.setPathImginBody('cv', 'cv'),
    applyController.createapply
  );
router
  .route('/:id')
  .get(applyController.getapply)
  .patch(protect, restrictTo('mgr'), applyController.updateapply)
  .delete(protect, restrictTo('mgr'), applyController.deleteapply);
module.exports = router;
