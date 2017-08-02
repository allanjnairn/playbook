import React from 'react';
import styles from './CustomerDetails.css'
import Logo from '../../Images/MYOB_logo_RGB.jpg'
import MainStore from '../../Stores/MainStore.js'

export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessName: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
  }

  render() {
    const {businessName, firstName, lastName, phone, email} = this.state
    return (
      <div className={styles.customerDetails}>
        <div className={styles.customerDetailsTop}>
          <h3>A COUPLE OF DETAILS ABOUT THE CUSTOMER</h3>
        </div>

        <div className={styles.customerDetailsForm}>

          <form>
            <h3>Customer Type</h3>
            <div className={styles.checkboxes}>
              <div>
                <input id='checkbox1' type="checkbox" value='asdga'/>
                <label htmlFor="checkbox1">New Customer</label>
              </div>
              <div>
                <input id='checkbox2' type="checkbox" value='asdga'/>
                <label htmlFor="checkbox2">Existing Customer</label>
              </div>
              <div>
                <input id='checkbox3' type="checkbox" value='asdga'/>
                <label htmlFor="checkbox3">Returning Customer</label>
              </div>
            </div>


            <fieldset>
              <label>Business Name</label>
              <input placeholder="Enter business name" type="text" value={businessName} onChange={(e)=>{this.setState({businessName: e.target.value})}} />
            </fieldset>

            <fieldset>
              <label>Contact Person</label>
              <input placeholder="Enter first name" type="text" value={firstName} onChange={(e)=>{this.setState({firstName: e.target.value})}} />
              <input placeholder="Enter last name" type="text" value={lastName} onChange={(e)=>{this.setState({lastName: e.target.value})}} />
            </fieldset>

            <fieldset>
              <label>Contact Phone</label>
              <input placeholder="Enter phone number" type="number" value={phone} onChange={(e)=>{this.setState({phone: e.target.value})}} />
            </fieldset>

            <fieldset>
              <label>Email *</label>
              <input placeholder="Enter email address" type="email" value={email} onChange={(e)=>{this.setState({email: e.target.value})}} />
            </fieldset>
          </form>

          <div onClick={()=>{
            this.props.push('/step')
            MainStore.emit('stepChange')
          }} className={styles.button}>
            <span>Next Step</span>
          </div>

        </div>
      </div>
    );
  }
}
