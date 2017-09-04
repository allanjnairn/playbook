import React from 'react';
import styles from './StepsBox.css'
import Sales from '../../Images/call-centre-ml-fml-238.jpg'
import Support from '../../Images/callcentre-male-442.jpg'
import MainStore from '../../Stores/MainStore.js'


export default class index extends React.Component {
  constructor(props) {
    super(props);
  }


  chooseOption(e) {
    MainStore.state.step = 2
    MainStore.state.salesPath.missionTeam = e
    MainStore.emit('stepChange')
  }

  render() {


    return (
      <div className={styles.step1}>

        <h2>Select Your Mission Team</h2>

        <div className={styles.options}>
          <div className={styles.optionsBG}>
            <div onClick={this.chooseOption.bind(this, 'sales')} className={styles.option}>
              <div className={styles.optionImage}>
                <div className='cover'>
                </div>
                <img src={Sales} alt=""/>
              </div>
              <div className={styles.optionText}>
                <span>SME Sales</span>
              </div>
            </div>
          </div>

          <div className={styles.optionsBG}>
            <div onClick={this.chooseOption.bind(this, 'support')} className={styles.option}>
              <div className={styles.optionImage}>
                <div className='cover'>
                </div>
                <img src={Support} alt=""/>
              </div>
              <div className={styles.optionText+' '+styles.optionText2}>
                <span>SME Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
