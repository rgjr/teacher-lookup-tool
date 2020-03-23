const mongoose = require('mongoose')
const { check, validationResult } = require('express-validator')
const Student = mongoose.model('Student')
const Teacher = mongoose.model('Teacher')
const User = mongoose.model('User')

module.exports = app => {
  async function FindUser(search, value) {
    let user = await User.find({
      [search]: value,
    })
      .then(async userType => {
        console.log(`USERTYPE: ${JSON.stringify(userType)}`)
        if (!userType.length) {
          return {
            error: `User ${value} does not exist`,
          }
        }

        if (userType[0].accountType !== 'teacher') {
          return {
            error: `User ${value} is not a Teacher`,
          }
        }

        const teacher = await FindTeacher(userType[0], userType[0].id).catch(e => {
          console.log(`TEACHER ERROR RETURNED: ${e}`)
          return e
        })

        return teacher
      })
      .catch(e => {
        console.log(`FINDUSER ERROR: ${e}`)

        return e
      })

    return user
  }

  async function FindTeacher(user, value) {
    Teacher.find({
      userId: value,
    }).then(x => console.log(`TEACHER NAME: ${x}`))

    let result = await Teacher.find({
      userId: value,
    })
      .then(async teacher => {
        teacherObj = {
          ...user._doc,
        }

        console.log(`TEACHER: ${teacher[0].students}`)
        teacherObj.id = teacher[0].id
        teacherObj.userId = teacher[0].userId
        teacherObj.schoolDistrict = teacher[0].schoolDistrict
        teacherObj.students = []

        for (let student of teacher[0].students) {
          await Student.find({ id: student })
            .then(student => {
              console.log(`STUDENT: ${student}`)
              teacherObj.students.push(student)
              console.log(`TEACHEROBJ: ${JSON.stringify(teacherObj)}`)

              return student
            })
            .catch(e => {
              console.log(`STUDENT ERROR: ${e}`)

              return e
            })
        }

        return teacherObj
      })
      .catch(e => {
        console.log(`FINDTEACHER ERROR: ${e}`)

        return e
      })

    return result
  }

  // Find teacher by ID
  app.get('/User/id/:id', [check('id').isNumeric()], async (req, res) => {
    const errors = validationResult(req)

    console.log(`ERRORS: ${JSON.stringify(errors)}`)

    if (!errors.isEmpty()) {
      res.send(errors)
    } else {
      const teacher = await FindUser('id', req.params.id).catch(e => {
        console.log(`ERROR RETURNED: ${e}`)
        res.send(e)
      })

      console.log(teacher)

      res.send(teacher)
    }
  })

  // Find teacher by email
  app.get('/User/email/:email', [check('email').isEmail()], async (req, res) => {
    const errors = validationResult(req.params.email)

    console.log(`ERRORS: ${JSON.stringify(errors)}`)

    if (!errors.isEmpty()) {
      res.send(errors)
    } else {
      const teacher = await FindUser('email', req.params.email).catch(e => {
        console.log(`ERROR RETURNED: ${e}`)
        res.send(e)
      })

      console.log(teacher)

      res.send(teacher)
    }
  })
}
