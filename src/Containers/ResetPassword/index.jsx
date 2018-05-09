import React from 'react';
import styles from './ResetPassword.css'
import MainStore from '../../Stores/MainStore'
import axios from 'axios'



export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: ''
    }
  }

confirm() {
  const {password, confirmPassword} = this.state

  let id = window.location.href.split('id=').pop()

  console.log(id)
  axios.post(process.env.PUBLIC_URL+'users/resetPassword', {password: password, confirmPassword: confirmPassword, id: id}).then((res)=>{
    console.log(res)
    window.location = '/login'
  }).catch((err)=>{
    console.log(err)
  })
}

  render() {

    const {password, confirmPassword} = this.state

    return (
      <div className={styles.resetPassword}>
        <h2>
          Reset Password
        </h2>

        <div className={styles.resetPasswordBox}>
          <fieldset>
            <label>New Password</label>
            <input type="password" value={password} onChange={(e)=>{this.setState({password: e.target.value})}}  />
          </fieldset>
          <fieldset>
            <label>Confirm New Password</label>
            <input type="password" value={confirmPassword} onChange={(e)=>{this.setState({confirmPassword: e.target.value})}}  />
          </fieldset>

          <div onClick={this.confirm.bind(this)} className={styles.confirmButton}>
            <span>Confirm</span>
          </div>
        </div>
       
      </div>
    );
  }
}
