import React from 'react';
import styles from './SideMissions.css'
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
    console.log(this.props)

  }

  render() {

    let step = MainStore.state.step

    let Link = this.props.Link

    return (
      <div>
        {window.location.href.toLowerCase().includes('step')||window.location.href.toLowerCase().includes('side') ? (
          <div className={styles.breadcrumbs}>
            <div className={styles.breadcrumbsContent}>
              <h3>Side Mission Options:</h3>

              <div onClick={this.optionClick.bind(this, 'Cloud Services')} className={step===1 ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Cloud Services
              </div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div onClick={this.optionClick.bind(this, 'Pay Direct')} className={step===2 ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                PayDirect
              </div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div onClick={this.optionClick.bind(this, 'Classroom Training')} className={step===3 ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Classroom Training
              </div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div onClick={this.optionClick.bind(this, 'Additional Files')} className={step===4 ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Additional Files
              </div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div onClick={this.optionClick.bind(this, 'Network License')} className={step===5 ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Network License
              </div>
              <div onClick={this.optionClick.bind(this, 'Kounta')} className={step===5 ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Kounta
              </div>
            </div>
          </div>
          ) : <div>
        </div>}
      </div>
    );
  }
}
