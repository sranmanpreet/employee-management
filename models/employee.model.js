const mongoose = require('mongoose');

const Department = mongoose.model('Department');

const EmployeeSchema = mongoose.Schema({
    empId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: "First name can't be empty",
        minlength: [2, 'Too small First name'],
        maxlength: [20, 'Too large First name']
    },
    lastName: {
        type: String,
        required: "Last name can't be empty",
        minlength: [2, 'Too small Last name'],
        maxlength: [20, 'Too large Last name']
    },
    phone:{
        type: String
    },
    manager: {
        //type: Number
        type: mongoose.Schema.Types.ObjectId
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Department,
        required: "Department is required."
    }
});


module.exports = mongoose.model('Employee', EmployeeSchema);