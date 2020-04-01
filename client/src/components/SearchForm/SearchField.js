// SearchField contains logic to render a single label and text input
import React from 'react'

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className='col s4 offset-s1'>
      <div>
        <label>{label}</label>
        <input {...input} style={{ marginBottom: '5px' }} />
        {touched}
      </div>
      <div className='red-text' style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  )
}
