import styles from '../styles/Home.module.css'
import WordsAmountContainer from './RangeComponents/WordsAmount';
import StartRangeContainer from './RangeComponents/StartRange';
import LettersInWordsContainer from './RangeComponents/lettersInWords';
import RangeIncreaseContainer from './RangeComponents/RangeIncrease';
import SpeedContainer from './RangeComponents/Speed';
import store from './../redux/store';
import {Provider} from 'react-redux';

export default function Home() {
  return (
    <Provider store={store}>
      <div className={styles.label}>Тренажер "Поле зрения"</div>
      <div className={styles.content}>
        <WordsAmountContainer/>
        <StartRangeContainer/>
        <LettersInWordsContainer/>
        <RangeIncreaseContainer/>
        <SpeedContainer/>
        <button className={styles.start_button}>СТАРТ</button>
      </div>
    </Provider>
  )
}
