import React from 'react';
import styles from './StepsBox.css'
import Sales from '../../Images/call-centre-ml-fml-238.jpg'
import Support from '../../Images/callcentre-male-442.jpg'
import MainStore from '../../Stores/MainStore.js'
import Editable from '../../Components/Editable'


export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openChoice: 0,
      option: 1
    }
  }


  chooseOption() {
    const {option} = this.state
    var obj = {1: 'Essentials',
      2: 'AccountRight',
      3: 'AccountEdge'
    }

    MainStore.state.salesPath['product'] = obj[option]
    MainStore.state.step = 7
    MainStore.emit('stepChange')
  }

  render() {
    const {openChoice, option} = this.state
    console.log(MainStore.state.choices)

    return (
      <div className={styles.step5}>  


        <div className={styles.pitchGuidance}>
        <h2>Pitch – Tell them how a MYOB solution fits their needs and solves their pain points</h2>
        <div style={{display: 'none'}} className={styles.pitchGuidanceBoxes}>
          <div className={styles.pitchGuidanceBox}>
            <span>Based on what you told me, your business currently has...</span>
          </div>

          <div className={styles.pitchGuidanceBox}>
            <span>What we can do about this is...</span>
          </div>

          <div className={styles.pitchGuidanceBox}>
            <span>What we have got that will do this is...</span>
          </div>

          <div className={styles.pitchGuidanceBox}>
            <span>What our research with our clients and small business owners indicates is...</span>
          </div>
        </div>
        </div>

        {MainStore.state.salesPath.specialist ? (

          <div className={styles.step5Content}>

            <div className={styles.choiceBox}>
              <h2 className={true ? 'active': ''} onClick={()=>{
                this.setState({openChoice: index})
              }}>Campaign Value Proposition

                {true ? (
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


              <div className={styles.choiceBoxBottom6}>
                <div className={styles.choiceBoxColumn}>
                  <h3>Based on what we have discussed today, your business currently has…</h3>
                  <h3>Current State</h3>
                  {MainStore.state.data.specialistCurrentState['1'].map((q, ind)=>{
                    return (
                        <div className={styles.question}>
                          <Editable brackets={true} text={q} first={'specialistCurrentState'} chosen={'1'} ind={ind} />
                        </div>
                      )
                  })}
                </div>


                <div className={styles.choiceBoxColumn}>
                  <h3>Our software can help your business by introducing…</h3>
                  <h3>Future State</h3>

                  {MainStore.state.data.specialistFutureState['1'].map((k, ind)=>{
                    return (

                      <div className={styles.keyWord}>
                        <Editable brackets={true} text={k} first={'specialistFutureState'} chosen={'1'} ind={ind} />
                      </div>
                    ) 
                  })}
                </div>



                {option===1 ? (
                    <div className={styles.choiceBoxColumn}>
                      <h3>MYOB has created solutions to ease these burdens on your time and business.  This includes:</h3>
                      <h3>Features</h3>

                      {MainStore.state.data.specialistFeatureEssentials['1'].map((k, ind)=>{
                        return (

                          <div className={styles.keyWord}>
                            <Editable brackets={true} text={k} first={'specialistFeatureEssentials'} chosen={'1'} ind={ind} />
                          </div>
                        ) 
                      })}
                      
                    </div>
                  ) : ''}

                {option===2 ? (
                    <div className={styles.choiceBoxColumn}>
                      <h3>MYOB has created solutions to ease these burdens on your time and business.  This includes:</h3>
                      <h3>Features</h3>

                      {MainStore.state.data.specialistFeatureAccountRight['1'].map((k, ind)=>{
                        return (

                          <div className={styles.keyWord}>
                            <Editable brackets={true} text={k} first={'specialistFeatureAccountRight'} chosen={'1'} ind={ind} />
                          </div>
                        ) 
                      })}
                      
                    </div>
                  ) : ''}
                {option===3 ? (
                    <div className={styles.choiceBoxColumn}>
                      <h3>MYOB has created solutions to ease these burdens on your time and business.  This includes:</h3>
                      <h3>Features</h3>

                      {MainStore.state.data.specialistFeatureAccountEdge['1'].map((k, ind)=>{
                        return (

                          <div className={styles.keyWord}>
                            <Editable brackets={true} text={k} first={'specialistFeatureAccountEdge'} chosen={'1'} ind={ind} />
                          </div>
                        ) 
                      })}
                      
                    </div>
                  ) : ''}

                {option===1 ? (
                  <div className={styles.choiceBoxColumn}>
                    <h3>Our clients have stated that our products have helped their business by…</h3>
                    <h3>Insight</h3>
                      {MainStore.state.data.specialistInsightEssentials['1'].map((k, ind)=>{
                                                  return (

                                                    <div className={styles.keyWord}>
                                                      <Editable brackets={true} text={k} first={'specialistInsightEssentials'} chosen={'1'} ind={ind} />
                                                    </div>
                                                  ) 
                                                })}
                    
                  </div>
                  ) : ''}
                {option===2 ? (
                  <div className={styles.choiceBoxColumn}>
                    <h3>Our clients have stated that our products have helped their business by…</h3>
                    <h3>Insight</h3>
                      {MainStore.state.data.specialistInsightAccountRight['1'].map((k, ind)=>{
                                                  return (

                                                    <div className={styles.keyWord}>
                                                      <Editable brackets={true} text={k} first={'specialistInsightAccountRight'} chosen={'1'} ind={ind} />
                                                    </div>
                                                  ) 
                                                })}
                    
                  </div>
                  ) : ''}
                {option===3 ? (
                  <div className={styles.choiceBoxColumn}>
                    <h3>Our clients have stated that our products have helped their business by…</h3>
                    <h3>Insight</h3>
                      {MainStore.state.data.specialistInsightAccountEdge['1'].map((k, ind)=>{
                                                  return (

                                                    <div className={styles.keyWord}>
                                                      <Editable brackets={true} text={k} first={'specialistInsightAccountEdge'} chosen={'1'} ind={ind} />
                                                    </div>
                                                  ) 
                                                })}
                    
                  </div>
                  ) : ''}



              </div>

             



            </div>
            

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
                            <h3>Based on what we have discussed today, your business currently has…</h3>
                            <h3>Current State</h3>
                            {MainStore.state.data.currentState[MainStore.state.discovery[choice]].map((q, ind)=>{
                              return (
                                  <div className={styles.question}>
                                    <Editable brackets={true} text={q} first={'currentState'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                  </div>
                                )
                            })}
                          </div>

                          <div className={styles.choiceBoxColumn}>
                            <h3>Our software can help your business by introducing…</h3>
                            <h3>Future State</h3>

                            {MainStore.state.data.futureState[MainStore.state.discovery[choice]].map((k, ind)=>{
                              return (

                                <div className={styles.keyWord}>
                                  <Editable brackets={true} text={k} first={'futureState'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                </div>
                              ) 
                            })}
                          </div>

                          {option===1 ? (
                              <div className={styles.choiceBoxColumn}>
                                <h3>MYOB has created solutions to ease these burdens on your time and business.  This includes:</h3>
                                <h3>Features</h3>

                                {MainStore.state.data.featureAndBenefitAccountEssentials[MainStore.state.discovery[choice]].map((k, ind)=>{
                                  return (

                                    <div className={styles.keyWord}>
                                      <Editable brackets={true} text={k} first={'featureAndBenefitAccountEssentials'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                    </div>
                                  ) 
                                })}
                                
                              </div>
                            ) : ''}

                          {option===2 ? (
                              <div className={styles.choiceBoxColumn}>
                                <h3>MYOB has created solutions to ease these burdens on your time and business.  This includes:</h3>
                                <h3>Features</h3>

                                {MainStore.state.data.featureAndBenefitAccountRight[MainStore.state.discovery[choice]].map((k, ind)=>{
                                  return (

                                    <div className={styles.keyWord}>
                                      <Editable brackets={true} text={k} first={'featureAndBenefitAccountRight'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                    </div>
                                  ) 
                                })}
                                
                              </div>
                            ) : ''}
                          {option===3 ? (
                              <div className={styles.choiceBoxColumn}>
                                <h3>MYOB has created solutions to ease these burdens on your time and business.  This includes:</h3>
                                <h3>Features</h3>

                                {MainStore.state.data.featureAndBenefitAccountEdge[MainStore.state.discovery[choice]].map((k, ind)=>{
                                  return (

                                    <div className={styles.keyWord}>
                                      <Editable brackets={true} text={k} first={'featureAndBenefitAccountEdge'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                    </div>
                                  ) 
                                })}
                                
                              </div>
                            ) : ''}

                          {option===1 ? (
                            <div className={styles.choiceBoxColumn}>
                              <h3>Our clients have stated that our products have helped their business by…</h3>
                              <h3>Insight</h3>
                                {MainStore.state.data.insightEssentials[MainStore.state.discovery[choice]].map((k, ind)=>{
                                                            return (

                                                              <div className={styles.keyWord}>
                                                                <Editable brackets={true} text={k} first={'insightEssentials'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                                              </div>
                                                            ) 
                                                          })}
                              
                            </div>
                            ) : ''}
                          {option===2 ? (
                            <div className={styles.choiceBoxColumn}>
                              <h3>Our clients have stated that our products have helped their business by…</h3>
                              <h3>Insight</h3>
                                {MainStore.state.data.insightAccountRight[MainStore.state.discovery[choice]].map((k, ind)=>{
                                                            return (

                                                              <div className={styles.keyWord}>
                                                                <Editable brackets={true} text={k} first={'insightAccountRight'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                                              </div>
                                                            ) 
                                                          })}
                              
                            </div>
                            ) : ''}
                          {option===3 ? (
                            <div className={styles.choiceBoxColumn}>
                              <h3>Our clients have stated that our products have helped their business by…</h3>
                              <h3>Insight</h3>
                                {MainStore.state.data.insightAccountEdge[MainStore.state.discovery[choice]].map((k, ind)=>{
                                                            return (

                                                              <div className={styles.keyWord}>
                                                                <Editable brackets={true} text={k} first={'insightAccountEdge'} chosen={MainStore.state.discovery[choice]} ind={ind} />
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

          ) : (


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
                            <h3>Based on what we have discussed today, your business currently has…</h3>
                            <h3>Current State</h3>
                            {MainStore.state.data.currentState[MainStore.state.discovery[choice]].map((q, ind)=>{
                              return (
                                  <div className={styles.question}>
                                    <Editable brackets={true} text={q} first={'currentState'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                  </div>
                                )
                            })}
                          </div>

                          <div className={styles.choiceBoxColumn}>
                            <h3>Our software can help your business by introducing…</h3>
                            <h3>Future State</h3>

                            {MainStore.state.data.futureState[MainStore.state.discovery[choice]].map((k, ind)=>{
                              return (

                                <div className={styles.keyWord}>
                                  <Editable brackets={true} text={k} first={'futureState'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                </div>
                              ) 
                            })}
                          </div>

                          {option===1 ? (
                              <div className={styles.choiceBoxColumn}>
                                <h3>MYOB has created solutions to ease these burdens on your time and business.  This includes:</h3>
                                <h3>Features</h3>

                                {MainStore.state.data.featureAndBenefitAccountEssentials[MainStore.state.discovery[choice]].map((k, ind)=>{
                                  return (

                                    <div className={styles.keyWord}>
                                      <Editable brackets={true} text={k} first={'featureAndBenefitAccountEssentials'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                    </div>
                                  ) 
                                })}
                                
                              </div>
                            ) : ''}

                          {option===2 ? (
                              <div className={styles.choiceBoxColumn}>
                                <h3>MYOB has created solutions to ease these burdens on your time and business.  This includes:</h3>
                                <h3>Features</h3>

                                {MainStore.state.data.featureAndBenefitAccountRight[MainStore.state.discovery[choice]].map((k, ind)=>{
                                  return (

                                    <div className={styles.keyWord}>
                                      <Editable brackets={true} text={k} first={'featureAndBenefitAccountRight'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                    </div>
                                  ) 
                                })}
                                
                              </div>
                            ) : ''}
                          {option===3 ? (
                              <div className={styles.choiceBoxColumn}>
                                <h3>MYOB has created solutions to ease these burdens on your time and business.  This includes:</h3>
                                <h3>Features</h3>

                                {MainStore.state.data.featureAndBenefitAccountEdge[MainStore.state.discovery[choice]].map((k, ind)=>{
                                  return (

                                    <div className={styles.keyWord}>
                                      <Editable brackets={true} text={k} first={'featureAndBenefitAccountEdge'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                    </div>
                                  ) 
                                })}
                                
                              </div>
                            ) : ''}

                          {option===1 ? (
                            <div className={styles.choiceBoxColumn}>
                              <h3>Our clients have stated that our products have helped their business by…</h3>
                              <h3>Insight</h3>
                                {MainStore.state.data.insightEssentials[MainStore.state.discovery[choice]].map((k, ind)=>{
                                                            return (

                                                              <div className={styles.keyWord}>
                                                                <Editable brackets={true} text={k} first={'insightEssentials'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                                              </div>
                                                            ) 
                                                          })}
                              
                            </div>
                            ) : ''}
                          {option===2 ? (
                            <div className={styles.choiceBoxColumn}>
                              <h3>Our clients have stated that our products have helped their business by…</h3>
                              <h3>Insight</h3>
                                {MainStore.state.data.insightAccountRight[MainStore.state.discovery[choice]].map((k, ind)=>{
                                                            return (

                                                              <div className={styles.keyWord}>
                                                                <Editable brackets={true} text={k} first={'insightAccountRight'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                                              </div>
                                                            ) 
                                                          })}
                              
                            </div>
                            ) : ''}
                          {option===3 ? (
                            <div className={styles.choiceBoxColumn}>
                              <h3>Our clients have stated that our products have helped their business by…</h3>
                              <h3>Insight</h3>
                                {MainStore.state.data.insightAccountEdge[MainStore.state.discovery[choice]].map((k, ind)=>{
                                                            return (

                                                              <div className={styles.keyWord}>
                                                                <Editable brackets={true} text={k} first={'insightAccountEdge'} chosen={MainStore.state.discovery[choice]} ind={ind} />
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

          )}

        <div className={styles.buttonContainer}>
          <div onClick={this.chooseOption.bind(this)} className={styles.button5}>
            <span>Select</span>
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





// backup

// import React from 'react';
// import styles from './StepsBox.css'
// import Sales from '../../Images/call-centre-ml-fml-238.jpg'
// import Support from '../../Images/callcentre-male-442.jpg'
// import MainStore from '../../Stores/MainStore.js'
// import Editable from '../../Components/Editable'


// export default class index extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       openChoice: 0,
//       option: 1
//     }
//   }


//   chooseOption() {
//     MainStore.state.step = 7
//     MainStore.emit('stepChange')
//   }

//   render() {
//     const {openChoice, option} = this.state
//     console.log(MainStore.state.choices)

//     return (
//       <div className={styles.step5}>  
//         <div className={styles.step5Content}>


//           {MainStore.state.choices.map((choice,index)=>{
//             let open = false
//             if (index===openChoice) {
//               open = true
//             }

//             return (
//                 <div className={styles.choiceBox}>
//                 <h2 className={open ? 'active': ''} onClick={()=>{
//                   this.setState({openChoice: index})
//                 }}>{MainStore.state.discovery[choice]} 

//                   {open ? (
//                       <div className={styles.productChoices}>
//                         <div className={styles.productChoicesContent}>
//                           <div className={styles.line}>
//                           </div>
//                           <div onClick={()=>{this.setState({option: 1})}} className={option===1 ? styles.productChoice+' '+styles.productChoiceActive : styles.productChoice}>
//                             <span>Essentials</span>
//                           </div>
//                           <div onClick={()=>{this.setState({option: 2})}} className={option===2 ? styles.productChoice+' '+styles.productChoiceActive : styles.productChoice}>
//                             <span>AccountRight</span>
//                           </div>
//                           <div onClick={()=>{this.setState({option: 3})}} className={option===3 ? styles.productChoice+' '+styles.productChoiceActive : styles.productChoice}>
//                             <span>AccountEdge</span>
//                           </div>
//                         </div>
//                       </div>
//                     ) : ''}
//                 </h2> 

//                   {open ? (
//                       <div className={styles.choiceBoxBottom6}>
//                         <div className={styles.choiceBoxColumn}>
//                           <h3>Current State</h3>
//                           {MainStore.state.currentState[MainStore.state.discovery[choice]].map((q, ind)=>{
//                             return (
//                                 <div className={styles.question}>
//                                   <div>•</div> {q}
//                                 </div>
//                               )
//                           })}
//                         </div>

//                         <div className={styles.choiceBoxColumn}>
//                           <h3>Future State</h3>

//                           {MainStore.state.futureState[MainStore.state.discovery[choice]].map((k, ind)=>{
//                             return (

//                               <div className={styles.keyWord}>
//                                 <div>•</div> {k}
//                               </div>
//                             ) 
//                           })}
//                         </div>
//                         {option===1 ? (
//                           <div className={styles.choiceBoxColumn}>
//                             <h3>Insight</h3>
//                               {MainStore.state.insightEssentials[MainStore.state.discovery[choice]].map((k, ind)=>{
//                                                           return (

//                                                             <div className={styles.keyWord}>
//                                                               <div>•</div> {k}
//                                                             </div>
//                                                           ) 
//                                                         })}
                            
//                           </div>
//                           ) : ''}
//                         {option===2 ? (
//                           <div className={styles.choiceBoxColumn}>
//                             <h3>Insight</h3>
//                               {MainStore.state.insightAccountRight[MainStore.state.discovery[choice]].map((k, ind)=>{
//                                                           return (

//                                                             <div className={styles.keyWord}>
//                                                               <div>•</div> {k}
//                                                             </div>
//                                                           ) 
//                                                         })}
                            
//                           </div>
//                           ) : ''}
//                         {option===3 ? (
//                           <div className={styles.choiceBoxColumn}>
//                             <h3>Insight</h3>
//                               {MainStore.state.insightAccountEdge[MainStore.state.discovery[choice]].map((k, ind)=>{
//                                                           return (

//                                                             <div className={styles.keyWord}>
//                                                               <div>•</div> {k}
//                                                             </div>
//                                                           ) 
//                                                         })}
                            
//                           </div>
//                           ) : ''}


//                         {option===1 ? (
//                             <div className={styles.choiceBoxColumn}>
//                               <h3>Features</h3>

//                               {MainStore.state.featureAndBenefitAccountEssentials[MainStore.state.discovery[choice]].map((k, ind)=>{
//                                 return (

//                                   <div className={styles.keyWord}>
//                                     <Editable text={k} />
//                                   </div>
//                                 ) 
//                               })}
                              
//                             </div>
//                           ) : ''}

//                         {option===2 ? (
//                             <div className={styles.choiceBoxColumn}>
//                               <h3>Features</h3>

//                               {MainStore.state.featureAndBenefitAccountRight[MainStore.state.discovery[choice]].map((k, ind)=>{
//                                 return (

//                                   <div className={styles.keyWord}>
//                                     <Editable text={k} />
//                                   </div>
//                                 ) 
//                               })}
                              
//                             </div>
//                           ) : ''}
//                         {option===3 ? (
//                             <div className={styles.choiceBoxColumn}>
//                               <h3>Features</h3>

//                               {MainStore.state.featureAndBenefitAccountEdge[MainStore.state.discovery[choice]].map((k, ind)=>{
//                                 return (

//                                   <div className={styles.keyWord}>
//                                     <Editable text={k} />
//                                   </div>
//                                 ) 
//                               })}
                              
//                             </div>
//                           ) : ''}
                        
//                       </div>
//                     ) : ''}
//                 </div>
//               )
//           })}
//         </div>

//         <div className={styles.buttonContainer}>
//           <div onClick={this.chooseOption.bind(this)} className={styles.button5}>
//             <span>Next</span>
//           </div>
//         </div>


//       </div>
//     );
//   }
// }



// // <div className={styles.choiceBoxColumn}>
// //   <h3>Benefit</h3>

// //   <div className={styles.keyWord}>
// //     <div>
// //       Feature A - More time and less stress when doing task
// //     </div>
// //   </div>
// //   <div className={styles.keyWord}>
// //     <div>
// //       Feature D - Less resource requirements when doing
// //     </div>
// //   </div>
// //   <div className={styles.keyWord}>
// //     <div>
// //       Feature K - See what you are doing and make better decisions
// //     </div>
// //   </div>
// //   <div className={styles.keyWord}>
// //     <div>
// //       Feature C - Allow you to do other stuff
// //     </div>
// //   </div>
// // </div>