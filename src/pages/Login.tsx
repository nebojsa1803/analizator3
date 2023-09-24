import styles from './Login.module.css'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'
import InputRow from './../components/InputRow'

const Login = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className={styles.wrapper}>
      <Form className='form' method='POST'>
        <h4 className={styles.heading}>Login</h4>

        <InputRow inputName='email' inputType='text' labelText='Email' />
        <InputRow
          inputName='password'
          inputType='password'
          labelText='Password'
        />

        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </div>
  )
}

export default Login
