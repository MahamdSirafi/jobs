const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const imguserMiddlewers = require('./../middlewares/imguserMiddlewers');
const router = express.Router();
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.get('/resetPassword/:token', (req, res) => {
  res.render('user/resetPassword4');
});
router.post('/signup', authController.signup);
// router.use(authMiddlewers.protect);
// router.patch('/activeMe', authMiddlewers.protect, userController.activeMe);
// router.use(authMiddlewers.isactive)
router.patch(
  '/updateMyPassword',
  authMiddlewers.protect,
  authMiddlewers.isactive,
  authController.updatePassword
);
router.get(
  '/me',
  authMiddlewers.protect,
  authMiddlewers.isactive,
  userController.getMe,
  userController.getUser
);
router.patch(
  '/updateMeAndUpload',
  authMiddlewers.protect,
  authMiddlewers.isactive,
  imguserMiddlewers.uploadUserPhoto,
  userController.updateMe
);
router.patch(
  '/updateMe',
  authMiddlewers.protect,
  authMiddlewers.isactive,
  userController.updateMe
);
router.delete('/deleteMe', authMiddlewers.protect, userController.deleteMe);
// router.use(authMiddlewers.restrictTo('admin'));
router
  .route('/')
  .get(
    authMiddlewers.protect,
    authMiddlewers.isactive,
    userController.getAllUsers
  )
  .post(
    authMiddlewers.protect,
    authMiddlewers.isactive,
    authMiddlewers.restrictTo('admin'),
    userController.createUser
  );
router
  .route('/:id')
  .get(
    authMiddlewers.protect,
    authMiddlewers.isactive,
    authMiddlewers.restrictTo('admin'),
    userController.getUser
  )
  .patch(
    authMiddlewers.protect,
    authMiddlewers.isactive,
    authMiddlewers.restrictTo('admin'),
    userController.updateUser
  )
  .delete(
    authMiddlewers.protect,
    authMiddlewers.isactive,
    authMiddlewers.restrictTo('admin'),
    userController.deleteUser
  );
module.exports = router;
