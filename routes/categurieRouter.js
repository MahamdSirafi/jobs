const categurieController = require('../controllers/categurieController');
const authMiddlewers = require('../middlewares/authMiddlewers');
const express = require('express');
const router = express.Router();
router
  .route('/')
  .get(categurieController.getAllcategurie)
  .post(
    authMiddlewers.protect,
    authMiddlewers.restrictTo('admin'),
    categurieController.createcategurie
  );
router
  .route('/:id')
  .get(categurieController.getcategurie)
  .patch(
    authMiddlewers.protect,
    authMiddlewers.restrictTo('admin'),
    categurieController.updatecategurie
  )
  .delete(
    authMiddlewers.protect,
    authMiddlewers.restrictTo('admin'),
    categurieController.deletecategurie
  );
module.exports = router;
