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


  chooseOption(e) {
    MainStore.state.step = 4
    MainStore.state.salesPath.industry = e
    MainStore.emit('stepChange')
  }

  render() {


    return (
      <div className={styles.step3}>
        <h2>What Does Your Client Do?</h2>
        <div className={styles.options3}>
          <div onClick={this.chooseOption.bind(this, 'trade')} className={styles.option3}>
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
                <p>Plumber, Bricklayer, Electrician, Landscaper, Renderer, Motor Mechanic, Carpenter, Baker</p>
              </div>
            </div>
          </div>

          <div onClick={this.chooseOption.bind(this, 'hospitality')} className={styles.option3}>
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
                <p>Catering, Motels, Hotels, Hostels, Serviced Appartments, Caravan Parks, Accommodation, B&B, Resorts, Cafés, Restaurants</p>
              </div>
            </div>
          </div>

          <div onClick={this.chooseOption.bind(this, 'retail')} className={styles.option3}>
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
                <p>Speciality Stores, Department Stores, Supermarkets, Conveniance Stores, Online Stores, Warehouse Sellers, Food Outlets, Goods Suppliers, Parts Manufacturers</p>
              </div>
            </div>
          </div>

          <div onClick={this.chooseOption.bind(this, 'professionalServices')} className={styles.option3}>
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
                <p>Accountant & Tax Services, Medical Practitioners, Marketing Services, Education and Training, Cleaning Services, Fitness Trainers, IT Services, Legal Services, Security Services, Real-Estate Agents, Entertainers, Couriers, Storage Houses, Car Rentals/Hire</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}