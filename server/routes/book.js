const router = require("express").Router();
const { json } = require("body-parser");
const Book = require("../models/book");

// POST yeu cau - tao 1 book moi
router.post("/books", async (req, res) => {
  try {
    let book = new Book();
    book.title = req.body.title;
    book.description = req.body.description;
    book.image = req.body.image;
    book.price = req.body.price;
    book.quantity = req.body.quantity;
    book.category = req.body.categoryID;
    book.owner = req.body.ownerID;

    await book.save();
     res.json({
      status: true,
      message: " Successfully saved",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET yeu cau
router.get("/books", async (req, res) => {
  try {
    let books = await Book.find().populate("owner category").exec();
   
    res.json({
      success: true,
      books: books,
    });
 
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET yeu cau - lay mot cuon sach
router.get("/books/:id", async (req, res) => {
  try {
    let book = await Book.findOne({ _id: req.params.id })
      .populate("owner")
      .exec();
    res.json({
      success: true,
      book: book,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT yeu cau - cap nhat mot cuon sach
router.put("/books/:id", async (req, res) => {
  try {
    let book = await Book.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          category: req.body.categoryID,
          image: req.body.image,
          description: req.body.description,
          owner: req.body.ownerID,
          quantity: req.body.quantity,
        },
      },
      {
        upsert: true,
      }
    );
    res.json({
      success: true,
      updateBook: book,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//DELETE yeu cau - xoa 1 cuon sach
router.delete("/books/:id", async (req, res) => {
  try {
    let deletedBook = await Book.findOneAndDelete({ _id: req.params.id });
    if (deletedBook) {
      res.json({
        status: true,
        message: "Successfully deleted",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
