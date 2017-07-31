import React from 'react';

export default class index extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={()=>{
        console.log(this.props.history.push('/step'))
      }}>
      	home

      </div>
    );
  }
}
