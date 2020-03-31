import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, Form } from 'redux-form'
import SearchField from './SearchField'
//import validateFields from '../../utils/validateFields'
import { fetchUser } from '../../actions'
import { loadFields } from '../../reducers/userReducer'

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
    const onSearchSubmit = this.props.onSearchSubmit

    return (
      <div>
        <div className='card-panel light-grey'>
          <Form onSubmit={fetchUser()} className='row valign-wrapper'>
            {this.renderFields()}
            <button
              className='btn waves-effect waves-light col s2'
              type='button'
              onClick={onSearchSubmit}
              onSubmit={this.props.handleSubmit(fetchUser())}
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
  console.log('MAPSTATETOPROPS: ', state)
  return {
    formValues: {
      user_id: state.user_id,
      email: state.email,
    },
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

export default connect(mapStateToProps)(
  reduxForm(
    {
      validate,
      form: 'searchForm',
      onSubmit: () => {
        return this.props.onSearchSubmit
      },
    },
    { loadFields },
  )(SearchForm),
)
