const Apply = require("../models/applyModel");
const Not = require("../models/notificationModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getapply = handlerFactory.getOne(Apply);
exports.createapply = handlerFactory.createOne(Apply);
exports.updateapply = handlerFactory.updateOne(Apply);
exports.deleteapply = handlerFactory.deleteOne(Apply);
exports.getAllapply = handlerFactory.getAllpop1(Apply,{path:"offer",select:"jobName -_id"});
exports.setNot = catchAsync(async (req, res, next) => {
   const doc = await Apply.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if(req.body.status){
    switch(req.body.status){
     case "refuse":{
      await Not.create({user:doc.user,
        notification:req.body.notification
      })
      break
     }
      case "success":{
       await Not.create({user:doc.user,
         notification:req.body.notification
       })
       break
      }
    }
}
  
  res.status(200).json({
    status: "success",
    doc,
  });
});
