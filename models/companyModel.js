const mongoose = require("mongoose");
const companySchema = new mongoose.Schema({
  manager:{
          type: mongoose.Schema.ObjectId,
          ref: 'User',
          required: [true, 'company must belong to a manager.']
      },
    location:{
      city:{
        type: String, required: [true, "enter city"] 
      },
      region:{
        type: String, required: [true, "enter region"] 
      }
    },
    name:{
      type: String, required: [true, "enter city"] 
    },
    photo:{
      type: String, 
    }
    
},{
  timestamps: true
});
const Company = mongoose.model("Company", companySchema);
module.exports = Company;
