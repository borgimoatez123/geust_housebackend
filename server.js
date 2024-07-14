const express = require('express');
const connectDB = require('./config/database');
const guestHouseRoutes = require('./routes/guestHouseRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/guesthouses', guestHouseRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/users', userRoutes);
app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
