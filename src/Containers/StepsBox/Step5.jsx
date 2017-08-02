import React from 'react';
import styles from './StepsBox.css'
import Sales from '../../Images/call-centre-ml-fml-238.jpg'
import Support from '../../Images/callcentre-male-442.jpg'
import MainStore from '../../Stores/MainStore.js'


export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openChoice: 0
    }
  }


  chooseOption() {
    MainStore.state.step = 6
    MainStore.emit('stepChange')
  }

  render() {
    const {openChoice} = this.state
    console.log(MainStore.state.choices)

    return (
      <div className={styles.step5}>  
        <div className={styles.step5Content}>
          {MainStore.state.choices.map((choice,index)=>{
            let open = false
            if (index===openChoice) {
              open = true
            }

            return (
                <div className={styles.choiceBox}>
                <h2 className={open ? 'active': ''} onClick={()=>{
                  this.setState({openChoice: index})
                }}>{MainStore.state.discovery[choice]} 
                </h2> 
                  {open ? (
                      <div className={styles.choiceBoxBottom}>
                        <div className={styles.choiceBoxQuestions}>
                          <h3>Target Questions</h3>
                          {MainStore.state.questions['1'].map((q, ind)=>{
                            return (
                                <div className={styles.question}>
                                  <div>{ind + 1}.</div> {q}
                                </div>
                              )
                          })}
                        </div>

                        <div className={styles.choiceBoxKeyWords}>
                          <h3>Key Words</h3>

                          {MainStore.state.keyWords['1'].map((k, ind)=>{
                            return (

                              <div className={styles.keyWord}>
                                <div>{ind + 1}.</div> {k}
                              </div>
                            ) 
                          })}
                        </div>
                      </div>
                    ) : ''}
                </div>
              )
          })}
        </div>

        <div className={styles.buttonContainer}>
          <div onClick={this.chooseOption.bind(this)} className={styles.button5}>
            <span>Next</span>
          </div>
        </div>

      </div>
    );
  }
}