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
      <div className={styles.step6}>
      	<h2>Product: Essentials</h2>
      	<div className={styles.outcomes}>

      		{MainStore.state.choices.map((e)=>{
      		      			return (
      		      				<div className={styles.outcome}>
      		      					<div className={styles.outcomeHeader}>
      		      						<h2>{MainStore.state.discovery[e]}</h2>
      		      					</div>
      		
      		      					<div className={styles.outcomePoints}>
      		      						<div className={styles.outcomePoint}>
      		      							Feature A - More time and less stress when doing task
      		      						</div>
      		      						<div className={styles.outcomePoint}>
      		      							Feature D - Less resource requirements when doing
      		      						</div>
      		      						<div className={styles.outcomePoint}>
      		      							Feature K - See what you are doing and make better decisions
      		      						</div>
      		      						<div className={styles.outcomePoint}>
      		      							Feature C - Allow you to do other stuff
      		      						</div>
      		      					</div>
      		      				</div>
      		      				)
      		      		})}
      	</div>


        <div className={styles.plansContainer}>
          <div className={styles.plan}>
            <div className='planTop'>
              <h2>STARTER</h2>
              <div className={styles.price}>
                <span>$</span>
                <span>25</span>
                <span>p/m</span>
              </div>
              <p>Perfect for just starting up</p>
            </div>
            <div className='planBottom'>
              <div className='points'>
                <div className='point'>
                  Great for people new to accounting
                </div>
                <div className='point'>
                  Keep on top of GST & BAS
                </div>
                <div className='point'>
                  Works on both MAC & PC
                </div>
                <div className='point'>
                  Always up-to-date and securely backed up online
                </div>
                <div className='point'>
                  Payroll for one
                </div>
                <div className='point'>
                  MYOB BankFeeds*(25 transactions p/m)
                </div>
                <div className='point'>
                  Create Five invoices p/m
                </div>
              </div>

              <div className={styles.buyingOptions}>
                <div className={styles.BuyNow}>
                  <span>Buy Now</span>
                </div>
                <div className={styles.Trial}>
                  <span>Try free for 30 days</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.plan +" "+styles.planActive}>
            <div className='planTop'>
              <h2>PAYROLL FOR ONE</h2>
              <div className={styles.price}>
                <span>$</span>
                <span>35</span>
                <span>p/m</span>
              </div>
              <p>Great for small businesses and sole traders</p>
            </div>
            <div className='planBottom'>
              <div className='points'>
                <div className='point'>
                  Great for people new to accounting
                </div>
                <div className='point'>
                  Keep on top of GST & BAS
                </div>
                <div className='point'>
                  Works on both MAC & PC
                </div>
                <div className='point'>
                  Always up-to-date and securely backed up online
                </div>
                <div className='point'>
                  Payroll for one
                </div>
                <div className='point'>
                  MYOB BankFeeds
                </div>
                <div className='point'>
                  Unlimited invoices
                </div>
              </div>

              <div className={styles.buyingOptions}>
                <div className={styles.BuyNow}>
                  <span>Buy Now</span>
                </div>
                <div className={styles.Trial}>
                  <span>Try free for 30 days</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.plan}>
            <div className='planTop'>
              <h2>UNLIMITED PAYROLL</h2>
              <div className={styles.price}>
                <span>$</span>
                <span>45</span>
                <span>p/m</span>
              </div>
              <p>For those taking care of business and payroll</p>
            </div>
            <div className='planBottom'>
              <div className='points'>
                <div className='point'>
                  Great for people new to accounting
                </div>
                <div className='point'>
                  Keep on top of GST & BAS
                </div>
                <div className='point'>
                  Works on both MAC & PC
                </div>
                <div className='point'>
                  Always up-to-date and securely backed up online
                </div>
                <div className='point'>
                  Unlimited Payroll
                </div>
                <div className='point'>
                  MYOB BankFeeds
                </div>
                <div className='point'>
                  Create Five invoices p/m
                </div>
              </div>

              <div className={styles.buyingOptions}>
                <div className={styles.BuyNow}>
                  <span>Buy Now</span>
                </div>
                <div className={styles.Trial}>
                  <span>Try free for 30 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
