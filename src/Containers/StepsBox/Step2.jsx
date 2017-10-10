import React from 'react';
import styles from './StepsBox.css'
import Sales from '../../Images/call-centre-ml-fml-238.jpg'
import Support from '../../Images/callcentre-male-442.jpg'
import MainStore from '../../Stores/MainStore.js'

import Rocket from '../../Images/startup sml.png'
import ufo from '../../Images/ufo sml.png'
import satellite from '../../Images/satellite sml.png'
import solarSystem from '../../Images/solar-system sml.png'
import asteroid from '../../Images/asteroid sml.png'
import moonRover from '../../Images/moon-rover.png'


export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  chooseOption(e) {
    
   if (e==='powerPay'||e==='mission3'||e==='mmem') {

   } else {
    MainStore.state.step = 3
    MainStore.state.salesPath.mission = e
    MainStore.emit('stepChange')
   }
  }

  render() {


    return (
      <div className={styles.step2}>
        <div className={styles.step2Top}>
          <h2>Select Your Mission Crew</h2>
          <div className={styles.options2}>

            <div onClick={this.chooseOption.bind(this, 'trial')} className={styles.option2}>
              <div className={styles.option2Image}>
                <img src={solarSystem} alt=""/>
              </div>
              <div className={styles.option2Text}>
                <span>Trial</span>
              </div>

            </div>

            <div onClick={this.chooseOption.bind(this, 'upsellWinback')} className={styles.option2}>
              <div className={styles.option2Image}>
                <img src={Rocket} alt=""/>
              </div>
              <div className={styles.option2Text}>
                <span>Upsell Winback</span>
              </div>

            </div>

            <div onClick={this.chooseOption.bind(this, 'inboundLeads')} className={styles.option2}>
              <div className={styles.option2Image}>
                <img src={asteroid} alt=""/>
              </div>
              <div className={styles.option2Text}>
                <span>Inbound Leads</span>
              </div>

            </div>

          </div>
        </div>
        <div className={styles.step2Bottom}>
          <h2>Or Select The Specialized Mission</h2>
          <div className={styles.options2}>

            <div onClick={this.chooseOption.bind(this, 'mmem')} className={styles.option2}>
              <div className={styles.option2Image}>
                <img src={satellite} alt=""/>
              </div>
              <div className={styles.option2Text}>
                <span>Coming Soon</span>
              </div>

            </div>

            <div onClick={this.chooseOption.bind(this, 'powerPay')} className={styles.option2}>
              <div className={styles.option2Image}>
                <img src={ufo} alt=""/>
              </div>
              <div className={styles.option2Text}>
                <span>Coming Soon</span>
              </div>

            </div>

            <div onClick={this.chooseOption.bind(this, 'mission3')} className={styles.option2}>
              <div className={styles.option2Image}>
                <img src={moonRover} alt=""/>
              </div>
              <div className={styles.option2Text}>
                <span>Coming Soon</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}