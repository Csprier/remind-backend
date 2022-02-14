const express = require('express');
const cors = require('cors');

// dotenv
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(cors());
app.options('*', cors());

// ==========================================
// Routers =========================


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