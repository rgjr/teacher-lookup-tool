import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Header from './Header'
import SearchForm from './SearchForm/SearchForm'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className='container'>
          <SearchForm />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(App)
