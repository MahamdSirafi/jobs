const Notification = require("../models/notificationModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getnotification = handlerFactory.getOne(Notification);
exports.createnotification = handlerFactory.createOne(Notification);
exports.updatenotification = handlerFactory.updateOne(Notification);
exports.deletenotification = handlerFactory.deleteOne(Notification);
exports.getAllnotification = handlerFactory.getAll(Notification);
exports.defult = catchAsync(async (req, res, next) => {
  //write your code here
  const doc = []
  if(!doc){
    return (new AppError("Message Error",400))
    }
  res.status(200).json({
    status: "success",
    doc,
  });
});
