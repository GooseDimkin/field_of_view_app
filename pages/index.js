import styles from '../styles/Home.module.css'
import WordsAmount from './RangeComponents/WordsAmount';
import StartRange from './RangeComponents/StartRange';
import LettersInWords from './RangeComponents/lettersInWords';
import RangeIncrease from './RangeComponents/RangeIncrease';
import Speed from './RangeComponents/Speed';

export default function Home() {
  return (
    <div>
      <div className={styles.label}>Тренажер "Поле зрения"</div>
      <div className={styles.content}>
        <WordsAmount/>
        <StartRange/>
        <LettersInWords/>
        <RangeIncrease/>
        <Speed/>
        <button className={styles.start_button}>СТАРТ</button>
      </div>
    </div>
  )
}
