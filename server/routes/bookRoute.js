const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const multer = require('multer');

const upload = multer({ dest: 'public/uploads/' });

router.get('/', bookController.listBooks);
router.post('/add', upload.single('file'), bookController.addBook);
router.get('/edit/:id', bookController.getEditForm);
router.post('/update/:id', upload.single('file'), bookController.updateBook);
router.get('/delete/:id', bookController.deleteBook);

module.exports = router;
