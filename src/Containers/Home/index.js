import React from 'react';
import CustomerDetails from '../CustomerDetails'

export default class index extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={()=>{
        // console.log(this.props.history.push('/step'))
      }}>


        <CustomerDetails />

      </div>
    );
  }
}
