import React from 'react';
import styles from './StepsBox.css'
import Sales from '../../Images/call-centre-ml-fml-238.jpg'
import Support from '../../Images/callcentre-male-442.jpg'
import MainStore from '../../Stores/MainStore.js'
import Trade from '../../Images/tradie-1893.jpg'
import Hospitality from '../../Images/hospitality-food-stall-1724-rgl.jpg'
import Retail from '../../Images/franchise-accprtnrt-1712-indentikit-cabana.jpg'
import Professional from '../../Images/pro-service-prtnrshp-0999-rgl.jpg'




export default class index extends React.Component {
  constructor(props) {
    super(props);
  }


  chooseOption() {
    MainStore.state.step = 4
    MainStore.emit('stepChange')
  }

  render() {


    return (
      <div className={styles.step3}>
        <h2>What Does Your Client Do?</h2>
        <div className={styles.options3}>
          <div onClick={this.chooseOption.bind(this)} className={styles.option3}>
            <div className={styles.option3Image}>
              <div className='cover'>
              </div>
              <img src={Trade} alt=""/>
            </div>
            <div className={styles.option3Text}>
              <span>Trade</span>
            </div>
          </div>

          <div onClick={this.chooseOption.bind(this)} className={styles.option3}>
            <div className={styles.option3Image}>
              <div className='cover'>
              </div>
              <img src={Hospitality} alt=""/>
            </div>
            <div className={styles.option3Text}>
              <span>Hospitality</span>
            </div>
          </div>

          <div onClick={this.chooseOption.bind(this)} className={styles.option3}>
            <div className={styles.option3Image}>
              <div className='cover'>
              </div>
              <img src={Retail} alt=""/>
            </div>
            <div className={styles.option3Text}>
              <span>Retail</span>
            </div>
          </div>

          <div onClick={this.chooseOption.bind(this)} className={styles.option3}>
            <div className={styles.option3Image}>
              <div className='cover'>
              </div>
              <img src={Professional} alt=""/>
            </div>
            <div className={styles.option3Text}>
              <span>Professional Services</span>
            </div>
          </div>

        </div>
      </div>
    );
  }
}