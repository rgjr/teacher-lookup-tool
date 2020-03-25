import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
// import SearchByID from './SearchByID'
// import SearchByEmail from './SearchByEmail'

class SearchForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field type="text" name="formTitle" component="input" />
          {/* <Field type='text' name='formTitle' component={SearchByID} /> */}
          {/* <Field type='text' name='formTitle' component={SearchByEmail} /> */}
          <button type="submit">
            Search
          </button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'searchForm',
})(SearchForm)
