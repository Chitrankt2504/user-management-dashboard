const { createEmploye, createEmployee } = require('../Controllers/EmployeeController.js');
const { cloudinaryFileUploader } = require('../Middleware/FileUploader.js');

const routes  = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Get all employees');
})

routes.post('/', cloudinaryFileUploader.single('profileImage'), createEmployee)

module.exports = routes;