const mongoose = require('mongoose');

const DepartmentSchema = mongoose.Schema({
    depId:{
        type: Number,
        required: true,
        length: 2,
        unique: true
    },
    name: {
        type: String,
        required: "Department name can't be empty",
        minlength: [1, 'Too small First name'],
        maxlength: [20, 'Too large First name']
    }
});

module.exports = mongoose.model('Department', DepartmentSchema);