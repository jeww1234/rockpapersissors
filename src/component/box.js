import React from "react";

const Box = (props) => {
    let result
  console.log(props);
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""    
  ) {
    result = props.result === "win" ? "lose" : "win"
  } else {
    result = props.result
  }
  return (
    <div className={`main row ${result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <div className="img-box33">
      <img
        className="img-item"
        src={props.item && props.item.img}
        alt=""
      /></div>
      <h3>{result}</h3>
    </div>
  );
};
export default Box;
