import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SearchField from './SearchField'
import validateFields from '../../utils/validateFields'

const FIELDS = [
  {
    label: 'User ID',
    name: 'user_id',
  },
  {
    label: 'Email',
    name: 'email',
  },
]
class SearchForm extends Component {
  /**
   * SearchForm shows a form for user input
   */

  renderFields() {
    return FIELDS.map(({ label, name }) => {
      return <Field key={name} component={SearchField} type='text' label={label} name={name} />
    })
  }

  render() {
    return (
      <div className='card grey lighten-5'>
        <div className='card-content'>
          <form
            className='row valign-wrapper'
            onSubmit={this.props.handleSubmit(values => console.log(values))}
          >
            {this.renderFields()}
            <button className='btn waves-effect waves-light col s2' type='submit'>
              Search
              <i className='material-icons right'>search</i>
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  errors.user_id = validateFields('user_id', values.user_id || '')
  errors.email = validateFields('email', values.email || '')

  return errors
}

export default reduxForm({
  validate,
  form: 'searchForm',
})(SearchForm)
