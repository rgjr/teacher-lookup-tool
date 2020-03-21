const mongoose = require('mongoose')
const Student = mongoose.model('Student')
const Teacher = mongoose.model('Teacher')
const User = mongoose.model('User')

module.exports = app => {
  // Students
  app.get('/Student/:id', (req, res) => {
    Student.find({ id: req.params.id }).then(student => {
      res.send(student)
    })
  })

  // Teachers
  app.get('/Teacher/:id', async (req, res) => {
    let teacherObj = {}

    let result = await Teacher.find({
      id: req.params.id,
    }).then(teacher => {
      console.log(`TEACHER: ${teacher[0].students}`)
      teacherObj.id = teacher[0].id
      teacherObj.userId = teacher[0].userId
      teacherObj.schoolDistrict = teacher[0].schoolDistrict
      teacherObj.students = []

      for (let student of teacher[0].students) {
        Student.find({ id: student }).then(student => {
          console.log(`STUDENT: ${student}`)
          teacherObj.students.push(student)
          console.log(`TEACHEROBJ: ${JSON.stringify(teacherObj)}`)
        })
      }

      return teacherObj
    })
    // .then(students => {
    //   console.log(`STUDENTS: ${students}`)

    //   for (let student of students) {
    //     Student.find({ id: student }).then(student => {
    //       teacherObj.Teacher[0].students.push(student)
    //       // Teacher.save()
    //       console.log(JSON.stringify(teacherObj.Teacher))
    //     })
    //   }
    // })
    // .then(result => {
    //   console.log('RESULT: ')
    //   console.log(result)

    //   res.send(result)
    // })

    console.log('RESULT: ')
    console.log(result)

    res.send(result)
  })

  app.get('/Teacher/:email', (req, res) => {
    Teacher.find({ email: req.params.email }).then(teacher => {
      res.send(teacher)
    })
  })

  // Users
  app.get('/User/:id', (req, res) => {
    User.find({ id: req.params.id }).then(user => {
      res.send(user)
    })
  })
}
