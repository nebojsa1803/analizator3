import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.navCenter}>
        <span className={styles.logo}>
          <Link to='/'>
            Test<span>Analizator</span>
          </Link>
        </span>
        <div className={styles.navLinks}>
          <NavLink to='about' className={styles.navLink}>
            About
          </NavLink>
          <NavLink to='login' className={styles.navLink}>
            Login
          </NavLink>
          <NavLink to='register' className={styles.navLink}>
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
