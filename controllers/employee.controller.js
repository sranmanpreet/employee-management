const mongoose = require('mongoose');

const Counter = mongoose.model('Counter');
const Employee = mongoose.model('Employee');
const Department = mongoose.model('Department');

module.exports.addEmployee = async (req, res) => {
    let empId;

    await Counter.updateOne({
        _id: "empId"
    }, {
        $inc: {
            sequence_value: 1
        }
    });

    await Counter.findOne({
        _id: "empId"
    }, (err, emp) => {
        empId = emp.sequence_value;
    });

    const newEmployee = new Employee({
        empId: empId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        manager: req.body.manager,
        department: req.body.department,
        phone: req.body.phone
    });

    newEmployee.save((err, employee) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Failed to add employee. If problem persists, please contact administerator. ErrorCode- 7001',
                error: err.message
            });
        } else {
            return res.status(200).json({
                status: true,
                message: 'Employee added successfully'
            });
        }
    });
}

module.exports.getEmployee = (req, res) => {
    Employee.findOne({
        empId: req.params.empId
    }, (err, employee) => {
        if (employee) {
            return res.status(200).send(employee);
        } else {
            return res.status(201).send("No employee with ID " + req.params.empId + " found in database");
        }
    })
}

module.exports.getAllEmployees = async (req, res) => {
    let limit = 0;
    let skip = 0;
    let totalCount = 0;
    if (req.query) {
        limit = parseInt(req.query.size);
        skip = (parseInt(req.query.pageNo)) * limit;
    }
    await Employee.countDocuments((err, num) => totalCount = num);
    Employee.find((err, employees) => {
        if (employees) {
            return res.status(200).json({
                employees: employees,
                total: totalCount
            });
        } else {
            return res.status(201).send("No employees found in database");
        }
    }).populate('manager').populate('department').limit(limit).skip(skip);
}

module.exports.getEmployeesByFilter = async (req, res) => {
    if (req.body.selectedFilter == 'Employee' || req.body.selectedFilter == 'Manager') {
        let employee_id;
        await Employee.find({
            empId: req.body.id
        }, (err, employees) => {
            if (employees) {
                if (req.body.selectedFilter == 'Employee') {
                    return res.status(200).send(employees);
                } else {
                    if (employees.length) {
                        employee_id = employees[0]._id;
                        Employee.find({
                            manager: employee_id
                        }, (err, employees) => {
                            if (employees) {
                                return res.status(200).send(employees);
                            } else {
                                return res.status(201).send("No employees found for manager ID " + req.body.id);
                            }
                        }).populate('manager').populate('department');
                    } else {
                        return res.status(200).send(employees);
                    }
                }
            } else {
                return res.status(400).send();
            }
        }).populate('manager').populate('department');
    } else if (req.body.selectedFilter == 'Department') {
        let department_id;
        await Department.findOne({
            depId: req.body.id
        }, (err, dep) => {
            if (dep) {
                department_id = dep._id;
            } else {
                return res.status(201).send([]);
            }
        });

        if (department_id) {
            Employee.find({
                department: department_id
            }, (err, employees) => {
                if (employees) {
                    return res.status(200).send(employees);
                } else {
                    return res.status(201).send([]);
                }
            }).populate('manager').populate('department');
        }
    }
}

module.exports.updateEmployee = (req, res) => {
    Employee.updateOne({
        _id: req.params._id
    }, {
        $set: {
            manager: req.body.manager,
            department: req.body.department,
            phone: req.body.phone
        }
    }, (err) => {
        if (!err) {
            return res.status(200).send("Employee record updated");
        } else {
            return res.status(500).send("Something went wrong. Please try again later.");
        }
    });
}


module.exports.deleteEmployee = async (req, res) => {
    Employee.deleteOne({
        _id: req.params._id
    }, (err, employees) => {
        if (employees) {
            return res.status(200).send("Employee record deleted from database");
        } else {
            return res.status(500).send("Something went wrong. Please try again later.");
        }
    });
}