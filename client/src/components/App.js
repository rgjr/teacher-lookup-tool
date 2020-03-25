import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Header from './Header'

const Dashboard = () => <h2>Dashboard</h2>
// const SearchNew = () => <h2>SearchNew</h2>
// const Landing = () => <h2>Landing</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    )
  }
}

export default connect(null, actions)(App)
