import React, { Component } from "react";
import BoxClass from "./component/BoxClass";
import "./App.css";

const choice = {
  rock: {
    name: "Rock",
    img: "https://img.lovepik.com/png/20231113/cute-grey-rock-character-with-big-eyes-vector-clipart-cartoon_581256_wh860.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://png.pngtree.com/png-vector/20240723/ourlarge/pngtree-cute-cartoon-kawaii-scissors-png-image_12970721.png",
  },
  paper: {
    name: "Paper",
    img: "https://m.ezendolls.com/web/product/big/201810/50f38c369450ccb569b1d4ff229ee55f.jpg",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키 값만 뽑아서 배열로 만들어준다.
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  judgement = (user, computer) => {
    console.log("u", user, "c", computer);
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  render() {
    return (
      <div className="container">
        <div className="main2">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button className="col-1.5" onClick={() => this.play("scissors")}>
            가위
          </button>
          <button className="col-1.5" onClick={() => this.play("rock")}>
            바위
          </button>
          <button className="col-1.5" onClick={() => this.play("paper")}>
            보
          </button>
        </div>
      </div>
    );
  }
}
