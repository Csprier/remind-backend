const greetingRouter = require('express').Router();
const db = require('../db/db');

greetingRouter.get('/greeting', function(req, res) {
  db.query('SELECT * FROM Greeting', function(data, err) {
    if (err) console.error(err);
    let message = res.json(data);
    console.log(message);
    return message;
  });
});

module.exports = greetingRouter;

