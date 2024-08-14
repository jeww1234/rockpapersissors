import React, { Component } from 'react'

export default class BoxClass extends Component {

    constructor(){
        super();
        this.result = "";
    }
    getResult =()=>{
        if (
            this.props.title === "Computer" &&
            this.props.result !== "tie" &&
            this.props.result !== ""    
          ) {
            this.result = this.props.result === "win" ? "lose" : "win"
          } else {
            this.result = this.props.result
          }
    }


  render() {
    this.getResult();
    return (
        <div className={`main row ${this.result}`}>
        <h1>{this.props.title}</h1>
        <h2>{this.props.item && this.props.item.name}</h2>
        <div className="img-box33">
        <img
          className="img-item"
          src={this.props.item && this.props.item.img}
          alt=""
        /></div>
        <h3>{this.result}</h3>
      </div>
    )
  }
}
