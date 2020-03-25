import React, { Component } from 'react'

class SearchByID extends Component {
  render() {
    return (
      <div className='input-field col s6'>
        <input id='id' type='text' component="input" className='validate' />
        <div>
          <label htmlFor='id'>User ID</label>
        </div>
      </div>
    )
  }
}

export default SearchByID
