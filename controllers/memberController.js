const Book = require("../models/Book");
const Borrow = require("../models/Borrow");

exports.borrowBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book || book.availableQuantity <= 0) {
      return res.status(400).json({
        message: "Book unavailable"
      });
    }

    const alreadyBorrowed = await Borrow.findOne({
      userId: req.user.id,
      bookId: req.params.id,
      returned: false
    });

    if (alreadyBorrowed) {
      return res.status(400).json({
        message: "Book already borrowed"
      });
    }

    await Borrow.create({
      userId: req.user.id,
      bookId: req.params.id
    });

    book.availableQuantity -= 1;
    await book.save();

    res.json({ message: "Book borrowed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const borrow = await Borrow.findOne({
      userId: req.user.id,
      bookId: req.params.id,
      returned: false
    });

    if (!borrow) {
      return res.status(400).json({
        message: "No borrowed record found"
      });
    }

    borrow.returned = true;
    await borrow.save();

    const book = await Book.findById(req.params.id);
    book.availableQuantity += 1;
    await book.save();

    res.json({ message: "Book returned successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.myBooks = async (req, res) => {
  try {
    const books = await Borrow.find({
      userId: req.user.id,
      returned: false
    }).populate("bookId");

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};