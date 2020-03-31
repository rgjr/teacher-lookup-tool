import axios from 'axios'
import { FETCH_USER, USER_ID, EMAIL } from './types'

export const fetchUser = (id = 1) => async dispatch => {
  const res = await axios.get(`http://127.0.0.1:8000/User/id/${id}`)
  console.log(res)
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const user_id = USER_ID
export const email = EMAIL