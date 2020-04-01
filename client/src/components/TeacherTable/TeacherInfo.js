import React from 'react'

export default ({ data }) => {
  const teacher = data.user.teacher
  console.log('TEACHER_DATA', teacher)
  return (
    <div style={{ border: 'none' }}>
      <ul className='collection with-header'>
        <li className='collection-header center' key='full-name'>
          <h4>{`${teacher.firstName} ${teacher.lastName}`}</h4>
        </li>
        <li className='collection-item' key='email'>
          Email
          <span className='secondary-content'>{teacher.email}</span>
        </li>
        <li className='collection-item' key='username'>
          Username
          <span className='secondary-content'>{teacher.username}</span>
        </li>
        <li className='collection-item' key='school-district'>
          School District
          <span className='secondary-content'>{teacher.schoolDistrict}</span>
        </li>
        <li className='collection-item' key='city'>
          City
          <span className='secondary-content'>{teacher.city}</span>
        </li>
        <li className='collection-item' key='state'>
          State
          <span className='secondary-content'>{teacher.state}</span>
        </li>
        <li className='collection-item' key='country'>
          Country
          <span className='secondary-content'>{teacher.country}</span>
        </li>
        <li className='collection-item' key='account-type'>
          Account Type
          <span className='secondary-content'>{teacher.accountType}</span>
        </li>
        <li className='collection-item' key='is-admin'>
          User Role
          <span className='secondary-content'>{teacher.isAdmin ? 'Admin' : 'Home'}</span>
        </li>
        <li className='collection-item'>
          Teacher ID
          <span className='secondary-content'>{teacher.teacherId}</span>
        </li>
        <li className='collection-item'>
          User ID
          <span className='secondary-content'>{teacher.userId}</span>
        </li>
      </ul>
    </div>
  )
}
