
const express = require('express');
const cors = require('cors');

const app = express();

// app.use(cors());
app.use(express.json({ extended: false }), cors());


app.get('/', (req, res) => res.send('Api is running'))

const PORT = process.env.PORT || 8000;

app.use('/search', require('./Routes/searchRoute'));
app.listen(PORT,()=>console.log(`I am listing at ${PORT}`)) 