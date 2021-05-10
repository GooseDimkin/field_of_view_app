import React from 'react';
import styles from './../../styles/RangeItem.module.css'
import {connect} from 'react-redux';
import {ChangeLettersInWordsAC} from './../../redux/reducers/wordsSettingsReducer';

function LettersInWords(props) { 
  const space_between_numbers = {
    margin: " 0px 17px 0px 0px"
  }

  let numbersItem = props.getNumbers().map(n => <span className={styles.numbers} style={space_between_numbers}>{n}</span>)

  let ref = React.createRef();

  let onValueInput = () => {
    let currentInputValue;
    currentInputValue = (Number(ref.current.value) + 2);
    props.ChangeLettersInWordsAC(currentInputValue);
  }

  return(
    <div className={styles.content}>
      <div className={styles.label}>Сколько букв в словах</div>
      <div className={styles.numbers_section}>{numbersItem}</div>
      <input className={styles.input} type='range' min='1' max='10' ref={ref} onChange={onValueInput} />
    </div>
  );
}

class LettersInWordsC extends React.Component {
  getNumbers = () => {
    let numbers = [];

    for(let i = 3; i <= 12; ++i)
      numbers.push(i);

    return numbers;
  }

  render() {
    return <LettersInWords ChangeLettersInWordsAC={this.props.ChangeLettersInWordsAC} getNumbers={this.getNumbers}/>
  }
}

let LettersInWordsContainer = connect(null, {ChangeLettersInWordsAC})(LettersInWordsC);

export default LettersInWordsContainer;