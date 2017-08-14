import React from 'react';
import styles from './StepsBox.css'
import Step1 from './Step1.jsx'
import Step2 from './Step2.jsx'
import Step3 from './Step3.jsx'
import Step4 from './Step4.jsx'
import Step5 from './Step5.jsx'
import Step6 from './Step6.jsx'
import Step7 from './Step7.jsx'
import MainStore from '../../Stores/MainStore.js'

export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1
    }

    this.stepChange = this.stepChange.bind(this)
  }

  stepChange() {
    this.setState({step: MainStore.state.step})
  }

  componentWillMount() {
    MainStore.on('stepChange', this.stepChange)
  }

  componentWillUnmount() {
    MainStore.removeListener('stepChange', this.stepChange)
  }

  render() {
    const {step} = this.state

    console.log(this.props)

    let stepsObj = {
      step1 : <Step1 />,
      step2 : <Step2 />,
      step3 : <Step3 />,
      step4 : <Step4 />,
      step5 : <Step5 />,
      step6 : <Step6 push={this.props.history.push} />,
      step7 : <Step7 history={this.props.history} />,
    }

    let stepComponent = stepsObj['step'+step]

    return (
      <div className={styles.navBar}>
        {stepComponent}
      </div>
    );
  }
}
