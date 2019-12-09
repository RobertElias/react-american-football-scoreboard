//TODO: STEP 1 - Import the useState hook.

import "./App.css";

import React, {useState} from "react";

import BottomRow from "./BottomRow";
import Score from './components/Score'

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [team1, setTeam1] = useState('Lions');
  const [homeScore, setHomeScore] = useState(0);
  
  const [team2, setAwayTeam] = useState('Tigers');
  const [awayScore, setAwayScore] = useState(0);
  
  // click handler for home team
  let homeTD = () =>{
    //console.log("homeTD");
    setHomeScore(homeScore + 7)
  }

  let homeFG = ()=>{
    setHomeScore(homeScore + 3)
  } 
  
  //click handler for away team
  let awayTD = ()=>{
    setAwayScore(awayScore + 7)
  } 
  let awayFG = ()=>{
    setAwayScore(awayScore + 3)
  }
  
  
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

      <Score 
        TD={homeTD}
        FG={homeFG}
        firstClassName={"homeButtons"}
        secondClassName={"_touchdown"}
        thirdClassName={"-fieldGoal"}
        side= {"Home"}
      />


      <Score 
        TD={awayTD}
        FG={awayFG}
        firstClassName={"homeButtons"}
        secondClassName={"_touchdown"}
        thirdClassName={"-fieldGoal"}
        side={"Away"}
      />
      
        
        
      </section>
    </div>
  );
}

export default App;
