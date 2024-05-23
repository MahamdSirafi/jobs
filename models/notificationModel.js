const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema({
  user : {
      required : [true , 'must enter user'],
type : mongoose.Schema.ObjectId,
ref : 'User'
    },
    notification : {
      required : [true , 'must enter notification'],
type : String,
    },
    
},{
      timestamps: true,
      versionKey: false
    });
    const Notification = mongoose.model("Notification", notificationSchema);
    module.exports = Notification;
    