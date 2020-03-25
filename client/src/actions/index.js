import axios from 'axios'
import { FETCH_USER } from './types'

export const fetchUser = (id = 1) => async dispatch => {
  const res = await axios.get(`http://127.0.0.1:8000/User/id/${id}`)
  dispatch({ type: FETCH_USER, payload: res })
}
