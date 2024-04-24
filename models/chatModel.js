const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema(
  {
    user2: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Car must belong to a user.'],
    },
    user1: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Car must belong to a user.'],
    },
  },

  {
    timestamps: true,
  }
);
const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
