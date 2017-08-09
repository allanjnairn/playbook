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
    MainStore.state.step = 7
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
                      <div className={styles.choiceBoxBottom6}>
                        <div className={styles.choiceBoxColumn}>
                          <h3>Current State</h3>
                          {MainStore.state.CurrentState.map((q, ind)=>{
                            return (
                                <div className={styles.question}>
                                  <div>{ind + 1}.</div> {q}
                                </div>
                              )
                          })}
                        </div>

                        <div className={styles.choiceBoxColumn}>
                          <h3>Future State</h3>

                          {MainStore.state.FutureState.map((k, ind)=>{
                            return (

                              <div className={styles.keyWord}>
                                <div>{ind + 1}.</div> {k}
                              </div>
                            ) 
                          })}
                        </div>
                        <div className={styles.choiceBoxColumn}>
                          <h3>Insight</h3>
                            <div className={styles.keyWord}>
                              <div>
                              People moving to this future state experience -
                              </div>
                            </div>

                            <div className={styles.keyWord}>
                              <div>
                                Better A
                              </div>
                            </div>

                            <div className={styles.keyWord}>
                              <div>
                                Better B
                              </div>
                            </div>
                            <div className={styles.keyWord}>
                              <div>
                                Better C
                              </div>
                            </div>
                          
                        </div>
                        <div className={styles.choiceBoxColumn}>
                          <h3>Feature</h3>

                          <div className={styles.keyWord}>
                            <div>
                              (P) Feature A, Feature D
                            </div>
                          </div>

                           <div className={styles.keyWord}>
                            <div>
                              (S) Feature K, Feature C
                            </div>
                          </div>
                          
                        </div>
                        <div className={styles.choiceBoxColumn}>
                          <h3>Benefit</h3>

                          <div className={styles.keyWord}>
                            <div>
                              Feature A - More time and less stress when doing task
                            </div>
                          </div>
                          <div className={styles.keyWord}>
                            <div>
                              Feature D - Less resource requirements when doing
                            </div>
                          </div>
                          <div className={styles.keyWord}>
                            <div>
                              Feature K - See what you are doing and make better decisions
                            </div>
                          </div>
                          <div className={styles.keyWord}>
                            <div>
                              Feature C - Allow you to do other stuff
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : ''}
                </div>
              )
          })}
        </div>

        <div onClick={()=>{this.props.push('/objectionHandling')}} className={styles.objectionButton}>
          <span>Objection Handling</span>
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