import React, { Component } from 'react'

export class CounterClass extends Component {
    
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

  render() {
    return (
      <>
        <div>Counte = {this.state.count}</div>
        <button onClick={()=> this.setState({count:this.state.count+1})}>Increment</button>
        <button onClick={()=> this.setState({count:this.state.count-1})}>Decrement</button>
      </>
    )
  }
}

export default CounterClass