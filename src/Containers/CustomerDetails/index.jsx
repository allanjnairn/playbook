import React from 'react';
import styles from './CustomerDetails.css'
import Logo from '../../Images/MYOB_logo_RGB.jpg'

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

            <div className={styles.checkboxes}>
              <input id='checkbox1' type="checkbox" value='asdga'/>
              <label htmlFor="checkbox1">New Customer</label>
              <input id='checkbox1' type="checkbox" value='asdga'/>
              <label htmlFor="checkbox1">Existing Customer</label>
              <input id='checkbox1' type="checkbox" value='asdga'/>
              <label htmlFor="checkbox1">Returning Customer</label>
            </div>


            <fieldset>
              <label>Business Name</label>
              <input type="text" value={businessName} onChange={(e)=>{this.setState({businessName: e.target.value})}} />
            </fieldset>

            <fieldset>
              <label>Contact Person</label>
              <input type="text" value={firstName} onChange={(e)=>{this.setState({firstName: e.target.value})}} />
              <input type="text" value={lastName} onChange={(e)=>{this.setState({lastName: e.target.value})}} />
            </fieldset>

            <fieldset>
              <label>Contact Phone</label>
              <input type="text" value={phone} onChange={(e)=>{this.setState({phone: e.target.value})}} />
            </fieldset>

            <fieldset>
              <label>Email *</label>
              <input type="text" value={email} onChange={(e)=>{this.setState({email: e.target.value})}} />
            </fieldset>
          </form>

        </div>
      </div>
    );
  }
}
