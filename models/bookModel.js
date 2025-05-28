const db = require('../db');

class Book {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM books');
    return rows;
  }

  static async create({ title, author, is_active, file_path }) {
    const [result] = await db.query(
      'INSERT INTO books (title, author, is_active, file_path) VALUES (?, ?, ?, ?)',
      [title, author, is_active, file_path]
    );
    return result.insertId;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM books WHERE id = ?', [id]);
    return rows[0];
  }

  static async update(id, { title, author, is_active, file_path }) {
    await db.query(
      'UPDATE books SET title = ?, author = ?, is_active = ?, file_path = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [title, author, is_active, file_path, id]
    );
  }

  static async delete(id) {
    await db.query('DELETE FROM books WHERE id = ?', [id]);
  }
}

module.exports = Book;
