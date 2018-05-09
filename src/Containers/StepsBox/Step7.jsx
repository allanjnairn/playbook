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
      activeHeader: 1
    }
  }

  componentDidMount() {
    console.log(MainStore.state.salesPath['product'])
    if (MainStore.state.salesPath['product'] == 'Essentials') {
      console.log('worked')
      this.setState({activeHeader: 1})
    }
    if (MainStore.state.salesPath['product'] == 'AccountRight') {
      console.log('worked')
      this.setState({activeHeader: 2})
    }
    if (MainStore.state.salesPath['product'] == 'AccountEdge') {
      console.log('worked')
      this.setState({activeHeader: 3})
    }
  }




  chooseOption() {
    MainStore.state.step = 2
    MainStore.emit('stepChange')
  }

  next() {
    // const {activeHeader} = this.state
    // var obj = {1: 'Essentials',
    //   2: 'AccountRight',
    //   3: 'AccountEdge'
    // }

    // MainStore.state.salesPath['product'] = obj[activeHeader]
    this.props.history.push('/home')
  }

  change() {
   MainStore.state.step = 6
   MainStore.emit('stepChange')
  }

  render() {
    const {activeHeader} = this.state


    return (
      <div className={styles.step6}>

      <div className={styles.openingStatements}>
       <h2>
        Opening your closing pitch…for {MainStore.state.salesPath['product']}
       </h2>

       {MainStore.state.salesPath.specialist ? (

          <div>
            <ul>
                {MainStore.state.data.specialistOpenPitch['1'].map((p, ind)=>{
                  return <Editable text={p} ind={ind} first='specialistOpenPitch' chosen={'1'} />
                })}
            </ul>
          </div>

        ) : (
          
          <div>
            <ul>
              {MainStore.state.data.endOpening[MainStore.state.salesPath['mission']].map((p, ind)=>{
                return <Editable text={p} ind={ind} first='endOpening' chosen={MainStore.state.salesPath['mission']} />
              })}
            </ul>
          </div>

        )}
      </div>

      	
        <div  className={styles.plans}>
          <div style={{display: 'none'}}  className={styles.plansTop}>

            <div style={activeHeader===1 ? {display: 'block'} : {display: 'none'}} onClick={()=>{this.setState({activeHeader: 1})}} className={activeHeader===1 ? styles.plansTopHeader+' '+styles.plansTopHeaderActive : styles.plansTopHeader}> 
              <h2>Essentials</h2>
              <div className='pointer'>
              </div>
            </div>

            <div style={activeHeader===2 ? {display: 'block'} : {display: 'none'}} onClick={()=>{this.setState({activeHeader: 2})}} className={activeHeader===2 ? styles.plansTopHeader+' '+styles.plansTopHeaderActive : styles.plansTopHeader}>
              <h2>AccountRight</h2> 
              <div className='pointer'>
              </div>
            </div>

            <div style={activeHeader===3 ? {display: 'block'} : {display: 'none'}} onClick={()=>{this.setState({activeHeader: 3})}} className={activeHeader===3 ? styles.plansTopHeader+' '+styles.plansTopHeaderActive : styles.plansTopHeader}> 
              <h2>AccountEdge</h2>
              <div className='pointer'>
              </div>
            </div>

          </div>




        <div className={styles.topicSection}>
          {MainStore.state.choices.map((choice, index)=>{

            return (
              <div className={styles.topicBox}>
                <div className={styles.topicBoxTop}>
                  <h4>{MainStore.state.discovery[choice]}</h4>
                </div>
                <div className={styles.topicBoxBottom}>
                  {activeHeader===1 ? (
                    <p>
                    {MainStore.state['pitchGuidanceEssentials'][MainStore.state.discovery[choice]]}
                    </p>
                    ) : ''}

                    {activeHeader===2 ? (
                    <p>
                    {MainStore.state['pitchGuidanceAccountRight'][MainStore.state.discovery[choice]]}
                    </p>
                    ) : ''}

                    {activeHeader===3 ? (
                    <p>
                    {MainStore.state['pitchGuidanceAccountEdge'][MainStore.state.discovery[choice]]}
                    </p>
                    ) : ''}
                </div>
              </div>
            )

          })}
        </div>


        {MainStore.state.salesPath.specialist ? (

            <div style={{marginLeft: 'auto',minWidth: 800, marginRight: 'auto'}} className={styles.topicBox}>
              <div className={styles.topicBoxTop}>
                <h4>Specialized Summary</h4>
              </div>

              <div className={styles.topicBoxBottom}>
                {MainStore.state.data.specialistSummary['1'].map((p, ind)=>{
                  return <Editable text={p} ind={ind} first='specialistClosingPitch' chosen={'1'} />
                })}
              </div>

            </div>


          ) : ''}


        <div className={styles.closingStatements}>
         <h2>
          Closing the sale…for {MainStore.state.salesPath['product']}
         </h2>

         {MainStore.state.salesPath.specialist ? (

            <div>
              <ul>
                  {MainStore.state.data.specialistClosingPitch['1'].map((p, ind)=>{
                    return <Editable text={p} ind={ind} first='specialistClosingPitch' chosen={'1'} />
                  })}
              </ul>
            </div>

          ) : (
            
            <div>
              <ul>
                {MainStore.state.data.endClosing[MainStore.state.salesPath['mission']].map((p, ind)=>{
                  return <Editable text={p} ind={ind} first='endClosing' chosen={MainStore.state.salesPath['mission']} />
                })}
              </ul>
            </div>


         

          )}

         
        </div>


          
          {activeHeader===1 ? (
              <div className={styles.plansContainer}>
                <div className={styles.plan}>
                  <div className='planTop'>
                    <h2>STARTER</h2>
                    <div className={styles.price}>
                      <span>$</span>
                      <span>25</span>
                      <span>p/m</span>
                    </div>
                    <p>Perfect for just starting up</p>
                  </div>
                  <div className='planBottom'>
                    <div className='points'>
                      <div className='point'>
                        Great for people new to accounting
                      </div>
                      <div className='point'>
                        Keep on top of GST & BAS
                      </div>
                      <div className='point'>
                        Works on both MAC & PC
                      </div>
                      <div className='point'>
                        Always up-to-date and securely backed up online
                      </div>
                      <div className='point'>
                        Payroll for one
                      </div>
                      <div className='point'>
                        MYOB BankFeeds*(25 transactions p/m)
                      </div>
                      <div className='point'>
                        Create Five invoices p/m
                      </div>
                    </div>


                  </div>
                </div>

                <div className={styles.plan +" "+styles.planActive}>
                  <div className='planTop'>
                    <h2>PAYROLL FOR ONE</h2>
                    <div className={styles.price}>
                      <span>$</span>
                      <span>40</span>
                      <span>p/m</span>
                    </div>
                    <p>Great for small businesses and sole traders</p>
                  </div>
                  <div className='planBottom'>
                    <div className='points'>
                      <div className='point'>
                        Great for people new to accounting
                      </div>
                      <div className='point'>
                        Keep on top of GST & BAS
                      </div>
                      <div className='point'>
                        Works on both MAC & PC
                      </div>
                      <div className='point'>
                        Always up-to-date and securely backed up online
                      </div>
                      <div className='point'>
                        Payroll for one
                      </div>
                      <div className='point'>
                        MYOB BankFeeds
                      </div>
                      <div className='point'>
                        Unlimited invoices
                      </div>
                    </div>

                    
                  </div>
                </div>

                <div className={styles.plan}>
                  <div className='planTop'>
                    <h2>UNLIMITED PAYROLL</h2>
                    <div className={styles.price}>
                      <span>$</span>
                      <span>50</span>
                      <span>p/m</span>
                    </div>
                    <p>For those taking care of business and payroll</p>
                  </div>
                  <div className='planBottom'>
                    <div className='points'>
                      <div className='point'>
                        Great for people new to accounting
                      </div>
                      <div className='point'>
                        Keep on top of GST & BAS
                      </div>
                      <div className='point'>
                        Works on both MAC & PC
                      </div>
                      <div className='point'>
                        Always up-to-date and securely backed up online
                      </div>
                      <div className='point'>
                        Unlimited Payroll
                      </div>
                      <div className='point'>
                        MYOB BankFeeds
                      </div>
                      <div className='point'>
                        Unlimited invoices
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            ) : ''}

            {activeHeader===2 ? (
                <div className={styles.plansContainer}>
                  <div className={styles.plan}>
                    <div className='planTop'>
                      <h2>ACCOUNTRIGHT STANDARD</h2>
                      <div className={styles.price}>
                        <span>$</span>
                        <span>61</span>
                        <span>p/m</span>
                      </div>
                      <p>For businesses that need to manage inventory</p>
                    </div>
                    <div className='planBottom'>
                      <div className='points'>
                        <div className='point'>
                          Calculate & track GST

                        </div>
                        <div className='point'>
                          Manage bills, quotes, invoices & expenses

                        </div>
                        <div className='point'>
                          Create purchase & manage suppliers

                        </div>
                        <div className='point'>
                          Track jobs & manage inventory
                        </div>
                      </div>


                    </div>
                  </div>

                  <div className={styles.plan +" "+styles.planActive}>
                    <div className='planTop'>
                      <h2>ACCOUNTRIGHT PLUS</h2>
                      <div className={styles.price}>
                        <span>$</span>
                        <span>92</span>
                        <span>p/m</span>
                      </div>
                      <p>For businesses that need to manage inventory and payroll</p>
                    </div>
                    <div className='planBottom'>
                      <div className='points'>
                        <div className='point'>
                          Calculate & track GST

                        </div>
                        <div className='point'>
                          Manage bills, quotes, invoices & expenses

                        </div>
                        <div className='point'>
                          Create purchase & manage suppliers
                        </div>
                        <div className='point'>
                          Track jobs & manage inventory

                        </div>
                        <div className='point'>
                          Bill by time

                        </div>
                        <div className='point'>
                          Pay employees, pay super & track leave
                        </div>
                      </div>

                      
                    </div>
                  </div>

                  <div className={styles.plan}>
                    <div className='planTop'>
                      <h2>ACCOUNTRIGHT PREMIER</h2>
                      <div className={styles.price}>
                        <span>$</span>
                        <span>121</span>
                        <span>p/m</span>
                      </div>
                      <p>For businesses that manage multiple company accounts</p>
                    </div>
                    <div className='planBottom'>
                      <div className='points'>
                        <div className='point'>
                          Calculate & track GST

                        </div>
                        <div className='point'>
                          Manage bills, quotes, invoices & expenses

                        </div>
                        <div className='point'>
                          Create purchase & manage suppliers

                        </div>
                        <div className='point'>
                          Track jobs & manage inventory

                        </div>
                        <div className='point'>
                          Bill by time

                        </div>
                        <div className='point'>
                          Pay employees, pay super & track leave

                        </div>
                        <div className='point'>
                          Manage 2 company accounts
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              ) : ''}

            {activeHeader===3 ? (
                <div className={styles.plansContainer}>
                  <div className={styles.plan}>
                    <div className='planTop'>
                      <h2>ACCOUNTEDGE BASIC</h2>
                      <div className={styles.price}>
                        <span>$</span>
                        <span>549</span>
                        <span>p/m</span>
                      </div>
                      <p>Mac software to manage your basic accounting needs</p>
                    </div>
                    <div className='planBottom'>
                      <div className='points'>
                        <div className='point'>
                          Issue quotes and invoices

                        </div>
                        <div className='point'>
                          Instant GST & BAS reports

                        </div>
                        <div className='point'>
                          Simplify GST calculations

                        </div>
                        <div className='point'>
                          Track payments

                        </div>
                        <div className='point'>
                          Full general ledger
                        </div>
                      </div>


                    </div>
                  </div>

                  <div className={styles.plan +" "+styles.planActive}>
                    <div className='planTop'>
                      <h2>ACCOUNTEDGE PRO</h2>
                      <div className={styles.price}>
                        <span>$</span>
                        <span>1,699</span>
                        <span>p/m</span>
                      </div>
                      <p>Accounting, inventory and payroll on a Mac</p>
                    </div>
                    <div className='planBottom'>
                      <div className='points'>
                        <div className='point'>
                          Issue quotes and invoices
                        </div>
                        <div className='point'>
                          Instant PAYG, GST & BAS reports
                        </div>
                        <div className='point'>
                          Simplify GST calculations
                        </div>
                        <div className='point'>
                          Track payments

                        </div>
                        <div className='point'>
                          Full general ledger

                        </div>
                        <div className='point'>
                          Job costing and tracking

                        </div>
                        <div className='point'>
                          Run business on the go

                        </div>
                        <div className='point'>
                          Powerful stock management

                        </div>
                        <div className='point'>
                          No hassles in calculating commissions
                        </div>
                      </div>

                      
                    </div>
                  </div>

                  <div className={styles.plan}>
                    <div className='planTop'>
                      <h2>ACCOUNTEDGE NETWORK</h2>
                      <div className={styles.price}>
                        <span>$</span>
                        <span>3,599</span>
                        <span>p/m</span>
                      </div>
                      <p>Multi-user accounting, inventory & payroll on a Mac</p>
                    </div>
                    <div className='planBottom'>
                      <div className='points'>
                        <div className='point'>
                          Issue quotes and invoices

                        </div>
                        <div className='point'>
                          Instant GST & BAS reports

                        </div>
                        <div className='point'>
                          Simplify GST calculations

                        </div>
                        <div className='point'>
                          Track payments

                        </div>
                        <div className='point'>
                          Unlimited Payroll
                        </div>
                        <div className='point'>
                          Full general ledger

                        </div>
                        <div className='point'>
                          Job costing and tracking

                        </div>
                        <div className='point'>
                          Run business on the go

                        </div>
                        <div className='point'>
                          Powerful stock management

                        </div>
                        <div className='point'>
                          No hassles in calculating commissions

                        </div>
                        <div className='point'>
                          Multi-currency support

                        </div>
                        <div className='point'>
                          Multi-user support
                        </div>

                      </div>

                      
                    </div>
                  </div>
                </div>
              ) : ''}
        </div>

        

        <div style={{marginTop: 20}} className={styles.buttonContainer}>
          <div style={{marginRight: 10}} onClick={this.change.bind(this)} className={styles.button5}>
            <span>Change Product</span>
          </div>
          <div style={{marginRight: 10}} onClick={this.next.bind(this)} className={styles.button5}>
            <span>Next</span>
          </div>
        </div>
      </div>
    );
  }
}


