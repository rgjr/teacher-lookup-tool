import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, submit, Field, Form } from 'redux-form'
import SearchField from './SearchField'
//import validateFields from '../../utils/validateFields'
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
      return (
        <Field
          key={name}
          component={SearchField}
          type='text'
          label={label}
          name={name}
          onBlur={() => {
            this.props.reset()
            this.props.untouch(label)
          }}
        />
      )
    })
  }

  render() {
    const { formValues } = this.props
    const onSearchSubmit = this.props.onSearchSubmit
    console.log('FORM_VALUES: ', formValues)

    return (
      <div>
        <div className='card-panel light-grey'>
          <Form onSubmit={fetchUser} className='row valign-wrapper'>
            {this.renderFields()}
            <button
              className='btn waves-effect waves-light col s2'
              type='button'
              onClick={() => {
                this.props.reset()
                onSearchSubmit()
                fetchUser(
                  'email', formValues.email
                )
              }}
              // onSubmit={this.props.handleSubmit(() => {
              //   const result = fetchUser(this.state.values.user_id)

              //   console.log('RESULT: ', result)

              //   return result
              // })}
            >
              Search
              <i className='material-icons right'>search</i>
            </button>
          </Form>
        </div>
      </div>
    )
  }
}

/**
 * mapStateToProps
 * Reach into redux store and pull out state object
 *
 * @param {*} state
 * @returns
 */
function mapStateToProps(state) {
  console.log('STATE: ', state.form.searchForm)

  return {
    formValues: state.form.searchForm.values,
  }
}

function mapDispatchToProps(dispatch) {
  console.log('DISPATCH: ', dispatch)
  return {
    onSubmit: values => dispatch(fetchUser()),
  }
}

function validate(values) {
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
  initialValues: {
    fields: {
      user_id: 'user_id',
      email: 'email',
    },
  },
  onSubmit: () => {
    return this.props.fetchUser
  },
})(connect(mapStateToProps, mapDispatchToProps)(SearchForm))
