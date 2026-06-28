const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  bookId: mongoose.Schema.Types.ObjectId,
  returned: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Borrow", borrowSchema);