// <div className={styles.outcomes}>

//   {MainStore.state.choices.map((e)=>{
//               return (
//                 <div className={styles.outcome}>
//                   <div className={styles.outcomeHeader}>
//                     <h2>{MainStore.state.discovery[e]}</h2>
//                   </div>
  
//                   <div className={styles.outcomePoints}>
//                     <div className={styles.outcomePoint}>
//                       Feature A - More time and less stress when doing task
//                     </div>
//                     <div className={styles.outcomePoint}>
//                       Feature D - Less resource requirements when doing
//                     </div>
//                     <div className={styles.outcomePoint}>
//                       Feature K - See what you are doing and make better decisions
//                     </div>
//                     <div className={styles.outcomePoint}>
//                       Feature C - Allow you to do other stuff
//                     </div>
//                   </div>
//                 </div>
//                 )
//             })}
// </div>







// ADDD THIS BACK IN

//   <div className={styles.plansBottom}>
//     <h3>Features</h3>

//     <div className={styles.sortBullets}>

//      {activeHeader===1 ? (
//         <ul>
//           {MainStore.state.choices.map((choice, index)=>{
//             return (
//               <div>

//                 <div className={styles.outcomePurpleBox}>
//                   <h4 style={{textAlign: 'center'}} className={styles.bold+' '+styles.outcomePurple}>{MainStore.state.discovery[choice]}</h4>
//                 </div>
//                 {MainStore.state.featureAndBenefitAccountEssentials[MainStore.state.discovery[choice]].map((k, ind)=>{
//                   var first = k.split('-')[0]
//                   var second = k.split('-').slice(1).join('-')

