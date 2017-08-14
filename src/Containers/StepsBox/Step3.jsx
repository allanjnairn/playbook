import React from 'react';
import styles from './StepsBox.css'
import Sales from '../../Images/call-centre-ml-fml-238.jpg'
import Support from '../../Images/callcentre-male-442.jpg'
import MainStore from '../../Stores/MainStore.js'
import Trade from '../../Images/tradie-1893.jpg'
import Hospitality from '../../Images/hospitality-cafe-118-cndy.jpg'
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
            <div className='hoverBox'>
              <div className='hoverBoxContent'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ipsam delectus totam commodi numquam dolore, odit, repellendus sed assumenda fugit aperiam rerum, reprehenderit accusantium.</p>
              </div>
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
            <div className='hoverBox'>
              <div className='hoverBoxContent'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aspernatur ut assumenda dignissimos libero, in. Obcaecati iure aspernatur soluta cum odio quibusdam doloremque! Id?</p>
              </div>
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
            <div className='hoverBox'>
              <div className='hoverBoxContent'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ad quibusdam nulla temporibus assumenda, odit alias sint debitis officiis! Eos, vel iste consequatur rerum!</p>
              </div>
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
            <div className='hoverBox'>
              <div className='hoverBoxContent'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum repellendus est, autem incidunt, consectetur alias officia voluptatem quasi culpa nobis eligendi eaque corporis, sapiente.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}