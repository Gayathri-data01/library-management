const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const bookController = require("../controllers/bookController");

// Get all books
router.get("/", bookController.getBooks);

// Get single book
router.get("/:id", bookController.getBookById);

// Add book (Librarian only)
router.post("/", auth, role("librarian"), bookController.addBook);

// Update book (Librarian only)
router.put("/:id", auth, role("librarian"), bookController.updateBook);

// Delete book (Librarian only)
router.delete("/:id", auth, role("librarian"), bookController.deleteBook);

module.exports = router;