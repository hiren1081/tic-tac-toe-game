import React, { Component } from 'react'

export default class Squre1 extends Component {
  render() {
    return (
      <div>{
          this.props.clicked ? <button className="squre"><h1>{this.props.sign}</h1></button> :<button className="squre" onClick={this.props.onclick}><h1>{this.props.sign}</h1></button> 
        }
        
      </div>
    )
  }
}

