//TODO: STEP 1 - Import the useState hook.

import "./App.css";

import React, {useState} from "react";

import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [team1, setTeam1] = useState('Lions');
  const [homeScore, setHomeScore] = useState(0);
  
  const [team2, setAwayTeam] = useState('Tigers');
  const [awayScore, setAwayScore] = useState(0);
  
  let homeTD = () =>{
    //console.log("homeScoreClick");
    setHomeScore(homeScore + 6)
  }

  let homeFG = ()=>{
    setHomeScore(homeScore + 1)
  } 
  let awayTD = ()=>{
    setAwayScore(awayScore + 6)
  } 
  let awayFG = ()=>{
    setAwayScore(awayScore + 1)
  }
  // const [renderCounter, setRenderCounter] =  React.useState(0);
  
  // React.useEffect(()=> {
  //   setTeam1('Lions')
  //   setRenderCounter(renderCounter + 1)
  // }, [])
  // console.log(team1)
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{team1}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{team2}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" 
          onClick = {homeTD} 
          >Home Touchdown</button>
          <button className="homeButtons__fieldGoal "
          onClick = {homeFG}
          >Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"
          onClick = {awayTD}
          >Away Touchdown</button>
          <button className="awayButtons__fieldGoal"
          onClick = {awayFG}
          >Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
