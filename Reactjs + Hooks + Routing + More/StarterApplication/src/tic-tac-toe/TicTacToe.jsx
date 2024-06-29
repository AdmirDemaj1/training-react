import { useState } from "react";
import "./TicTacToe.css";
import { Board } from "./components/Board";
import { ScoreBoard } from "./components/ScoreBoard";

//Possible win conditions
const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//Single responsibility principle
function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ XScore: 0, OScore: 0 });

  const handleBoxClick = (index) => {
    // Update the board based on the player playing
    const updatedBoard = board.map((value, idx) => {
      if (index === idx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoard(updatedBoard);

    // Find out who is the winner for the round
    const winner = checkWinner(updatedBoard);

    //Update Score based on the winner
    if (winner) {
      if (winner === "O") {
        let { OScore } = scores;
        OScore += 1;
        setScores({ ...scores, OScore });

        // Create a function which is going to reset the board so it is reusable
        setBoard(Array(9).fill(null));
      } else {
        let { XScore } = scores;
        XScore += 1;
        setScores({ ...scores, XScore });
        setBoard(Array(9).fill(null));
      }
    }
// Check if all the buttons were clicked
    const allBoxChecked = updatedBoard.every((element) => element !== null)


    console.log("allBoxChecked",allBoxChecked)


    if(allBoxChecked && !winner){
      setBoard(Array(9).fill(null))
    }
    



    //Check if all the button were clicked
    const allBoxesFilled = updatedBoard.every((element) => element !== null);

    //Check if all boxes were clicked and we dont have any winner
    //Which means it is a draw and we need to reset the playing board
    if (allBoxesFilled && !winner) {
      setBoard(Array(9).fill(null));
    } 
    // Update player for the next turn
    setXPlaying(!xPlaying);
  };

  //Check if we have any winner
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
  };

  return (
    <div>
      {/* <ScoreBoard scores={scores} xPlaying={xPlaying} /> */}
       <div className="scoreboard"> 
      <ScoreBoard player="X" score={scores.XScore} isActive={xPlaying} /> 
      <ScoreBoard player="O" score={scores.OScore} isActive={!xPlaying} /> 
      </div>
      <Board board={board} onClick={handleBoxClick} />
    </div>
  );
}

export default TicTacToe;
