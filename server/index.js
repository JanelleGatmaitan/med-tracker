require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');
const argon2 = require('argon2');
const app = express();

app.use(cors());
app.use(express.json()); // req.body

//get users
app.get('/api/users', async (req, res) => {
  const sql = 'SELECT * from "users"';
  try {
    const users = await db.query(sql);
    console.log(users.rows);
    res.status(200).json(users.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//post new medication
app.post('/api/addMedication', async (req, res) => {
  const { name, dose, frequency } = req.body;
  const params = [name, dose, frequency, 1];
  const sql = `INSERT INTO "medications" ("medicationName", "dose", "frequency", "userId")
  values ($1, $2, $3, $4)
  returning *;
  `;
  try {
    const newMedication = await db.query(sql, params);
    res.status(200).json(newMedication.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//user registration
app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;
  console.log('req.body.username and password: ', username, password);
  try {
    const hashedPassword = await argon2.hash(password);
    const params = [username, hashedPassword];
    const sql = `
    INSERT INTO "users" ("username", "hashedPassword")
    values ($1, $2)
    returning "username", "userId";
  `;
    const newUser = await db.query(sql, params);
    res.status(200).json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(process.env.DEV_SERVER_PORT, () => {
  console.log(`server has started on port ${process.env.DEV_SERVER_PORT}`);
});
