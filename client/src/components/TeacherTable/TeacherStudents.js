import React from 'react'

export default () => {
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

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>male</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>male</td>
          </tr>
          <tr>
            <td>Lisa</td>
            <td>Lollipop</td>
            <td>female</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
