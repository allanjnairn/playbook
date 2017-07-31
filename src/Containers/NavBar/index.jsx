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
          <div onClick={()=>{
            console.log(this.props)
          }} className={styles.logo}>
            <img src={Logo} />
            <div className={styles.logoText}>
              mission<br/>guidebook

            </div>
          </div>

          <div className={styles.navOptions}> 
            <span>Settings</span>
            <span>Sign Out</span>
          </div>
        </div>
      </div>
    );
  }
}
