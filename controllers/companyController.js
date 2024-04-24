const Company = require("../models/companyModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getcompany = handlerFactory.getOne(Company,{ path: 'manager',select: '-_id -__v'});
exports.createcompany = handlerFactory.createOne(Company);
exports.updatecompany = handlerFactory.updateOne(Company);
exports.deletecompany = handlerFactory.deleteOne(Company);
exports.getAllcompany = handlerFactory.getAllpop1(Company,{ path: 'manager',select: '-_id -__v'});
exports.updateMe = catchAsync(async (req, res, next) => {

  // 2) Filtered out unwanted fields names that are not allowed to be updated
 
  if (req.file)
  req.body.photo = `${req.protocol}://${req.get('host')}/img/companies/${
      req.file.filename
    }`;
  // 3) Update user document
  const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      Company: updatedCompany,
    },
  });
});
