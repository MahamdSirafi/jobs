const applyController = require('../controllers/applyController');
const { protect, restrictTo } = require('./../middlewares/authMiddlewers');
const { uploadCvPhoto } = require('../middlewares/imgApplytMiddlewar');
const dynamicMiddleware = require('../middlewares/dynamicMiddleware');
const express = require('express');
const router = express.Router();
router.route("/mine").get(protect,restrictTo("user"),dynamicMiddleware.addQuery("user","userId"),
applyController.getAllapply)
router
  .route('/')
  .get(protect, restrictTo('mgr'), applyController.getAllapply)
  .post(
    protect,
    restrictTo('user'),
    uploadCvPhoto,
    dynamicMiddleware.setPathImginBody('cv', 'cv'),
    dynamicMiddleware.addVarBody('user', 'userId'),
    applyController.createapply
  );

router
  .route('/:id')
  .get(applyController.getapply)
  .patch(protect, restrictTo('mgr'), applyController.setNot)
  .delete(protect, restrictTo('mgr'), applyController.deleteapply);
module.exports = router;
