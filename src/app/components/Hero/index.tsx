import Image from 'next/image'
import sytles from './Hero.module.sass'

const Hero = () => {
  return (
    <section className={sytles.HeroWrapper}>
      <div className={sytles.HeroContainer}>
        <h1 className={sytles.HeroContainer__title}>
          Data <span>tailored</span> to your needs.
        </h1>
        <button className={sytles.HeroContainer__button}>
          Learn more
        </button>
      </div>
      <div className={sytles.HeroImageWrapper}>
        <Image 
          src={'/images/image-hero.webp'}
          alt='image hero'
          width={320}
          height={184}
        />
      </div>
    </section>
  )
}

export default Hero