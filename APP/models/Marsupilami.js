const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    Nom: {
        type: String,
        required: true
    },
    famille: {
        type: String,
        required: false
    },
    age: {
        type: String,
        required: false
    },

    race: {
        type: String,
        required: false
    },
    nourriture: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    pass:  {
        type: String,
        required: false
    },
}, {
    versionKey: false
});


const model = mongoose.model('marsupilami', schema);

module.exports = {schema, model};