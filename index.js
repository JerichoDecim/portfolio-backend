require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://jerichobaal-portfolio.vercel.app'
  ]
}));
app.use(express.json());

app.use('/api/contact', require('./routes/contact'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));