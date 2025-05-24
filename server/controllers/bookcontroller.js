const Book = require('../models/bookModel');
const path = require('path');

exports.listBooks = async (req, res) => {
  const books = await Book.getAll();
  res.render('index', { books });
};

exports.addBook = async (req, res) => {
  const { title, author, is_active } = req.body;
  const file_path = req.file ? `/uploads/${req.file.filename}` : null;

  await Book.create({ title, author, is_active: is_active ? 1 : 0, file_path });
  res.redirect('/');
};

exports.getEditForm = async (req, res) => {
  const book = await Book.getById(req.params.id);
  res.render('edit', { book });
};

exports.updateBook = async (req, res) => {
  const { title, author, is_active } = req.body;
  const file_path = req.file ? `/uploads/${req.file.filename}` : req.body.oldFile;

  await Book.update(req.params.id, { title, author, is_active: is_active ? 1 : 0, file_path });
  res.redirect('/');
};

exports.deleteBook = async (req, res) => {
  await Book.delete(req.params.id);
  res.redirect('/');
};
