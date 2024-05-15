import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/pruebaTecnicaElogia', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successful connection to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
};
