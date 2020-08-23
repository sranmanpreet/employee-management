const express = require('express');

const router = express.Router();

const ctrlEmployee = require('../controllers/employee.controller');
const ctrlDepartment = require('../controllers/department.controller');

router.post('/add-employee', ctrlEmployee.addEmployee);

router.get('/employees', ctrlEmployee.getAllEmployees);

router.get('/employee/:empId', ctrlEmployee.getEmployee);

router.patch('/employee/:_id', ctrlEmployee.updateEmployee);

router.post('/search', ctrlEmployee.getEmployeesByFilter);

router.delete('/employee/:_id', ctrlEmployee.deleteEmployee);

router.post('/add-department', ctrlDepartment.addDepartment);

router.get('/department/:departmentId', ctrlDepartment.getDepartment);

router.get('/departments', ctrlDepartment.getDepartments);

router.patch('/department/:depId', ctrlDepartment.updateDepartment);

router.delete('/department/:_id', ctrlDepartment.deleteDepartment);

module.exports = router;