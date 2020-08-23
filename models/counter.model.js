const mongoose = require('mongoose');

const CounterSchema = mongoose.Schema({
    _id: {
        type: String
    },
    sequence_value: {
        type: Number
    }
});

module.exports = mongoose.model('Counter', CounterSchema);