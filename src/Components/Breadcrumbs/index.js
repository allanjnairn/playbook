import React from 'react';
import styles from './Breadcrumbs.css'
import MainStore from '../../Stores/MainStore'



export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.stepChange = this.stepChange.bind(this)
  }

  stepChange() {
    this.setState(this.state)
  }

  componentWillMount() {
    MainStore.on('stepChange', this.stepChange)
  }

  componentWillUnmount() {
    MainStore.removeListener('stepChange', this.stepChange)
  }

  chooseOption() {
    MainStore.state.step = 2
    MainStore.emit('stepChange')
  }

  optionClick(e){
    MainStore.state.step = e 
    MainStore.emit('stepChange')
  }

  render() {

    let step = MainStore.state.step


    return (
      <div>
        {window.location.href.toLowerCase().includes('step') ? (
          <div className={styles.breadcrumbs}>
            <div className={styles.breadcrumbsContent}>
              <div onClick={this.optionClick.bind(this, 1)} className={step===1 ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Home
              </div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div onClick={this.optionClick.bind(this, 2)} className={step===2 ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Parameters
              </div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div onClick={this.optionClick.bind(this, 3)} className={step===3||step===4 ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Discovery
              </div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div onClick={this.optionClick.bind(this, 5)} className={step===5||step===6 ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Analysis
              </div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div onClick={this.optionClick.bind(this, 7)} className={step===7 ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Presentation
              </div>
            </div>
          </div>
          ) : <div>
        </div>}
      </div>
    );
  }
}
