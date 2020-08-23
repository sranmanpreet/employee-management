const mongoose = require('mongoose');

const Counter = mongoose.model('Counter');
const Department = mongoose.model('Department');
const Employee = mongoose.model('Employee');

module.exports.addDepartment = async (req, res) => {
    let depId;

    await Counter.updateOne({
        _id: "depId"
    }, {
        $inc: {
            sequence_value: 1
        }
    });

    await Counter.findOne({
        _id: "depId"
    }, (err, dept) => {
        depId = dept.sequence_value;
    });

    const newDepartment = new Department({
        depId: depId,
        name: req.body.name
    });

    newDepartment.save((err, employee) => {
        if (err) {
            return res.status(400).json({
                status: false,
                message: err.message
            });
        } else {
            return res.status(200).json({
                status: true,
                message: 'Department added successfully'
            });
        }
    });
}

module.exports.getDepartment = (req, res) => {
    Department.findOne({
        depId: req.params.departmentId
    }, (err, department) => {
        if (department) {
            return res.status(200).send(department);
        } else {
            return res.status(201).send("No department with ID " + req.params.departmentId + " found in database");
        }
    })
}

module.exports.getDepartments = async (req, res) => {
    let limit = 0;
    let skip = 0;
    let totalCount = 0;
    if (req.query) {
        limit = parseInt(req.query.size);
        skip = (parseInt(req.query.pageNo)) * limit;
    }
    await Department.countDocuments((err, num) => totalCount = num);
    Department.find((err, departments) => {
        if (departments) {
            return res.status(200).json({
                departments: departments,
                total: totalCount
            });
        } else {
            return res.status(201).send("No departments found in database");
        }
    }).limit(limit).skip(skip);
}

module.exports.updateDepartment = (req, res) => {
    Department.updateOne({
        depId: req.params.depId
    }, {
        $set: {
            name: req.body.name
        }
    }, (err) => {
        if (!err) {
            return res.status(200).send("Department record updated");
        } else {
            return res.status(500).send("Something went wrong. Please try again later.");
        }
    });
}


module.exports.deleteDepartment = async (req, res) => {
    console.log(req.params._id);
    let flag = false;
    await Employee.find({
        department: req.params._id
    }, (err, employees) => {
        if (employees.length === 0) {
            flag = true;
        } else {
            return res.status(201).send("Department cannot be deleted. There are " + employees.length + " employees associated to this department. To delete, please associate the employees to some other department first.");
        }
    });

    if (flag) {
        Department.deleteOne({
            _id: req.params._id
        }, (err, department) => {
            if (department) {
                console.log(department);
                return res.status(200).send("Department record deleted from database");
            } else {
                return res.status(500).send("Something went wrong. Please try again later.");
            }
        });
    }
}