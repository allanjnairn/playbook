import React from 'react';
import styles from './CustomerDetails.css'
import Logo from '../../Images/MYOB_logo_RGB.jpg'
import MainStore from '../../Stores/MainStore.js'
import Slider, { Range } from 'rc-slider';

export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientID: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
  }

  render() {
    const {clientID, firstName, lastName, phone, email} = this.state
    return (
      <div className={styles.customerDetails}>
        <div className={styles.customerDetailsTop}>
          <h3>A COUPLE OF DETAILS ABOUT THE CUSTOMER</h3>
        </div>

        <div className={styles.customerDetailsForm}>

          <form>
            <h3>Result</h3>
            <div className={styles.checkboxes}>
              <div>
                <input id='checkbox1' type="checkbox" value='asdga'/>
                <label htmlFor="checkbox1">Sale</label>
              </div>
              <div>
                <input id='checkbox2' type="checkbox" value='asdga'/>
                <label htmlFor="checkbox2">Follow Up</label>
              </div>
              <div>
                <input id='checkbox3' type="checkbox" value='asdga'/>
                <label htmlFor="checkbox3">Not Interested</label>
              </div>
            </div>


            <fieldset>
              <label>Client ID</label>
              <input placeholder="Enter Client ID" type="text" value={clientID} onChange={(e)=>{this.setState({clientID: e.target.value})}} />
            </fieldset>

            <div className={styles.slider}>
              <h3>How did the Mission Guide book help this call?</h3>
              <div className={styles.numbers}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
             <Slider min={1} max={10} step={1} marks={1} />
            </div>

          </form>

         

        </div>
      </div>
    );
  }
}


// <div onClick={()=>{
//   this.props.push('/step')
//   MainStore.emit('stepChange')
// }} className={styles.button}>
//   <span>Next Step</span>
// </div>
