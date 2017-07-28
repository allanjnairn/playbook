import React from 'react';
import styles from './NavBar.css'

export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.navBar}>
      	NAv Bar
      </div>
    );
  }
}
