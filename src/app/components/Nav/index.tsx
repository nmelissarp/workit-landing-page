import Image from 'next/image'
import styles from './Nav.module.sass'

const Nav = () => {
  return (
    <nav className={styles.NavContainer}>
      <Image 
        src={'/images/logo-light.svg'}
        alt='logo light'
        width={96}
        height={25}
      />
      <button className={styles.NavContainer__button}>Apply for access</button>
    </nav>
  )
}


export default Nav

