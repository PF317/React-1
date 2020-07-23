// stateful component
import React, { Component } from 'react';

class Hello extends Component {
   state = {
       formal: true
   };

   swapper = () => {
       console.log('swapping')
       this.setState({
           formal: !this.state.formal
       })
   }
   
    render(){
        return (
        <React.Fragment>
       {this.state.formal ?
       <h1>Hello World from {this.props.userInfo.firstName + ' ' + this.props.userInfo.lastName}</h1> :
       <h1>Hi!</h1>
       } 
       
        <button onClick={this.swapper}>Click Here!</button>
        </React.Fragment>
        )
    }

}

export default Hello;