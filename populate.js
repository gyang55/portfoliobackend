const { guangModel } = require('./schema')
const { info } = require('./infData')

const insertGuangInformation = () => {
    guangModel.findOneAndUpdate({ name: 'guang' }, info, { upsert: true, new: true }, async (err, result) => {
        if (err) console.log(err);

    })
}

module.exports = { insertGuangInformation }