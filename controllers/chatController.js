const Chat = require('../models/chatModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.getchat = catchAsync(async (req, res, next) => {
  const doc = await Chat.findById(req.params.id)
    .populate({
      path: 'user1',
      select: 'name role photo',
    })
    .populate({
      path: 'user2',
      select: 'name role photo',
    });
  let data;
  data =
    doc.user1._id == req.user._id
      ? { _id: doc._id, user: doc.user1 }
      : { _id: doc._id, user: doc.user2 };
  res.status(200).json({ status: 'success', doc: data });
});
exports.getAllMychats = catchAsync(async (req, res, next) => {
  const doc = await Chat.find({
    $or: [{ user1: req.user._id }, { user2: req.user._id }],
  })
    .populate({
      path: 'user1',
      select: 'name role photo',
    })
    .populate({
      path: 'user2',
      select: 'name role photo',
    });
  let data = [];
  doc.forEach((item) => {
    data.push(
      item.user1._id == req.user._id
        ? { _id: item._id, user: item.user1 }
        : { _id: item._id, user: item.user2 }
    );
  });
  res.status(200).json({ status: 'success', doc: data });
});
exports.getAllchat = handlerFactory.getAllpop(Chat, 'user1 user2');
exports.createchat = handlerFactory.createOne(Chat);
exports.updatechat = handlerFactory.updateOne(Chat);
exports.deletechat = handlerFactory.deleteOne(Chat);
