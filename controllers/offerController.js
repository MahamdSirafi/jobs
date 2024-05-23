const Offer = require("../models/offerModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getoffer = handlerFactory.getOne(Offer);
exports.createoffer = handlerFactory.createOne(Offer);
exports.updateoffer = handlerFactory.updateOne(Offer);
exports.deleteoffer = handlerFactory.deleteOne(Offer);
exports.getAlloffer = handlerFactory.getAllpop1(Offer,{path:"categurie",select:"name -_id"});

