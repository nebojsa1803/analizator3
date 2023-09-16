import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import styles from './Error.module.css'
import img from './../assets/notFound.svg'
const Error = () => {
  const error = useRouteError()
  console.log(error)

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div className={styles.wrapper}>
        <div>
          <img src={img} alt='page not found' />
          <h3>Грешка</h3>
          <p>Не постоји страна коју тражите.</p>
          <Link to='/'>Почетна страна</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <h3>Somthing is wrong, but not 404</h3>
    </div>
  )
}

export default Error
