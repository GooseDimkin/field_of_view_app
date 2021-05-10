import React from 'react';
import styles from './../../styles/RangeItem.module.css'
import {connect} from 'react-redux';
import {ChangeSpeedAC} from './../../redux/reducers/wordsSettingsReducer';

class Speed extends React.Component {
  increaseValue = () => {
    if(this.props.speed === 100) {
      return;
    }
    return this.props.ChangeSpeedAC(this.props.speed + 1);
  }

  decreaseValue = () => {
    if(this.props.speed === 1) {
      return;
    }
    return this.props.ChangeSpeedAC(this.props.speed - 1);
  }

  render() {
    return (
      <div className={styles.content}>
          <div className={styles.label}>
              <span>Скорость
                  <input className={styles.input_sec} value={this.props.speed}/>
                  сек.
              </span>
          </div>
          <div className={styles.buttons}>
              <button className={styles.button} onClick={this.decreaseValue}>-</button>
              <button className={styles.button} onClick={this.increaseValue}>+</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    speed: state.wordsSettingsData.speed
  }
}

let SpeedContainer = connect(mapStateToProps, {ChangeSpeedAC})(Speed);

export default SpeedContainer;