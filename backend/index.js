const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Donor = require('./models/donar'); 
const cors = require('cors'); 
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// POST route to add a new donor
app.post('/donors', async (req, res) => {
  try {
    const { name, bloodGroup, email,address } = req.body;
    const donor = new Donor({ name, bloodGroup, email,address });
    await donor.save();
    res.status(201).json(donor);
  } catch (error) {
    console.error('Error adding donor:', error);
    res.status(500).json({ error: 'Error adding donor' });
  }
});

// GET route to fetch all donors
app.get('/donors', async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    console.error('Error fetching donors:', error);
    res.status(500).json({ error: 'Error fetching donors' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
