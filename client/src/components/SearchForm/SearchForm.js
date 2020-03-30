import React, { Component } from 'react'
import { reduxForm, Field, Form } from 'redux-form'
import SearchField from './SearchField'
import validateFields from '../../utils/validateFields'
import { fetchUser } from '../../actions'

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
    console.log(this.props.handleSubmit)
    return (
      <div>
        <div className='card-panel light-grey'>
          <Form
            onSubmit={this.props.handleSubmit(this.props.onSearchSubmit)}
            className='row valign-wrapper'
          >
            {this.renderFields()}
            <button className='btn waves-effect waves-light col s2' type='submit'>
              Search
              <i className='material-icons right'>search</i>
            </button>
          </Form>
        </div>
      </div>
    )
  }
}

function validate(values) {
  console.log(`VALUES: ${JSON.stringify(values)}`)
  const errors = {}

  // errors.user_id = validateFields('user_id', values.user_id || '')
  // errors.email = validateFields('email', values.email || '')

  // FIELDS.forEach(({ label, name }) => {
  //   if (!values[name]) {
  //     errors[name] = `You must provide the ${label} value`
  //   }
  // })

  return errors
}

export default reduxForm({
  validate,
  form: 'searchForm',
})(SearchForm)
