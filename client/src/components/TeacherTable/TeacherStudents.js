import React from 'react'

function studentList(students) {
  return students.map(({ _id, id, first_name, last_name, gender }, index) => {
    return (
      <tr key={`${_id}`}>
        <td key={`id_${id}`}>{id}</td>
        <td key={`name_${first_name}`}>{`${first_name} ${last_name}`}</td>
        <td key={`gender_${last_name}_${gender}`}>{gender}</td>
      </tr>
    )
  })
}

export default ({ data }) => {
  const students = data.user.students

  return (
    <div>
      <table className='striped'>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Gender</th>
          </tr>
        </thead>

        <tbody>{studentList(students)}</tbody>
      </table>
    </div>
  )
}
