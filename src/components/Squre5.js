import React, { Component } from 'react'

export default class Squre5 extends Component {
  render() {
    return (
      <div>
        {
          this.props.clicked ? <button className="squre">{this.props.sign}</button> :<button className="squre" onClick={this.props.onclick}>{this.props.sign}</button> 
        }
      </div>
    )
  }
}
