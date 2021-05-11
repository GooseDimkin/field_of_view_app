import styles from '../styles/Home.module.css'
import WordsAmountContainer from './RangeComponents/WordsAmount';
import StartRangeContainer from './RangeComponents/StartRange';
import LettersInWordsContainer from './RangeComponents/lettersInWords';
import RangeIncreaseContainer from './RangeComponents/RangeIncrease';
import SpeedContainer from './RangeComponents/Speed';
import store from './../redux/store';
import {Provider} from 'react-redux';
import React from 'react';
import {withRouter} from 'next/router'
import Test_page from './Test_page';
import Logo from './Logo';

class Home extends React.Component {
  onStart = () => {
    <Test_page/>
    this.props.router.push('/Test_page')
  }

  render() {
    return(
      <Provider store={store}>
        <Logo/>
        <div className={styles.label}>Тренажер "Поле зрения"</div>
          <div className={styles.content}>
          <WordsAmountContainer/>
          <StartRangeContainer/>
          <LettersInWordsContainer/>
          <RangeIncreaseContainer/>
          <SpeedContainer/>
          <button className={styles.start_button} onClick={this.onStart}>СТАРТ</button>
        </div>
      </Provider>
    );
  }
}

export default withRouter(Home);