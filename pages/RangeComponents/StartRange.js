import React from 'react';
import styles from './../../styles/RangeItem.module.css'
import {connect} from 'react-redux';
import {ChangeStartRangeAC} from './../../redux/reducers/wordsSettingsReducer';

function StartRange(props) {
  const space_between_numbers = {
    margin: " 0px 17px 0px 0px"
  }

  let numbersItem = props.getNumbers().map(n => <span className={styles.numbers} style={space_between_numbers}>{n}</span>)

  let ref = React.createRef();

  let onValueInput = () => {
    let currentInputValue = 200;
    for(let i = 0; i < ref.current.value; ++i) {
      currentInputValue += 50;
    }

    props.ChangeStartRangeAC(currentInputValue);
  }

  return(
    <div className={styles.content}>
      <div className={styles.label}>Стартовое расстояние</div>
      <div className={styles.numbers_section}>{numbersItem}</div>
      <input className={styles.input} type='range' min='1' max='8' ref={ref} onChange={onValueInput} />
    </div>
  );
}

class StartRangeC extends React.Component {
  getNumbers = () => {
    let numbers = [];

    for(let i = 5; i <= 40; i+=5)
      numbers.push(i);

    return numbers;
  }

  render() {
    return <StartRange ChangeStartRangeAC={this.props.ChangeStartRangeAC} getNumbers={this.getNumbers} />
  }
}

let StartRangeContainer = connect(null, {ChangeStartRangeAC})(StartRangeC);

export default StartRangeContainer;