const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema(
  {
    chat: {
      type: mongoose.Schema.ObjectId,
      ref: 'Chat',
      required: [true, 'message must belong to a chat.'],
    },
    sender: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'message must belong to a sender.'],
    },
    message: {
      type: String,
      required: [true, 'message is not found .'],
    },
  },
  {
    timestamps: true,
  }
);
const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
