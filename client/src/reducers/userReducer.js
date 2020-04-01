import { FETCH_USER } from '../actions/types'

export default function(state = {}, action) {
  console.log('ACTION TYPE: ', action.type)
  switch (action.type) {
    case FETCH_USER:
      return action.payload
    default:
      return state
  }
}
