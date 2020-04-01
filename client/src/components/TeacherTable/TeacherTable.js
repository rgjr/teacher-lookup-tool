import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/'
import TeacherInfo from './TeacherInfo'
import TeacherStudents from './TeacherStudents'

const rowStyle = {
  marginBottom: '0',
  width: '100%',
}

class TeacherTable extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className='card-panel horizontal valign-wrapper'>
        <div className='row' style={rowStyle}>
          <div className='col s4 card-content'>
            <TeacherInfo data={this.props}/>
          </div>
          <div className='col s8'>
            <TeacherStudents data={this.props}/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('TEACHER_STATE: ', state)
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { fetchUser })(TeacherTable)
