import React from 'react';
import CustomerDetails from '../CustomerDetails'

export default class index extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div onClick={()=>{
        // console.log(this.props.history.push('/step'))
      }}>


        <CustomerDetails push={this.props.history.push} />

      </div>
    );
  }
}
