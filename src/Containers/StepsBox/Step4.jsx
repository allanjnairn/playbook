import React from 'react';
import styles from './StepsBox.css'
import Sales from '../../Images/call-centre-ml-fml-238.jpg'
import Support from '../../Images/callcentre-male-442.jpg'
import MainStore from '../../Stores/MainStore.js'


export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: []
    }
  }

  cardClick(index) {
    let {choices} = this.state
    let inArray = false
    let where = 0
    choices.map((e, ind)=>{
      if (e===index) {
        inArray = true
        where = ind
      }
    })
    let newChoices = choices
    if (!inArray) { 
      if (this.state.choices.length < 3) {
        newChoices.push(index)
      } else {
        newChoices.shift()
        newChoices.push(index)
      }

      this.setState({choices: newChoices})
    } else {
      newChoices.splice(where, 1)
      this.setState({choices: newChoices})
    }
  }

  chooseOption() {
    const {choices} = this.state
    MainStore.state.step = 5
    MainStore.state.choices = choices
    MainStore.emit('stepChange')
  }

  render() {

    const {choices} = this.state


    return (
      <div className={styles.step4}>
        <h2>Learn About Your Client</h2>
        <div className={styles.multipleChoice}>
          {MainStore.state.discovery.map((e, index)=>{
            let chosen = false
            choices.map((choice)=>{
              if (choice===index) {
                chosen = true
              }
            })

            return (
                <div onClick={this.cardClick.bind(this, index)} className={chosen ? styles.choiceCard+' '+styles.choiceCardActive : styles.choiceCard}>
                  <span>{e}</span>
                </div>
              )
          })}
        </div>

        <div onClick={this.chooseOption.bind(this)} className={styles.button4}>
          <span>Go</span>
        </div>
      </div>
    );
  }
}