import React from 'react';
import styles from './NavBar.css'
import Logo from '../../Images/MYOB_logo_RGB.jpg'

export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.navBar}>
        <div className={styles.navBarContent}>
          <div className={styles.logo}>
            <img src={Logo} />
          </div>

          <div className={styles.menuButton}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}
