import React from 'react';
import styles from './StepsBox.css'
import Sales from '../../Images/call-centre-ml-fml-238.jpg'
import Support from '../../Images/callcentre-male-442.jpg'
import MainStore from '../../Stores/MainStore.js'

import Rocket from '../../Images/startup.svg'
import ufo from '../../Images/ufo.svg'
import satellite from '../../Images/satellite.svg'
import solarSystem from '../../Images/solar-system.svg'
import asteroid from '../../Images/asteroid.svg'
import moonRover from '../../Images/moon-rover.svg'


export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  chooseOption() {
    MainStore.state.step = 3
    MainStore.emit('stepChange')
  }

  render() {


    return (
      <div className={styles.step2}>
        <div className={styles.step2Top}>
          <h2>Select Your Mission Crew</h2>
          <div className={styles.options2}>

            <div onClick={this.chooseOption.bind(this)} className={styles.option2}>
              <div className={styles.option2Image}>
                <img src={solarSystem} alt=""/>
              </div>
              <div className={styles.option2Text}>
                <span>Trial</span>
              </div>

            </div>

            <div onClick={this.chooseOption.bind(this)} className={styles.option2}>
              <div className={styles.option2Image}>
                <img src={Rocket} alt=""/>
              </div>
              <div className={styles.option2Text}>
                <span>Upsell Winback</span>
              </div>

            </div>

            <div onClick={this.chooseOption.bind(this)} className={styles.option2}>
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

            <div onClick={this.chooseOption.bind(this)} className={styles.option2}>
              <div className={styles.option2Image}>
                <img src={satellite} alt=""/>
              </div>
              <div className={styles.option2Text}>
                <span>MMEM</span>
              </div>

            </div>

            <div onClick={this.chooseOption.bind(this)} className={styles.option2}>
              <div className={styles.option2Image}>
                <img src={ufo} alt=""/>
              </div>
              <div className={styles.option2Text}>
                <span>Power Pay</span>
              </div>

            </div>

            <div onClick={this.chooseOption.bind(this)} className={styles.option2}>
              <div className={styles.option2Image}>
                <img src={moonRover} alt=""/>
              </div>
              <div className={styles.option2Text}>
                <span>Mission 3</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}