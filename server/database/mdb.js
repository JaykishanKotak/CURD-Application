import mongoose from 'mongoose';

const MongoConnection = async (username, password) => {
    const URL = `mongodb://localhost:27017/Curd`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('MongoDB Connected...');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default MongoConnection;