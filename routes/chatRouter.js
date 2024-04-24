const chatController = require('../controllers/chatController');
const dynamicMiddleware = require('../middlewares/dynamicMiddleware');
const authMiddlewers = require('../middlewares/authMiddlewers');
const messageRouter = require('./messageRouter');

const express = require('express');
const router = express.Router();
router.use('/:chatId/messages', messageRouter);
router
  .route('/')
  .get(authMiddlewers.protect,authMiddlewers.restrictTo('admin'), chatController.getAllchat)
  .post(
    authMiddlewers.protect,
    dynamicMiddleware.addVarBody('user1', 'userId'),
    chatController.createchat
  );
router
  .route('/mychats')
  .get(authMiddlewers.protect, chatController.getAllMychats);
router
  .route('/:id')
  .get( authMiddlewers.protect,chatController.getchat)
  .patch(chatController.updatechat)
  .delete(chatController.deletechat);
module.exports = router;
