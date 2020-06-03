var express = require('express');
var router = express.Router();
const models = require('../models');
const employees = models.employees;
const department = models.department;
const location = models.location;



/* GET users listing. */
router.post('/postEmp', function(req, res, next) {
  const data = req.body;
  employees.create({
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    deptId: data.deptId,
    locId: data.locId 
  })
});

router.get('/getEmp/:empId', function(req, res, next) {
  const data = parseInt(req.params.empId);
  console.log(data)
  employees.findOne({
    where: { EmpId: data }, include : "department"
  })
  .then((findedUser) => { 
    console.log(findedUser)
    res.status(200).json({
      success : findedUser
    })
  })
  .catch((err) => {
    res.json({
      error : "User Not Found!"
    })
  })
  
});

module.exports = router;
