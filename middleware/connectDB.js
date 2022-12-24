import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const connectDB  = async () => {
    console.log('Connecting to MongoDB...')
    return mongoose.connect(process.env.MONGODB_URL)
}

export default connectDB;