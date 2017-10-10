import React from 'react';
import styles from './NavBar.css'
import Logo from '../../Images/MYOB_logo_RGB.jpg'
import meteorites from '../../Images/meteorites.png'
import sideMission from '../../Images/sideMission.png'
import MainStore from '../../Stores/MainStore.js'

export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  objectionClick() {
    this.props.history.push('/objectionHandling')
  }

  sideMissionClick() {
    this.props.history.push('/sideMission/Cloud Services')
  }

  signOut() {
    window.sessionStorage.accessToken = ''
    MainStore.state.manager = false
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className={styles.navBar}>
        <div className={styles.navBarContent}>
          <div onClick={()=>{
            this.props.history.push('/step')
          }} className={styles.logo}>
            <img src={Logo} />
            <div className={styles.logoText}>
              mission<br/>guidebook

            </div>
          </div>

          


          <div className={styles.navOptions}> 
            {MainStore.state.manager ? <span onClick={()=>{this.props.history.push('/settings')}}>Settings</span> : ''}
            <span onClick={this.signOut.bind(this)}>Sign Out</span>
          </div>
        </div>
      </div>
    );
  }
}

// <div onClick={this.sideMissionClick.bind(this)} className={styles.sideMission}>
//   <img src={sideMission} alt=""/>
//   <h3>Side Missions</h3>
// </div>

// <div onClick={this.objectionClick.bind(this)} className={styles.objection}>
//   <img src={meteorites} alt=""/>
//   <h3>Objection Handling</h3>
// </div>
