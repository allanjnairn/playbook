import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import NavBar from './Containers/NavBar'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <NavBar />
        <div className={styles.mainBody}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
