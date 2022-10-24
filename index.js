const express = require('express')
const bodyParser = require('body-parser')
const { connectDB } = require("./connectDB.js")
const { insertGuangInformation } = require('./populate')
const { guangModel } = require('./schema')
var cors = require('cors')
const app = express()
const port = 5000
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
const start = async () => {
    // console.log("starting the server");
    await connectDB();
    await insertGuangInformation()
    app.listen(process.env.PORT || port, (err) => {
        // console.log("app.listen started");
        if (err) console.log(err);
        else
            console.log(`Phew! Server is running on port: ${port}`);
    })
}
start()
app.get('/', (req, res) => {
    res.send('Web is running')
})

app.get('/aboutme', async (req, res) => {
    await guangModel.find({ name: 'guang' }).then(doc => {
        res.send(doc[0]['aboutMe']);
    })
})

app.get('/school', async (req, res) => {
    await guangModel.find({ name: 'guang' }).then(doc => {
        res.send(doc[0]['schools']);
    })
})

app.get('/skills', async (req, res) => {
    await guangModel.find({ name: 'guang' }).then(doc => {
        res.send(doc[0]['skills']);
    })
})