const mongoose = require('mongoose');
const applySchema = new mongoose.Schema(
  {
    user: {
      required: [true, 'must enter user'],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    offer: {
      required: [true, 'must enter offer'],
      type: mongoose.Schema.ObjectId,
      ref: 'Offer',
    },
    name: {
      required: [true, 'must enter name'],
      type: String,
    },
    email: {
      required: [true, 'must enter name'],
      type: String,
    },
    message: {
      required: [true, 'must enter message'],
      type: String,
    },
    cv: {
      required: [true, 'must enter cv'],
      type: String,
    },
    status: {
      required: [true, 'must enter cv'],
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Apply = mongoose.model('Apply', applySchema);
module.exports = Apply;
