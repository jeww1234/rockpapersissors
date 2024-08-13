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
      <img
        className="img-item"
        src={props.item && props.item.img}
        alt=" "
      />
      <h2>{result}</h2>
    </div>
  );
};
export default Box;
