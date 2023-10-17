import React, { Component } from 'react'

export default class CounterByClass extends Component {

    constructor(props){
        super(props);
        this.state={
            count : 0
        }
    }

    componentDidMount(){
        this.interval=setInterval(this.setTimeOutCounter ,1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    setTimeOutCounter=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

  render() {
    return (
     <h2>{this.state.count}</h2>
    )
  }
}
