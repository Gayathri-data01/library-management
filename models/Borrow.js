const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book"
  },
  returned: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Borrow", borrowSchema);