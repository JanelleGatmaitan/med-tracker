require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
const app = express();

app.use(cors());
app.use(express.json()); // req.body

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

//user authorization
app.post('/api/auth/sign-in', (req, res) => {
  const { username, password } = req.body;
  const sql = `
    select "userId",
           "hashedPassword"
    from "users"
    where "username" = $1
  `;
  const params = [username];
  db.query(sql, params)
    .then(result => {
      const [user] = result.rows;
      if (!user) {
        throw new ClientError(401, 'invalid login');
      }
      const { userId, hashedPassword } = user;
      return argon2
        .verify(hashedPassword, password)
        .then(isMatching => {
          if (!isMatching) {
            throw new ClientError(401, 'invalid login');
          }
          const payload = { userId, username };
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          res.json({ token, user: payload });
        });
    })
    .catch(err => console.log(err));
});

app.listen(process.env.DEV_SERVER_PORT, () => {
  console.log(`server has started on port ${process.env.DEV_SERVER_PORT}`);
});
