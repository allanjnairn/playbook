import React from 'react';
import styles from './LoginPage.css'
import graphic from '../../Images/MYOB Login Page.png'


export default class index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      done: true
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

// <div className={styles.logo}>
// <div>
//   myob
// </div>
// <div>
//   mission <br/>
//   guidebook
// </div>
// </div>
