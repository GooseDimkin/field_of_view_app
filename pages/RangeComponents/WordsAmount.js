import React from 'react';
import styles from './../../styles/RangeItem.module.css'
import {connect} from 'react-redux';
import {ChangeWordsAmountAC} from './../../redux/reducers/wordsSettingsReducer';

function WordsAmount(props) {
  const space_between_numbers = {
    margin: " 0px 17px 0px 0px"
  }

  let numbersItem = props.getNumbers().map(n => <span className={styles.numbers} style={space_between_numbers}>{n}</span>)

  let ref = React.createRef();
  let currentInputValue;

  let onValueInput = () => {
    currentInputValue = ref.current.value;
    props.ChangeWordsAmountAC(currentInputValue);
  }

  return(
    <div className={styles.content}>
      <div className={styles.label}>Сколько слов</div>
      <div className={styles.numbers_section}>{numbersItem}</div>
      <input className={styles.input} type='range' min='1' max='10' ref={ref} onChange={onValueInput} />
    </div>
  );
}

class WordsAmountC extends React.Component {
  getNumbers = () => {
    let numbers = [];

    for(let i = 1; i <= 10; ++i)
      numbers.push(i);

    return numbers;
  }

  render() {
    return <WordsAmount ChangeWordsAmountAC={this.props.ChangeWordsAmountAC} getNumbers={this.getNumbers}/>
  }
}

let WordsAmountContainer = connect(null, {ChangeWordsAmountAC})(WordsAmountC);

export default WordsAmountContainer;