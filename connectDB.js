const { mongoose } = require('mongoose')

const connectDB = async () => {
    try {
        const x = await mongoose.connect('mongodb+srv://gyang55:Sumi1107@cluster0.5eauuss.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        console.log("connected to db");
        // mongoose.connection.db.dropDatabase();
        // console.log("Dropped db");

    } catch (error) {
        console.log("db error");
    }
}
module.exports = { connectDB }