const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Marketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Define routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Simple HTML endpoint
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Marketplace API</h1><p>Use the /api/products endpoint to interact with the API.</p>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
