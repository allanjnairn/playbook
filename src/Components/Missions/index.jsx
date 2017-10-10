import React from 'react';
import styles from './Missions.css'
import MainStore from '../../Stores/MainStore'
import axios from 'axios'



export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: []
    }
  }

  componentWillMount() {
    axios.get(process.env.PUBLIC_URL+'mission', {headers: {"authorization" : 'Bearer '+window.sessionStorage.accessToken}}).then((result)=>{
      console.log('result', result)
      this.setState({missions: result.data})
    }).catch((err)=>{
      console.log('error', err)
    })
  }

  csv() {
    const {missions} = this.state


      console.log(missions)

      var obj = {

      }

      missions.map((e, ind)=>{
        obj[ind] = e
      })

      console.log(obj)

      // obj = JSON.stringify(obj)
      const items = missions
      const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
      const header = Object.keys(items[0])
      let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
      csv.unshift(header.join(','))
      csv = csv.join('\r\n')

      console.log(csv)


          var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
      //IE11 & Edge
      if (navigator.msSaveBlob) {
          navigator.msSaveBlob(csvData, 'Missions');
      } else {
          //In FF link must be added to DOM to be clicked
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(csvData);
          link.setAttribute('download', 'Missions');
          document.body.appendChild(link);    
          link.click();
          document.body.removeChild(link);    
      }
  }



  render() {
    const {missions} = this.state


    return (
      <div className={styles.missionContainer}>
        <h2>Sales Missions</h2>
        <span onClick={this.csv.bind(this)}>Download as CSV</span>


        <div className={styles.missionInner}>
          {missions.map((e)=>{
            return (
              <div className={styles.mission}>
                <div>
                  <div>
                    Sales Person: <span>{e.email}</span>
                  </div>
                  <div>
                    Client ID: <span>{e.clientID}</span>
                  </div>
                  <div>
                    Mission Team: <span>{e.missionTeam}</span>
                  </div>
                  <div>
                    Industry: <span>{e.industry}</span>
                  </div>
                </div>
                <div>
                  <div>
                    Product: <span>{e.product}</span>
                  </div>
                  <div>
                    Result: <span>{e.result}</span>
                  </div>
                  <div>
                    Target Points: <span>{e.targetPoints}</span>
                  </div>
                  <div>
                    How Helpful: <span>{e.help}</span>
                  </div>
                </div>

              </div>
              )
          })}

        </div>
      </div>
    );
  }
}
