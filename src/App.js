import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import NavBar from './Containers/NavBar'
import LoginPage from './Containers/LoginPage'
import Breadcrumbs from './Components/Breadcrumbs'
import SideMissions from './Components/SideMissions'

class App extends Component {
  render() {

    console.log(this.props)

   
    return (
      <div className={styles.app}>
        <LoginPage />

        <NavBar />
        <Breadcrumbs Link={this.props.Link} />
        <SideMissions Link={this.props.Link} />

        <div className={window.location.href.toLowerCase().includes('step') ? styles.mainBody+' '+styles.mainBodyPlus : styles.mainBody}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
