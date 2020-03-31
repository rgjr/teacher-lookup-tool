import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Header from './Header'
import SearchForm from './SearchForm/SearchForm'
import TeacherTable from './TeacherTable/TeacherTable'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTable: false,
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  onSearchSubmit(){
    this.setState({ showTable: true })
  }

  renderContent() {
    if (this.state.showTable) {
      return (
        <div>
          <SearchForm />
          <TeacherTable />
        </div>
      )
    }

    return <SearchForm onSearchSubmit={this.onSearchSubmit} />
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
