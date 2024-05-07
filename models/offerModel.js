const mongoose = require('mongoose');
const offerSchema = new mongoose.Schema(
  {
    categurie: {
      required: [true, 'must enter categurie'],
      type: mongoose.Schema.ObjectId,
      ref: 'Categurie',
    },
    hr: {
      required: [true, 'must enter hr'],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    jobName: {
      required: [true, 'must enter jobName'],
      type: String,
    },
    price: {
      type: {
        low: {
          type: Number,
          required: [true, 'enter the low price'],
        },
        high: {
          type: Number,
          required: [true, 'enter the high price'],
        },
        type: {
          type: String,
          required: [true, ''],
        },
        for: {
          type: String,
          required: [true, ''],
          enum: ['year', 'month', 'm', 'day', 'y', 'd'],
        },
      },
    },
    experience: {
      type: {
        low: {
          type: Number,
          required: [true, 'enter the low price'],
        },
        high: {
          type: Number,
          required: [true, 'enter the high price'],
        },
        type: {
          type: String,
          required: [true, ''],
          enum: ['year', 'month'],
        },
      },
    },
    note: {
      required: [true, 'must enter experience'],
      type: String,
    },
    jobStatus: {
      required: [true, 'must enter experience'],
      type: String,
      enum: ['Full Time', 'Part Time', 'Freelancer'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer;
