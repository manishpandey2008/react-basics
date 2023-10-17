import React, { Component } from 'react'

export default class MousePointerClass extends Component {

    constructor(props){
        super(props);
        this.state={
            x:0,
            y:0
        }
    }

    setMousePosition=(e)=>{
        this.setState({x:e.clientX,y:e.clientX})
    }

    componentDidMount(){
        window.addEventListener("mousemove",this.setMousePosition)
    }

    componentWillUnmount(){
        window.removeEventListener("mousemove",this.setMousePosition)
    }

  render() {
    return (
      <div>
        {`Mouse Position : ${this.state.x} and ${this.state.y}`}
      </div>
    )
  }
}
