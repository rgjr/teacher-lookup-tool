const mongoose = require('mongoose')
const { check, validationResult } = require('express-validator')
const Student = mongoose.model('Student')
const Teacher = mongoose.model('Teacher')
const User = mongoose.model('User')

module.exports = app => {
  async function FindUser(search, value) {
    let user = await User.find({ [search]: value })
      .then(async userType => {
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

        const teacher = await FindTeacher(userType[0], userType[0].id).catch(e => e)

        return teacher
      })
      .catch(e => e)

    return user
  }

  async function FindTeacher(user, value) {
    let result = await Teacher.find({ userId: value })
      .then(async teacher => {
        teacherObj = {
          teacher: {
            ...user._doc,
            teacherId: teacher[0].id,
            userId: teacher[0].userId,
            schoolDistrict: teacher[0].schoolDistrict,
          },
          students: [],
        }

        for (let student of teacher[0].students) {
          await Student.find({ id: student })
            .then(student => {
              teacherObj.students.push(student[0])

              return student
            })
            .catch(e => e)
        }

        return teacherObj
      })
      .catch(e => e)

    return result
  }

  // Find User by ID
  app.get('/User/id/:id', [check('id').isNumeric()], async (req, res) => {
    // Check for parameter errors using express-validator
    const errors = validationResult(req)

    // Return errors if any found
    if (!errors.isEmpty()) {
      res.send(errors)
    } else {
      // Wait for user to be found and send promise back first
      // Catch any errors and send back as response
      const teacher = await FindUser('id', req.params.id).catch(e => {
        res.send(e)
      })

      // Trace result to console
      //console.log(JSON.parse(JSON.stringify(teacher)))

      // Fire promise and respond with result
      res.send(teacher)
    }
  })

  // Find User by email
  // Same setup as above
  app.get('/User/email/:email', [check('email').isEmail()], async (req, res) => {
    const errors = validationResult(req.params.email)

    if (!errors.isEmpty()) {
      res.send(errors)
    } else {
      const teacher = await FindUser('email', req.params.email).catch(e => {
        res.send(e)
      })

      //console.log(JSON.parse(JSON.stringify(teacher)))

      res.send(teacher)
    }
  })
}
