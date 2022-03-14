var express = require('express');
const pool = require('./db');
const app = express();

const db = require('./db');
app.use(express.json());

app.post('/new', async (req, res) => {
  console.log(req.body);
  try {
    const newData = await pool.query('INSERT INTO USERS (NAME) VALUES ($1)', [
      req.body.name,
    ]);
    res.json(newData);
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log('Server is running .... !!');
});
