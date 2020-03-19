const mongoose = require('mongoose')
const Student = mongoose.model('Student')
const Teacher = mongoose.model('Teacher')
const User = mongoose.model('User')

module.exports = app => {
  // Students
  app.get('/Student/:firstName', (req, res) => {
    Student.find({ first_name: req.params.firstName }).then(student => {
      res.send(student)
    })
  })

  // Teachers
  app.get('/Teacher/:userId', (req, res) => {
    Teacher.find({ userId: req.params.userId }).then(teacher => {
      res.send(teacher)
    })
  })

  // Users
  app.get('/User/:firstName', (req, res) => {
    User.find({ firstName: req.params.firstName }).then(user => {
      res.send(user)
    })
  })
}
