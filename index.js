const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();
const PORT = process.env.PORT || 8080;
require('./Models/db.js');
const EmployeeRouter = require('./Routes/EmployeeRoutes.js');

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('User Management Serever is runnning');
});

app.use('/api/employees', EmployeeRouter)
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
