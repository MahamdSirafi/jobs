const chatController = require('../controllers/chatController');
const dynamicMiddleware = require('../middlewares/dynamicMiddleware');
const authMiddlewers = require('../middlewares/authMiddlewers');
const messageRouter = require('./messageRouter');

const express = require('express');
const router = express.Router();
router.use('/:chatId/messages', messageRouter);
router
  .route('/')
  .get(
    authMiddlewers.protect,
    authMiddlewers.restrictTo('admin'),
    authMiddlewers.isactive,
    chatController.getAllchat
  )
  .post(
    authMiddlewers.protect,
    authMiddlewers.isactive,
    dynamicMiddleware.addVarBody('user1', 'userId'),
    chatController.createchat
  );
router
  .route('/mychats')
  .get(
    authMiddlewers.protect,
    authMiddlewers.isactive,
    chatController.getAllMychats
  );
router
  .route('/:id')
  .get(authMiddlewers.protect, authMiddlewers.isactive, chatController.getchat)
  .patch(
    authMiddlewers.protect,
    authMiddlewers.isactive,
    chatController.updatechat
  )
  .delete(
    authMiddlewers.protect,
    authMiddlewers.isactive,
    chatController.deletechat
  );
module.exports = router;
