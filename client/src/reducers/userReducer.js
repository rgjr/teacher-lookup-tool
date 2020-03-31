import { FETCH_USER, USER_ID, EMAIL } from '../actions/types'

export const loadFields = data => ({
  USER_ID,
  EMAIL
})

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false
    default:
      return state
  }
}
