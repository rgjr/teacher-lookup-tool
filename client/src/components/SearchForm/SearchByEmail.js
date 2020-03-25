import React, { Component } from 'react'

class SearchByEmail extends Component {
  render() {
    return (
      <div className='input-field col s6'>
        <input id='email' type='text' className='validate' />
        <div>
          <label htmlFor='email'>Email</label>
        </div>
      </div>
    )
  }
}

export default SearchByEmail