import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'

// in roter 6.4 action in Form must return something, if nothing return null
export const action = async ({ request }) => {
  //in data will be all input values
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const { firstName, lastName, email, password, repeatPassword } = data

  // fields must be filled
  if (!firstName || !lastName || !email || !password || !repeatPassword) {
    toast.error('Please provide all values.')
    return null
  }
  // email must be valid
  if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    toast.error('Please provide valid email address.')
    return null
  }
  // passwords must be the same
  if (password !== repeatPassword) {
    toast.error('Repeat password must be the same as password.')
    return null
  }
  // length of password must be more then 4 characters
  if (password.length < 5) {
    toast.error('Password must be at least 5 characters long.')
    return null
  }
  //if everything is ok
  //later this must insert user in database
  toast.success('Hello. You are successfully registred.')
  console.log(data, 'REMOVE LATER')
  return redirect('/')
}
