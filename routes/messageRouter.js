const messageController = require('../controllers/messageController');
const dynamicMiddleware = require('../middlewares/dynamicMiddleware');
const authMiddlewers = require('../middlewares/authMiddlewers');
const checkMiddleware = require('../middlewares/checkMiddleware');
const Message = require('../models/messageModel');

const express = require('express');
const router = express.Router({ mergeParams: true });
router
  .route('/')
  .get(
    authMiddlewers.protect,
    dynamicMiddleware.addQuery('chat', 'chatId'),
    messageController.getAllmessage
  )
  .post(
    authMiddlewers.protect,
    dynamicMiddleware.addVarBody('sender', 'userId'),
    dynamicMiddleware.addVarBody('chat', 'chatId'),
    messageController.createmessage
  );
router
  .route('/:id')
  .get(authMiddlewers.protect, messageController.getmessage)
  .patch(
    authMiddlewers.protect,
    checkMiddleware.checkOwner(Message, 'sender', 'id'),
    messageController.updatemessage
  )
  .delete(authMiddlewers.protect, checkMiddleware.checkOwner(Message, 'sender', 'id'),messageController.deletemessage);
module.exports = router;
