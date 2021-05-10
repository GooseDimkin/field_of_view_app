import styles from './../../styles/RangeItem.module.css'

export default function LettersInWords(props) {
  let getNumbers = () => {
    let numbers = [];

    for(let i = 3; i <= 12; ++i)
      numbers.push(i);

    return numbers;
  }

  const space_between_numbers = {
    margin: " 0px 17px 0px 0px"
  }

  let numbersItem = getNumbers().map(n => <span className={styles.numbers} style={space_between_numbers}>{n}</span>)

  return (
    <div className={styles.content}>
        <div className={styles.label}>Сколько букв в словах</div>
        <div className={styles.numbers_section}>{numbersItem}</div>
        <input className={styles.input} type='range' min='1' max='10' />
    </div>
  )
}
