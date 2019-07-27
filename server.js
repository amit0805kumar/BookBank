const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json({ extended: false }));
app.get('/', (req, res) => {
    res.send('API Running');
});
app.use('/api/books', require('./api/books'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});