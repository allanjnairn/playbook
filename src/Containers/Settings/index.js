import React from 'react';
import styles from './Settings.css'
import Missions from '../../Components/Missions'


export default class index extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <Missions />
      </div>
    );
  }
}