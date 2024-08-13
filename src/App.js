import './App.css';
import Box from "./component/box";
import { useState } from 'react';
//1. 박스 2개 tittle, img, result
//2. 가위 바위 보 버튼
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 버튼을 클릭하면 컴퓨터는 랜덤한 값이 박스에 보임
//5. 3, 4의 결과를 비교하여 승패를 따진다
//6. 이기면 초록색 지면 빨간색 비기면 검정색
const choice = {
  rock: {
    name: "Rock",
    img: "https://img.lovepik.com/png/20231113/cute-grey-rock-character-with-big-eyes-vector-clipart-cartoon_581256_wh860.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://png.pngtree.com/png-vector/20240723/ourlarge/pngtree-cute-cartoon-kawaii-scissors-png-image_12970721.png"
  },
  paper: {
    name: "Paper",
    img: "https://m.ezendolls.com/web/product/big/201810/50f38c369450ccb569b1d4ff229ee55f.jpg"
  }
}
function App() {
  const [userSelect, setUserSelect]= useState(null)
  const [computerSelect,setComputerSelect] = useState(null)
  const [result, setResult]=useState("")
  const [result2, setResult2]=useState("")
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice))
    setResult2(judgement2(choice[userChoice], computerChoice))
  }
const judgement = (user, computer) =>{
  console.log("u", user, "c",computer)
  if(user.name === computer.name){
    return "tie"
  }else if(user.name ==="Rock")return computer.name==="Scissors"?"win":"lose"
  else if(user.name ==="Scissors")return computer.name==="Paper"?"win":"lose"
  else if(user.name ==="Paper")return computer.name==="Rock"?"win":"lose"    
}

const judgement2 = (user, computer) =>{
  console.log("u", user, "c",computer)
  if(user.name === computer.name){
    return "tie"
  }else if(user.name ==="Rock")return computer.name==="Scissors"?"lose":"win"
  else if(user.name ==="Scissors")return computer.name==="Paper"?"lose":"win"
  else if(user.name ==="Paper")return computer.name==="Rock"?"lose":"win"    
}

  const randomChoice=()=>{
    let itemArray = Object.keys(choice) //객체의 키 값만 뽑아서 배열로 만들어준다.
    console.log("key",itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length)
    let final = itemArray[randomItem]
    return choice[final]
  }
  return <div className='container'>
    <div className='main2'>
      <Box title="You" item={userSelect} result={result}/>
      <Box title="Computer" item={computerSelect} result={result2}/>
    </div>
    <div className='main'>
      <button className='' onClick={()=>play("scissors")}>가위</button>
      <button className='' onClick={()=>play("rock")}>바위</button>
      <button className='' onClick={()=>play("paper")}>보</button>
    </div>
  </div>;
}

export default App;
