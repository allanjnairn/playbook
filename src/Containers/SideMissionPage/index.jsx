import React from 'react';
import styles from './SideMissionPage.css'
import MainStore from '../../Stores/MainStore.js'
import Cloud from '../../Images/cloud.png'
import SideMissions from '../../Components/SideMissions'


export default class index extends React.Component {
  constructor(props) {
    super(props);
  }


 

  render() {

    let title = ''


    title = this.props.match.params.title



    return (
      <div className={styles.sideMissionPage}>
        <div className={styles.sideMissionPageContent}>
          <h2>Start your side mission:</h2>

          <div className={styles.title}>
            <div><img src={Cloud} alt=""/></div>
            <h3>{title}</h3>
          </div>


          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.boxHeader}>
                What it is
              </div>

              <div className={styles.boxInfo}>
                Editable text where we will document a short summary about how the x-sell piece will help the future state of their business.
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.boxHeader}>
                Insight
              </div>

              <div className={styles.boxInfo}>
                Editable text where we will document a short summary about how the x-sell piece will help the future state of their business.
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.boxHeader}>
                Feature
              </div>

              <div className={styles.boxInfo}>
                Editable text where we will document a short summary about how the x-sell piece will help the future state of their business.
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.boxHeader}>
                Benefit
              </div>

              <div className={styles.boxInfo}>
                Editable text where we will document a short summary about how the x-sell piece will help the future state of their business.
              </div>
            </div>

          </div>


        </div>
      </div>
    );
  }
}
