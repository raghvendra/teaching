import mongoose from 'mongoose';

const mongoUri = process.env.MONGODB_URI || 'mongodb://root:example@mongodb:27017/';
const dbConnection = async () => {
  try {
    await mongoose.connect(mongoUri)
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Could not connect to MongoDB', err));
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Exit process with failure
  }
};

export default dbConnection;
