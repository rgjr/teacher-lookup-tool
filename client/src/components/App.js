import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Header from './Header'
import SearchForm from './SearchForm/SearchForm'
import TeacherTable from './TeacherTable/TeacherTable'

class App extends Component {
  state = { showTable: false }

  renderContent() {
    if (this.state.showTable) {
      return (
        <div>
          <SearchForm />
          <TeacherTable />
        </div>
      )
    }

    return <SearchForm onSearchSubmit={() => this.setState({ showTable: true })} />
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className='grey lighten-5'>
        <div>
          <Header />
        </div>
        <div className='container'>{this.renderContent()}</div>
      </div>
    )
  }
}

export default connect(null, actions)(App)
