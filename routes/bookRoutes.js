const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const bookController = require("../controllers/bookController");

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBookById);
router.post("/", auth, role("librarian"), bookController.addBook);
router.put("/:id", auth, role("librarian"), bookController.updateBook);
router.delete("/:id", auth, role("librarian"), bookController.deleteBook);

module.exports = router;