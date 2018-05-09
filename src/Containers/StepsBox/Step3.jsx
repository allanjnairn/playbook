import React from 'react';
import styles from './StepsBox.css'
import Sales from '../../Images/call-centre-ml-fml-238.jpg'
import Support from '../../Images/callcentre-male-442.jpg'
import MainStore from '../../Stores/MainStore.js'
import Trade from '../../Images/tradie-1893.jpg'
import Hospitality from '../../Images/hospitality-cafe-118-cndy.jpg'
import Retail from '../../Images/franchise-accprtnrt-1712-indentikit-cabana.jpg'
import Professional from '../../Images/pro-service-prtnrshp-0999-rgl.jpg'
import Editable from '../../Components/Editable'

import Target from '../../Images/target.png'






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

    console.log(MainStore.state.salesPath)

    return (
      <div className={styles.step3}>

        <div className={styles.startConversation}>
          <h2>Four ways to start the client conversation</h2>
          <div>
            {MainStore.state.salesPath.specialist ? (

                <ul>
                  {MainStore.state.data.specialistConversation['1'].map((f, ind)=>{
                    return <Editable text={f} ind={ind} first='specialistConversation' chosen={'1'} />

                  })}
                </ul>

              ) : (
                <ul>
                  {MainStore.state['callOpening'][MainStore.state.salesPath.mission].map((q, ind)=>{
                    return (
                        <Editable text={q} ind={ind} first='callOpening' chosen={MainStore.state.salesPath.mission} />
                      )
                  })}
                </ul>
              )}
          </div>
        </div>

        <h2>Getting to know your client - “What type of business do you own?”</h2>
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

        {MainStore.state.salesPath.specialist ? (
              <div className={styles.specialistTargetContainer}>
                  <img src={Target} alt=""/>


                <div className={styles.specialistTargetIndustry}>

                  <h3>Target Industry</h3>




                    <Editable text={MainStore.state.data.specialistDiscovery['1'][0]} ind={0} first='specialistDiscovery' chosen={'1'} />


                </div>
              </div>
          ) : ''}
      </div>
    );
  }
}