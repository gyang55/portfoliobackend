const mongoose = require('mongoose')
const { Schema } = mongoose
guangSchema = new Schema({
    name: {
        type: String
    },
    aboutMe: {
        experiences: {
            type: String,
        },
        clients: {
            type: String,

        },
        projects: {
            type: String,
        },
        intro: []
    },
    schools: [{ schoolName: String, degree: String, major: String, time: String, courses: [String] }],
    skills: {
        comfortables: [{ key: { type: Number }, name: { type: String }, icon: { type: String }, level: { type: String } }],
        decent: [{ key: { type: Number }, name: { type: String }, icon: { type: String }, level: { type: String } }]
    }
})
guangModel = mongoose.model('guang', guangSchema)

module.exports = { guangModel }