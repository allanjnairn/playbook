import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import NavBar from './Containers/NavBar'
import LoginPage from './Containers/LoginPage'
import Breadcrumbs from './Components/Breadcrumbs'
import SideMissions from './Components/SideMissions'
import MainStore from './Stores/MainStore.js'

console.log(process.env)

class App extends Component {

  componentWillMount() {

    console.log('HEYLLLOOO')

    let token = window.sessionStorage.accessToken 
    if (window.sessionStorage.user) {
      let obj = JSON.parse(window.sessionStorage.user)
      if (obj.manager) {
        MainStore.state.manager = true
        MainStore.state.editing = false
      } else {
        MainStore.state.editing = true
      }
    }

    if (token) {

      MainStore.hydrate()


    } else {
      if (window.location.href.toLowerCase().includes('resetpassword')) {

      } else {
        console.log('hey there yeh')
        this.props.history.push('login')
      }
    }
  }

  componentDidMount() {
    // MainStore.hydrate()
  }

  render() {

    console.log(this.props, 'asgads')

   
    return (
      <div className={styles.app}>


        {window.location.href.toLowerCase().includes('login') ? '' : <NavBar history={this.props.history} />}
        {window.location.href.toLowerCase().includes('step') ? <Breadcrumbs Link={this.props.Link} /> : ''}
        <SideMissions history={this.props.history} Link={this.props.Link} />

        <div className={window.location.href.toLowerCase().includes('step') ? styles.mainBody+' '+styles.mainBodyPlus : styles.mainBody}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
