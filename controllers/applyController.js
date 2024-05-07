const Apply = require("../models/applyModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getapply = handlerFactory.getOne(Apply);
exports.createapply = handlerFactory.createOne(Apply);
exports.updateapply = handlerFactory.updateOne(Apply);
exports.deleteapply = handlerFactory.deleteOne(Apply);
exports.getAllapply = handlerFactory.getAll(Apply);
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
