const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// dotenv
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.options('*', cors());
const PORT = process.env.PORT || 8080;

// ==========================================
// Routers =========================

// test route
app.get('/', (req, res) => {
  res.send('Welcome to RMNDR.');
});

// Error Handler
app.use((err, res) => {
  res.status(err.status);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : err
  });
	console.log({ message: err.message });
});

// Run the server
app.listen(PORT, () => {
  console.log('The server is running on ' + PORT + '.');
});