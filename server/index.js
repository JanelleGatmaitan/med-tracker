require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json()); // req.body

//get users

app.get('/api/users', async(req, res) => {
  const sql = 'SELECT * from "users"';
  try {
    const users = await db.query(sql);
    console.log(users.rows);
    res.json(users.rows);

  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log(`server has started on port ${process.env.DEV_SERVER_PORT}`);
});
