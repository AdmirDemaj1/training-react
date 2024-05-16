import React from "react";

export const ScoreBoard = ({scores, xPlaying}) => {
    const {XScore, OScore} = scores;
    return (
       <div className="scoreboard">
        <span className={`score x-score ${!xPlaying && "inactive"}`}> X - {XScore}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>O - {OScore}</span>
       </div>
    )
}