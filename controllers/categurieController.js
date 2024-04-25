const Categurie = require("../models/categurieModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getcategurie = handlerFactory.getOne(Categurie);
exports.createcategurie = handlerFactory.createOne(Categurie);
exports.updatecategurie = handlerFactory.updateOne(Categurie);
exports.deletecategurie = handlerFactory.deleteOne(Categurie);
exports.getAllcategurie = handlerFactory.getAll(Categurie);
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
