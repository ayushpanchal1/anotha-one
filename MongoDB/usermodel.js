const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Feedback', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.error("Connection error", err);
  process.exit();
});


// Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Define Model
const User = mongoose.model('User', userSchema);

module.exports = User;
