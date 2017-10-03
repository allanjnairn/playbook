import React from 'react';
import styles from './StepsBox.css'
import Sales from '../../Images/call-centre-ml-fml-238.jpg'
import Support from '../../Images/callcentre-male-442.jpg'
import MainStore from '../../Stores/MainStore.js'


export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openChoice: 0,
      option: 1
    }
  }


  chooseOption() {
    MainStore.state.step = 7
    MainStore.emit('stepChange')
  }

  render() {
    const {openChoice, option} = this.state
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

                  {open ? (
                      <div className={styles.productChoices}>
                        <div className={styles.productChoicesContent}>
                          <div className={styles.line}>
                          </div>
                          <div onClick={()=>{this.setState({option: 1})}} className={option===1 ? styles.productChoice+' '+styles.productChoiceActive : styles.productChoice}>
                            <span>Essentials</span>
                          </div>
                          <div onClick={()=>{this.setState({option: 2})}} className={option===2 ? styles.productChoice+' '+styles.productChoiceActive : styles.productChoice}>
                            <span>AccountRight</span>
                          </div>
                          <div onClick={()=>{this.setState({option: 3})}} className={option===3 ? styles.productChoice+' '+styles.productChoiceActive : styles.productChoice}>
                            <span>AccountEdge</span>
                          </div>
                        </div>
                      </div>
                    ) : ''}
                </h2> 

                  {open ? (
                      <div className={styles.choiceBoxBottom6}>
                        <div className={styles.choiceBoxColumn}>
                          <h3>Current State</h3>
                          {MainStore.state.currentState[MainStore.state.discovery[choice]].map((q, ind)=>{
                            return (
                                <div className={styles.question}>
                                  <div>•</div> {q}
                                </div>
                              )
                          })}
                        </div>

                        <div className={styles.choiceBoxColumn}>
                          <h3>Future State</h3>

                          {MainStore.state.futureState[MainStore.state.discovery[choice]].map((k, ind)=>{
                            return (

                              <div className={styles.keyWord}>
                                <div>•</div> {k}
                              </div>
                            ) 
                          })}
                        </div>
                        {option===1 ? (
                          <div className={styles.choiceBoxColumn}>
                            <h3>Insight</h3>
                              {MainStore.state.insightEssentials[MainStore.state.discovery[choice]].map((k, ind)=>{
                                                          return (

                                                            <div className={styles.keyWord}>
                                                              <div>•</div> {k}
                                                            </div>
                                                          ) 
                                                        })}
                            
                          </div>
                          ) : ''}
                        {option===2 ? (
                          <div className={styles.choiceBoxColumn}>
                            <h3>Insight</h3>
                              {MainStore.state.insightAccountRight[MainStore.state.discovery[choice]].map((k, ind)=>{
                                                          return (

                                                            <div className={styles.keyWord}>
                                                              <div>•</div> {k}
                                                            </div>
                                                          ) 
                                                        })}
                            
                          </div>
                          ) : ''}
                        {option===3 ? (
                          <div className={styles.choiceBoxColumn}>
                            <h3>Insight</h3>
                              {MainStore.state.insightAccountEdge[MainStore.state.discovery[choice]].map((k, ind)=>{
                                                          return (

                                                            <div className={styles.keyWord}>
                                                              <div>•</div> {k}
                                                            </div>
                                                          ) 
                                                        })}
                            
                          </div>
                          ) : ''}


                        {option===1 ? (
                            <div className={styles.choiceBoxColumn}>
                              <h3>Feature</h3>

                              {MainStore.state.featureAndBenefitAccountEssentials[MainStore.state.discovery[choice]].map((k, ind)=>{
                                return (

                                  <div className={styles.keyWord}>
                                    <div>•</div> {k}
                                  </div>
                                ) 
                              })}
                              
                            </div>
                          ) : ''}

                        {option===2 ? (
                            <div className={styles.choiceBoxColumn}>
                              <h3>Feature</h3>

                              {MainStore.state.featureAndBenefitAccountRight[MainStore.state.discovery[choice]].map((k, ind)=>{
                                return (

                                  <div className={styles.keyWord}>
                                    <div>•</div> {k}
                                  </div>
                                ) 
                              })}
                              
                            </div>
                          ) : ''}
                        {option===3 ? (
                            <div className={styles.choiceBoxColumn}>
                              <h3>Feature</h3>

                              {MainStore.state.featureAndBenefitAccountEdge[MainStore.state.discovery[choice]].map((k, ind)=>{
                                return (

                                  <div className={styles.keyWord}>
                                    <div>•</div> {k}
                                  </div>
                                ) 
                              })}
                              
                            </div>
                          ) : ''}
                        
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



// <div className={styles.choiceBoxColumn}>
//   <h3>Benefit</h3>

//   <div className={styles.keyWord}>
//     <div>
//       Feature A - More time and less stress when doing task
//     </div>
//   </div>
//   <div className={styles.keyWord}>
//     <div>
//       Feature D - Less resource requirements when doing
//     </div>
//   </div>
//   <div className={styles.keyWord}>
//     <div>
//       Feature K - See what you are doing and make better decisions
//     </div>
//   </div>
//   <div className={styles.keyWord}>
//     <div>
//       Feature C - Allow you to do other stuff
//     </div>
//   </div>
// </div>