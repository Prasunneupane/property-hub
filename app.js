const express = require('express');
const app = express();
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
