console.log('Hello world!');

import express from 'express';
import dbConnection from './db.js';
import userRepository from './repositories/userRepository.js';

const app = express();
app.use(express.json());

dbConnection();

app.get('/', async (req, res) => {
  res.status(200).json({ 'message': 'Hello World!' });
});

app.post('/user', async (req, res) => {
  try {
    const { name, age, email } = req.body;
    console.log(` ${name}, ${age}, ${email} `);
    const newUser = await userRepository.createUser({ name, age, email });
    res.status(201).json(newUser);
    // res.status(200).json({ message: 'ok' });
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(3000, () => {
  console.log('Server is running on 3000');
});
