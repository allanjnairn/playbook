import React from 'react';
import styles from './SideMissionPage.css'
import MainStore from '../../Stores/MainStore.js'


export default class index extends React.Component {
  constructor(props) {
    super(props);
  }


 

  render() {


    return (
      <div className={styles.sideMissionPage}>
        <div className={styles.sideMissionPageContent}>
          <h2>Start your side mission:</h2>


          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.boxHeader}>
                insight
              </div>

              <div className={styles.boxInfo}>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.boxHeader}>
                benefit
              </div>

              <div className={styles.boxInfo}>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.boxHeader}>
                insight
              </div>

              <div className={styles.boxInfo}>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.boxHeader}>
                benefit
              </div>

              <div className={styles.boxInfo}>
              </div>
            </div>

          </div>


        </div>
      </div>
    );
  }
}
