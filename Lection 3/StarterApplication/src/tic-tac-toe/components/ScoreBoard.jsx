import React, { useState } from "react";

import "./ScoreBoard.css";

export const ScoreBoard = ({ player, score,isActive }) => {
  
  const [playerName, setPlayerName]= useState(player);
const [isEditing, setIsEditing]= useState(false);
const handleEditingName = () => {
  // setIsEditing(!isEditing)
   // react schedules a time for executing this state change
  // It gets updated in a async way
  setIsEditing((prev) => !prev);
  // react updates the state instantly
  // It gets updated in a synchronous way
}


const handleChangeName = (e) => {
  setPlayerName(e.target.value)
}

console.log(playerName)

  const playerContent = isEditing ? (<><input  defaultValue={playerName} onChange={(e) => handleChangeName(e)} type="text" /></>): (<>{playerName} - {score}</>) ;


  return (
    // <div className="scoreboard">
      <span className={`score ${player.toLowerCase()}-score ${!isActive && "inactive"}`}>
        {playerContent}
        <button className="edit" onClick={handleEditingName}>{isEditing ? 'Save': 'Edit'}</button>
      </span>
      
      // <span className={`score o-score ${xPlaying && "inactive"}`}>
      //   O - {OScore}
      // </span> 
    //  </div>
  );
};
