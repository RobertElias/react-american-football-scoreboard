import React from 'react'

const Score = (props) => {

    console.log(props.firstClassName);
    return (
        
        <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button 
        className={`${props.firstClassName}${props.secondClassName}`} 
        onClick = {props.TD} 
        >{props.side} Touchdown
        </button>
        
        <button 
        className={`${props.firstClassName}${props.thirdClassName}`}
        onClick = {props.FG}
        >{props.side} Field Goal</button>
      </div>
      
       
    )
}

export default Score