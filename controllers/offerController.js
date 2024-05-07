const Offer = require("../models/offerModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getoffer = handlerFactory.getOne(Offer);
exports.createoffer = handlerFactory.createOne(Offer);
exports.updateoffer = handlerFactory.updateOne(Offer);
exports.deleteoffer = handlerFactory.deleteOne(Offer);
exports.getAlloffer = handlerFactory.getAll(Offer);
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
