import React from 'react'

const Box = (props) => {
    console.log(props)
    if(props.result === "win"){
    return (
        <div className='box main row'>
            <h1>{props.title}</h1>
            <img className='img col' src={props.item && props.item.img} alt="profile"/>
            <h2>{props.result}</h2>
        </div>
    )
}else if(props.result === "lose"){
    return (
        <div className='box1 main row'>
            <h1>{props.title}</h1>
            <img className='img col' src={props.item && props.item.img} alt="profile"/>
            <h2>{props.result}</h2>
        </div>
    )
        
}else{
    return (
        <div className='box2 main row'>
            <h1>{props.title}</h1>
            <img className='img col' src={props.item && props.item.img} alt="profile"/>
            <h2>{props.result}</h2>
        </div>
    )
}
}
export default Box
