import mongoose from 'mongoose';

const MongoConnection = async (username, password) => {
    const URL = `mongodb://user:1234@ac-k17njhs-shard-00-00.3p91lls.mongodb.net:27017,ac-k17njhs-shard-00-01.3p91lls.mongodb.net:27017,ac-k17njhs-shard-00-02.3p91lls.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-90997p-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('MongoDB Connected...');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default MongoConnection;