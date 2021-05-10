import styles from './../../styles/RangeItem.module.css'

export default function Speed(props) {
  return (
    <div className={styles.content}>
        <div className={styles.label}>
            <span>Скорость
                <input className={styles.input_sec} value={1}/>
                сек.
            </span>
        </div>
        <div className={styles.buttons}>
            <button className={styles.button}>-</button>
            <button className={styles.button}>+</button>
        </div>
    </div>
  )
}
