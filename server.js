const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ===============================
// MIDDLEWARE
// ===============================
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// SERVE FRONTEND (IMPORTANT FIX)
// ===============================
app.use(express.static(path.join(__dirname, 'public')));

// ===============================
// API ROUTES
// ===============================
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    env: 'Node.js + Express',
    timestamp: new Date().toISOString(),
    server: 'Mazwi Ndlovu Portfolio Backend'
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log(`New contact message from ${name} (${email}): ${message}`);

  res.json({
    success: true,
    message: 'Message received successfully!',
    data: { name, email, message }
  });
});

app.get('/api/card/generate', (req, res) => {
  const player = req.query.player || 'Mazwi Ndlovu';

  res.json({
    success: true,
    data: {
      playerName: player,
      position: 'Attacking Midfielder',
      rating: 89,
      club: 'Orlando Pirates',
      nationality: 'South Africa'
    }
  });
});

// ===============================
// FRONTEND ROUTE (FIXED)
// ===============================
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===============================
// ERROR HANDLER
// ===============================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// ===============================
// START SERVER
// ===============================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoint: /api/health`);
});