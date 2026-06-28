const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const memberController = require("../controllers/memberController");

// Borrow book (Member only)
router.post(
  "/books/:id/borrow",
  auth,
  role("member"),
  memberController.borrowBook
);

// Return book (Member only)
router.post(
  "/books/:id/return",
  auth,
  role("member"),
  memberController.returnBook
);

// My borrowed books
router.get(
  "/me/books",
  auth,
  role("member"),
  memberController.myBooks
);

module.exports = router;