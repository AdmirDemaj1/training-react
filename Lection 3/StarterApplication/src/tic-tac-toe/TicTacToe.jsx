import { useState } from "react";
import "./TicTacToe.css";
import { Board } from "./components/Board";
import { ScoreBoard } from "./components/ScoreBoard";
//Single responsibility principle
  function TicTacToe() {

    const WIN_CONDITIONS = [
      [0, 1 ,2 ],[3, 4 ,5],[6,7 ,8],
      [0,3 ,6 ],[1, 4 ,7],[2,5 ,8],
      [0, 4, 8  ],[2, 4, 6]
    ]

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xPlaying, setXPlaying] = useState(true)
    const [scores, setScores] = useState({XScore: 0, OScore: 0})

    console.log({board})

    const handleBoxClick = (index) => {
      // Update the board based on the player playing
      const updatedBoard = board.map((value, idx) => {
        if(index === idx){
          return xPlaying ? "X": "O"
        } else {
          return value;
        }
      })
      setBoard(updatedBoard);


      // Find out who is the winner for the round
      const winner = checkWinner(updatedBoard);

      //Update Score based on the winner
      if(winner){
       
        if(winner === "O"){
            let {OScore} = scores;
            OScore +=1;
            setScores({...scores, OScore})

            // Create a function which is going to reset the board so it is reusable
            setBoard(Array(9).fill(null))
        }else {
          let {XScore} = scores;
          XScore +=1;
          setScores({...scores, XScore})
          setBoard(Array(9).fill(null))
        }
      }

      console.log("winner",winner)
      // Update player for the next turn
      setXPlaying(!xPlaying)
    }

    
    console.log("score",scores)

    const checkWinner = (board) => {
      for(let i=0; i < WIN_CONDITIONS.length; i++){
        const [x, y , z] = WIN_CONDITIONS[i];
        if(board[x] && board[x] === board[y] && board[y]===board[z])
          {
            return board[x]
          }
      }

    }

    console.log("board", board)

    return  (<div> 
      <ScoreBoard scores={scores} xPlaying={xPlaying}/>
      <Board board={board} onClick={handleBoxClick}/>
       
      </div>  
    )
  }
  
  export default TicTacToe;