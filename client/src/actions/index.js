import axios from 'axios'
import { FETCH_USER } from './types'

export const fetchUser = (type, id) => async dispatch => {
  console.log('TYPE: ', type)
  console.log('ID: ', id)
  const res = await axios.get(`http://127.0.0.1:8000/User/${type}/${id}`)
  console.log(res.data)
  dispatch({ type: FETCH_USER, payload: res.data })
}
