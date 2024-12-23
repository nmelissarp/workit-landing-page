import Image from 'next/image'
import FacebookIcon from '../../../../public/images/icon-facebook.svg'
import TwitterIcon from '../../../../public/images/icon-twitter.svg'
import InstagramIcon from '../../../../public/images/icon-instagram.svg'

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
      <FacebookIcon />
      <TwitterIcon />
      <InstagramIcon />
    </div>
  </div>
)

export default Footer