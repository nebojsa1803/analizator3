import styles from './Register.module.css'
import { Form } from 'react-router-dom'
import InputRow from '../components/InputRow'

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <Form className='form' method='POST'>
        <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Register Here
        </h4>
        <InputRow
          inputName='firstName'
          inputType='text'
          labelText='First Name'
        />
        <InputRow inputName='lastName' inputType='text' labelText='Last Name' />
        <InputRow inputName='email' inputType='text' labelText='Email' />
        <InputRow
          inputName='password'
          inputType='password'
          labelText='Password'
        />
        <InputRow
          inputName='repeatPassword'
          inputType='password'
          labelText='Repeat Password'
        />
        <button
          type='submit'
          className='btn btn-block'
          style={{ marginTop: '0.5rem' }}
        >
          Submit
        </button>
      </Form>
    </div>
  )
}

export default Register
