/* eslint-disable react/prop-types */
import { useState } from "react";

/* eslint-disable no-unused-vars */
const TURNS = {
  X: "x",
  O: "o",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handlerClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handlerClick} className={className}>
      {children}
    </div>
  );
};

const getWinner = (boardWinner) =>{
  const horizontalWinner = boardWinner[0]




}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index]) return

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  return (
    <main className="board">
      <h1> Tic Tac Toe </h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
