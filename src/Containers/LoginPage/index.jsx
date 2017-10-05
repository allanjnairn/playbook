import React from 'react';
import styles from './LoginPage.css'
import graphic from '../../Images/MYOB Login Page.png'
import axios from 'axios'

export default class index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      done: false,
      signUp: false
    }
  }

  submit(e) {
    e.preventDefault()
    this.setState({done: true})

  }

  signUp() {
    axios.post('localhost:1337/user', {email: this.state.email, password: this.state.password}).then((result)=>{
      console.log('result', result)
    }).catch((err)=>{
      console.log('err', err)
    })

  }

  render() {
    const {email, password, signUp} = this.state
    console.log(this.props)
    return (
      <div>
        {!this.state.done ? (
            <div className={styles.loginPage}>
              <div className={styles.loginPageContent}>

                <div className={styles.graphic}>
                  <div>
                    <img src={graphic} alt=""/>
                  </div>
                </div>

                <form onSubmit={this.submit.bind(this)}>
                  <input placeholder="email" type="email" value={email} onChange={(e)=>{this.setState({email: e.target.value})}} />
                  <input placeholder="password" type="password" value={password} onChange={(e)=>{this.setState({password: e.target.value})}} />
                  <button style={{display: 'none'}}></button>
                </form>

                {signUp ? (
                    <div onClick={this.signUp.bind(this)} className={styles.loginButton}>
                      <span>Sign Up</span>
                    </div>
                  ) : (
                    <div onClick={this.submit.bind(this)} className={styles.loginButton}>
                      <span>Log In</span>
                    </div>
                  )}

                <div onClick={()=>{this.setState({signUp: !signUp})}} className={styles.orButton}>
                  <span>or {signUp ? 'log in' : 'sign up'}</span>
                </div>

              </div>
            </div>
          ) : <div></div>}
      </div>
    );
  }
}

// <div className={styles.logo}>
// <div>
//   myob
// </div>
// <div>
//   mission <br/>
//   guidebook
// </div>
// </div>
