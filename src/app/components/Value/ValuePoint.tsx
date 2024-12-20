import styles from './ValuePoint.module.sass'


const ValuePoint = ({
  number,
  subtitle,
  description,
}: {
  number: number
  subtitle: string
  description: string
}) => (
  <div className={styles.valuePoint}>
    <div className={styles.number}>
      <p>{number}</p>
    </div>
    <div className={styles.textContainer}>
      <h3 className={styles.textContainer__subtitle}>{subtitle}</h3>
      <p className={styles.textContainer__description}>{description}</p>
    </div>
  </div>
)

export default ValuePoint