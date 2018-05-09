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
      choice1: true,
      choice2: false,
      choice3: false
    }
  }


  chooseOption() {
    MainStore.state.step = 6
    MainStore.emit('stepChange')
  }

  render() {
    const {openChoice, choice1, choice2, choice3} = this.state
    console.log(MainStore.state.choices)
    console.log(MainStore.statef)

    return (
      <div className={styles.step5}>
        <h2>Needs Analysis - Deep dive to uncover their needs and pain points</h2>

        {MainStore.state.salesPath.specialist ? (

            <div className={styles.step5Content}>
              <div className={styles.choiceBox}>
                <h2 className={true ? 'active' : ''}>Specialized Topic Focus</h2>

                <div className={styles.choiceBoxBottom}>
                  <div className={styles.choiceBoxQuestions+' '+styles.newChoiceBoxQuestions}>
                    {MainStore.state.data.specialistQuestions['1'].map((q, ind)=>{
                      let dropdownClosed = styles.dropdownClosed
                      let roundCorners =  styles.roundCorners
                      if (this.state['1'+'_'+q+'_'+ind]) {
                        dropdownClosed = ''
                        roundCorners = ''
                      }

                      return (
                          <div className={styles.question+' '+styles.newQuestion+' '+styles.newQuestionSpecialist}>
                            <div className={styles.newQuestionTop+' '+roundCorners+' '+styles.centerQuestion} onClick={()=>{
                                this.state['1'+'_'+q+'_'+ind] = !this.state['1'+'_'+q+'_'+ind] 
                                this.setState(this.state)
                            }}>
                              <Editable numbered={false} text={q} first={'specialistQuestions'} chosen={'1'} ind={ind} />
                            </div>
                            
                            <div className={styles.newQuestionDropdown+' '+dropdownClosed}>
                              
                              {MainStore.state.data.specialistInformation['1'].map((k1, ind1)=>{
                                  if (ind1===ind) {

                                    return (

                                      <div className={styles.keyWord}>
                                        <Editable makeList={true} numbered={false}  text={k1} first={'specialistInformation'} chosen={'1'} ind={ind1}/>
                                      </div>
                                    ) 
                                  }
                                })}
                

                            </div>
                          </div>
                        )
                    })}


                  </div>

                  

                  
                </div>


              </div>
            </div>

          ) : (


            <div style={{display: 'flex'}} className={styles.step5Content}>
              {MainStore.state.choices.map((choice,index)=>{
                let open = false
                if (index===openChoice) {
                  {/*open = true*/}
                }

                if (index===0 && choice1===true) {
                    open = true
                }

                if (index===1 && choice2===true) {
                    open = true
                }

                if (index===2 && choice3===true) {
                    open = true
                }


                return (
                    <div className={styles.choiceBox}>
                    <h2 className={open ? 'active': ''} onClick={()=>{

                      if (index===0) {
                        this.setState({choice1: !choice1})
                        let choice = 'choice1'
                      }

                      if (index===1) {
                        this.setState({choice2: !choice2})

                        let choice = 'choice2'
                      }

                      if (index===2) {
                        this.setState({choice3: !choice3})

                        let choice = 'choice3'
                      }

                    }}>{MainStore.state.discovery[choice]} 
                    </h2> 
                      {open ? (
                          <div className={styles.choiceBoxBottom}>
                            <div className={styles.choiceBoxQuestions+' '+styles.newChoiceBoxQuestions}>
                              {MainStore.state.data.targetQuestions[MainStore.state.discovery[choice]].map((q, ind)=>{
                                let dropdownClosed = styles.dropdownClosed
                                let roundCorners =  styles.roundCorners
                                if (this.state[choice+'_'+q+'_'+ind]) {
                                  dropdownClosed = ''
                                  roundCorners = ''
                                }

                                return (
                                    <div className={styles.question+' '+styles.newQuestion}>
                                      <div className={styles.newQuestionTop+' '+roundCorners+' '+styles.centerQuestion} onClick={()=>{
                                          this.state[choice+'_'+q+'_'+ind] = !this.state[choice+'_'+q+'_'+ind] 
                                          this.setState(this.state)
                                      }}>
                                        <Editable numbered={false} text={q} first={'targetQuestions'} chosen={MainStore.state.discovery[choice]} ind={ind} />
                                      </div>
                                      
                                      <div className={styles.newQuestionDropdown+' '+dropdownClosed}>
                                        
                                        {MainStore.state.data.targetInformation[MainStore.state.discovery[choice]].map((k1, ind1)=>{
                                            if (ind1===ind) {

                                              return (

                                                <div className={styles.keyWord}>
                                                  <Editable makeList={true} numbered={false}  text={k1} first={'targetInformation'} chosen={MainStore.state.discovery[choice]} ind={ind1}/>
                                                </div>
                                              ) 
                                            }
                                          })}
            

                                      </div>
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

          )}

        <div className={styles.buttonContainer}>
          <div onClick={this.chooseOption.bind(this)} className={styles.button5}>
            <span>Next</span>
          </div>
        </div>

      </div>
    );
  }
}

// <div className={styles.choiceBoxBottom}>
//   <div className={styles.choiceBoxQuestions}>
//     <h3>Target Questions</h3>
//     {MainStore.state.data.targetQuestions[MainStore.state.discovery[choice]].map((q, ind)=>{
//       return (
//           <div className={styles.question}>
//             <Editable numbered={true} text={q} first={'targetQuestions'} chosen={MainStore.state.discovery[choice]} ind={ind} />
//           </div>
//         )
//     })}
//   </div>

  
// </div>


// <div className={styles.choiceBoxKeyWords}>
//   <h3>Targeted Information</h3>

//   {MainStore.state.data.targetInformation[MainStore.state.discovery[choice]].map((k, ind)=>{
//     return (

//       <div className={styles.keyWord}>
//         <Editable numbered={true} text={k} first={'targetInformation'} chosen={MainStore.state.discovery[choice]} ind={ind}/>
//       </div>
//     ) 
//   })}
// </div>



// render() {
//   const {openChoice} = this.state
//   console.log(MainStore.state.choices)

//   return (
//     <div className={styles.step5}>  
//       <div className={styles.step5Content}>
//         {MainStore.state.choices.map((choice,index)=>{
//           let open = false
//           if (index===openChoice) {
//             open = true
//           }

//           return (
//               <div className={styles.choiceBox}>
//               <h2 className={open ? 'active': ''} onClick={()=>{
//                 this.setState({openChoice: index})
//               }}>{MainStore.state.discovery[choice]} 
//               </h2> 
//                 {open ? (
//                     <div className={styles.choiceBoxBottom}>
//                       <div className={styles.choiceBoxQuestions}>
//                         <h3>Target Questions</h3>
//                         {MainStore.state.targetQuestions[MainStore.state.discovery[choice]].map((q, ind)=>{
//                           return (
//                               <div className={styles.question}>
//                                 <div>{ind + 1}.</div> {q}
//                               </div>
//                             )
//                         })}
//                       </div>

//                       <div className={styles.choiceBoxKeyWords}>
//                         <h3>Targeted Information</h3>

//                         {MainStore.state.targetInformation[MainStore.state.discovery[choice]].map((k, ind)=>{
//                           return (

//                             <div className={styles.keyWord}>
//                               <div>{ind + 1}.</div> {k}
//                             </div>
//                           ) 
//                         })}
//                       </div>
//                     </div>
//                   ) : ''}
//               </div>
//             )
//         })}
//       </div>

//       <div className={styles.buttonContainer}>
//         <div onClick={this.chooseOption.bind(this)} className={styles.button5}>
//           <span>Next</span>
//         </div>
//       </div>

//     </div>
//   );
// }