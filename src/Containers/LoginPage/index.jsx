import React from 'react';
import styles from './LoginPage.css'
import graphic from '../../Images/whitespace.png'
import graphic2 from '../../Images/whitelogo.png'
import axios from 'axios'
import MainStore from '../../Stores/MainStore.js'

export default class index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      done: false,
      signUp: false,
      error: '',
      forgottenPassword: false,
      resetEmail: ''
    }
  }

  submit(e) {
    e.preventDefault()
    const {email, password} = this.state

    axios.post(process.env.PUBLIC_URL+'auth',{email, password}).then((result)=>{
      console.log(result)

      if (result.data.user.manager===true) {
        MainStore.state.manager = true
        MainStore.state.editing = false
      }
      this.props.history.push('/step')

      window.sessionStorage.user = JSON.stringify(result.data.user)
      window.sessionStorage.accessToken = result.data.token
      MainStore.hydrate()
    }).catch((err)=>{
      console.log(err.response.data.err)

      if (!err.response.data.err) {
        this.setState({error: 'Please Try Again'})
      } else {
        this.setState({error: err.response.data.err})
      }

    })
  }

  signUp(e) {
    e.preventDefault()
    axios.post(process.env.PUBLIC_URL+'users', {email: this.state.email, password: this.state.password, confirmPassword: this.state.password}).then((result)=>{
      console.log('result', result)
      let token = result.data.token
      if (token) {
        this.setState({done: true})
        window.sessionStorage.user = JSON.stringify(result.data.user)
        window.sessionStorage.accessToken = token
        this.props.history.push('/step')
        MainStore.hydrate()
      } 
    }).catch((err, data)=>{
      if (!err.response.data.err) {
        this.setState({error: 'Please Try Again'})
      } else {
        this.setState({error: 'Email has already signed up.'})
      }
      
    })

  }

  sendLink() {

  }

  render() {
    const {email, password, signUp, error, forgottenPassword, resetEmail} = this.state
    console.log(this.props)
    return (
      <div>
        {!this.state.done ? (
            <div className={styles.loginPage}>
              <div className={styles.loginPageContent}>

                <div className={styles.graphic}>
                  <div>
                    <img src={graphic} alt=""/>
                    <img src={graphic2} alt=""/>
                  </div>
                </div>

                {forgottenPassword ? (
                    <div>
                      <form >
                        <input placeholder="Enter your email" className={styles.sendLinkInput} value={resetEmail} onChange={(e)=>{this.setState({resetEmail: e.target.value})}} />
                      </form>
                      <div onClick={this.sendLink.bind(this)} className={styles.sendLinkButton}>
                        <span>Send Link</span>
                      </div>
                    </div>

                  ) : (
                    <div>
                      <form onSubmit={signUp ? this.signUp.bind(this) : this.submit.bind(this)}>
                        <input placeholder="email" type="email" value={email} onChange={(e)=>{this.setState({error: '', email: e.target.value})}} />
                        <input placeholder="password" type="password" value={password} onChange={(e)=>{this.setState({error: '', password: e.target.value})}} />
                        <button style={{display: 'none'}}></button>
                      </form>

                      {error ? <span style={{display: 'block', margin: '0px 10px', color: 'red'}} className={styles.error}>{error}</span> : ''}

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
                        <span style={{color: '#f369ad'}}>or {signUp ? 'log in' : 'sign up'}</span>
                      </div>
                    </div>
                  )}

                <div onClick={()=>{this.setState({forgottenPassword: !forgottenPassword})}} className={styles.forgottenPassword}>
                  <span>{forgottenPassword ? 'Cancel' : 'Forgotten Password?'}</span>
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
