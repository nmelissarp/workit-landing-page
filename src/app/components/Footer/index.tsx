import Image from 'next/image'
import styles from './Footer.module.sass'

const Footer = () => (
  <div className={styles.footerContainer}>
    <Image
      src={'/images/logo-dark.svg'}
      alt='logo dark'
      width={96}
      height={25}
    />
    <div className={styles.footerContainer__icons}>
      <Image
        src={'/images/icon-facebook.svg'}
        alt='icon facebook'
        width={20}
        height={20}
      />
      <Image
        src={'/images/icon-twitter.svg'}
        alt='twitter facebook'
        width={20}
        height={20}
      />
      <Image
        src={'/images/icon-instagram.svg'}
        alt='icon instagram'
        width={20}
        height={20}
      />
    </div>
  </div>
)

export default Footer