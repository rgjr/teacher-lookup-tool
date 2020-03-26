export default (field, data) => {
  let error = ''
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  switch (field) {
    case 'user_id':
      console.log(field)
      console.log(data)
      error = data => (data && isNaN(Number(data)) ? 'User ID must be a number' : undefined)
      break
    case 'email':
      console.log(field)
      console.log(data)

      error = data => {
        return data && !emailRegex.test(data) ? 'Invalid email address' : undefined
      }
      break
    default:
      break
  }

  console.log(`ERROR: ${error(data)}`)

  return error(data)
}
