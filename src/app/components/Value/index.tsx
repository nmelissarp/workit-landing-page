import ValuePoint from './ValuePoint'
import styles from './Value.module.sass'

const pointsData = [
  {
    number: 1,
    subtitle: 'Actionable insights',
    description: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.'
  },
  {
    number: 2,
    subtitle: 'Data-driven decisions',
    description: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.'
  },
  {
    number: 3,
    subtitle: 'Always affordable',
    description: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.'
  }
]

const Value = () => (
  <div className={styles.valueContainer}>
    {pointsData.map((point) => (
      <ValuePoint
        key={point.number}
        number={point.number}
        subtitle={point.subtitle}
        description={point.description}
      />
    ))}
  </div>
)

export default Value