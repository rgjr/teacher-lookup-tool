// SearchField contains logic to render a single label and text input
import React from 'react'

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className='col s4 offset-s1'>
      <label>{label}</label>
      <input {...input} />
      { touched && error }
    </div>
  )
}