//                   first = first.replace(/[{()}]/g, '')
//                   if (ind<20) {
//                     return (

//                       <li>
//                         <span className={styles.bold}>
//                           {first}
//                         </span>
//                         <span>
//                           {' - '}
//                         </span>
//                         <span>
//                           {second}
//                         </span>
//                       </li>
//                       )
//                   }
//                 })}
//               </div>
//               )
//           }) }
//         </ul>
//       ) : ''}
//      {activeHeader===2 ? (
//         <ul>
//           {MainStore.state.choices.map((choice, index)=>{
//             return (
//               <div>
//                 <div className={styles.outcomePurpleBox}>
//                   <h4 style={{textAlign: 'center'}} className={styles.bold+' '+styles.outcomePurple}>{MainStore.state.discovery[choice]}</h4>
//                 </div>
//                 {MainStore.state.featureAndBenefitAccountRight[MainStore.state.discovery[choice]].map((k, ind)=>{
//                   var first = k.split('-')[0]
//                   var second = k.split('-').slice(1).join('-')

//                   first = first.replace(/[{()}]/g, '')
//                   if (ind<20) {
//                     return (

//                       <li>
//                         <span className={styles.bold}>
//                           {first}
//                         </span>
//                         <span>
//                           {' - '}
//                         </span>
//                         <span>
//                           {second}
//                         </span>
//                       </li>
//                       )
//                   }
//                 })}
//               </div>
//               )
//           }) }
//         </ul>
//       ) : ''}
//      {activeHeader===3 ? (
//         <ul>
//           {MainStore.state.choices.map((choice, index)=>{
//             return (
//               <div>
//                 <div className={styles.outcomePurpleBox}>
//                   <h4 style={{textAlign: 'center'}} className={styles.bold+' '+styles.outcomePurple}>{MainStore.state.discovery[choice]}</h4>
//                 </div>
//                 {MainStore.state.featureAndBenefitAccountEdge[MainStore.state.discovery[choice]].map((k, ind)=>{
//                   var first = k.split('-')[0]
//                   var second = k.split('-').slice(1).join('-')

//                   first = first.replace(/[{()}]/g, '')
//                   if (ind<20) {
//                     return (

//                       <li>
//                         <span className={styles.bold}>
//                           {first}
//                         </span>
//                         <span>
//                           {' - '}
//                         </span>
//                         <span>
//                           {second}
//                         </span>
//                       </li>
//                       )
//                   }
//                 })}
//               </div>
//               )
//           }) }
//         </ul>
//       ) : ''}
//     </div>

//     <div className={styles.plansBottomLeft}>
//     </div>
//     <div className={styles.plansBottomRight}>

//     </div>
//   </div>
// </div>

// <div>
