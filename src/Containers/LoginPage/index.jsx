import React from 'react';
import styles from './LoginPage.css'


export default class index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      done: false
    }
  }

  submit(e) {
    e.preventDefault()
    this.setState({done: true})

  }

  render() {
    const {email, password} = this.state
    console.log(this.props)
    return (
      <div>
        {!this.state.done ? (
            <div className={styles.loginPage}>
              <div className={styles.loginPageContent}>

                <div className={styles.logo}>
                <div>
                  myob
                </div>
                <div>
                  mission <br/>
                  guidebook
                </div>
                </div>

                <form onSubmit={this.submit.bind(this)}>
                  <input type="email" value={email} onChange={(e)=>{this.setState({email: e.target.value})}} />
                  <input type="password" value={password} onChange={(e)=>{this.setState({password: e.target.value})}} />
                  <button style={{display: 'none'}}></button>
                </form>

                <div onClick={()=>{this.setState({done: true})}} className={styles.loginButton}>
                  <span>Log In</span>
                </div>

              </div>
            </div>
          ) : <div></div>}
      </div>
    );
  }
}
