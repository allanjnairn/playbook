import React from 'react';
import styles from './StepsBox.css'
import Sales from '../../Images/call-centre-ml-fml-238.jpg'
import Support from '../../Images/callcentre-male-442.jpg'
import MainStore from '../../Stores/MainStore.js'


export default class index extends React.Component {
  constructor(props) {
    super(props);
  }


  chooseOption() {
    MainStore.state.step = 2
    MainStore.emit('stepChange')
  }

  render() {


    return (
      <div className={styles.step1}>

        <h2>Select Your Mission Team</h2>

        <div className={styles.options}>
          <div onClick={this.chooseOption.bind(this)} className={styles.option}>
            <div className={styles.optionImage}>
              <img src={Sales} alt=""/>
            </div>
            <div className={styles.optionText}>
              <span>SME Sales</span>
            </div>
          </div>

          <div onClick={this.chooseOption.bind(this)} className={styles.option}>
            <div className={styles.optionImage}>
              <img src={Support} alt=""/>
            </div>
            <div className={styles.optionText}>
              <span>SME Support</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
