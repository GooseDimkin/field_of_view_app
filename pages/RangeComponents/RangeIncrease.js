import React from 'react';
import { render } from 'react-dom';
import styles from './../../styles/RangeItem.module.css'
import {connect} from 'react-redux';
import {ChangeRangeIncreaseAC} from './../../redux/reducers/wordsSettingsReducer';

function RangeIncrease(props) {
  const space_between_numbers = {
    margin: " 0px 17px 0px 0px"
  }

  let numbersItem = props.getNumbers().map(n => <span className={styles.numbers} style={space_between_numbers}>{n}</span>)

  let ref = React.createRef();

  let onValueInput = () => {
    let currentInputValue = 0;
    for(let i = 0; i < ref.current.value; ++i) {
      currentInputValue += 5;
    }

    props.ChangeRangeIncreaseAC(currentInputValue);
  }
  
  return(
    <div className={styles.content}>
      <div className={styles.label}>Увеличение расстояния</div>
      <div className={styles.numbers_section}>{numbersItem}</div>
      <input className={styles.input} type='range' min='1' max='8' ref={ref} onChange={onValueInput} />
    </div>
  );
}

class RangeIncreaseC extends React.Component {
  getNumbers = () => {
    let numbers = [];

    for(let i = 5; i <= 40; i+=5)
      numbers.push(i);

    return numbers;
  }

  render() {
    return <RangeIncrease ChangeRangeIncreaseAC={this.props.ChangeRangeIncreaseAC} getNumbers={this.getNumbers}/>
  }
}

let RangeIncreaseContainer = connect(null, {ChangeRangeIncreaseAC})(RangeIncreaseC);

export default RangeIncreaseContainer;