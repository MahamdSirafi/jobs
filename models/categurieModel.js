const mongoose = require('mongoose');
const categurieSchema = new mongoose.Schema(
  {
    name: {
      required: [true, 'must enter name'],
      type: String,
    },
    descreption: {
      required: [true, 'must enter descreption'],
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Categurie = mongoose.model('Categurie', categurieSchema);
module.exports = Categurie;
