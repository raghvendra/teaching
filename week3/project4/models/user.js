import mongoose from 'mongoose';

// Define schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  age: {
    type: Number,
    min: 18,
    max: 100
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create model from schema
const User = mongoose.model('User', userSchema);

export default User;
