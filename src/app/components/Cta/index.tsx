import Image from 'next/image'
import styles from './Cta.module.sass'

const Cta = () => (
  <div className={styles.ctaContainer}>
    <div className={styles.ctaContainer__headshot}>
      <Image 
        src={'/images/image-founder.webp'}
        alt='image founder'
        width={280}
        height={280}
      />
    </div>
    <div className={styles.ctaContainer__content}>
      <h2>Be the first to test</h2>
      <p>Hi, I&aposm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
      <button>Apply for access</button>
    </div>
    <Image 
      src={'/images/bg-pattern-3.svg'}
      alt='bg pattern 3'
      width={221}
      height={212}
    />
  </div>
)

export default Cta