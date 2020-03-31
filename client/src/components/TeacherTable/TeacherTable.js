import React, { Component } from 'react'
import TeacherInfo from './TeacherInfo'
import TeacherStudents from './TeacherStudents'

const rowStyle = {
  marginBottom: '0',
  width: '100%',
}

class TeacherTable extends Component {
  render() {
    return (
      <div className='card-panel horizontal valign-wrapper'>
        <div className='row' style={rowStyle}>
          <div className='col s4 card-content'>
            <TeacherInfo />
          </div>
          <div className='col s8'>
            <TeacherStudents />
          </div>
        </div>
      </div>
    )
  }
}

export default TeacherTable
