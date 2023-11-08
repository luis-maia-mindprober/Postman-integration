const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Hello world' });
});

router.get('/pt', (req, res) => {
  res.send({ message: 'Olá Mundo' });
});

router.get('/es', (req, res) => {
  res.send({ message: 'Holla Mundo' });
});

module.exports = router;
