module.exports = (function() {
  const greetingRouter = require('express').Router();
  const db = require('../db/db');
  greetingRouter.get('/', async function(req, res, next) {
    db.query('SELECT * FROM Greeting', (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data[0].message);
      message = res.json(data[0]);
      return message;
    });
  });
  return greetingRouter;
})();