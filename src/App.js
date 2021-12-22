import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
        disabled: false,
      });
      currentId += 1;
    }
  }

  return squares;
};

const App = () => {
  const [squares, setSquares] = useState(generateSquares());
  const [ticDict, setTicDict] = useState({});
  const [turn, setTurn] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);
  // Wave 2
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const toggleTurn = () => {
    let newTurn = '';
    if (turn === PLAYER_1) {
      newTurn = PLAYER_2;
    } else {
      newTurn = PLAYER_1;
    }
    setTurn(newTurn);
  };

  const onClickCallback = (squareID) => {
    const newSquares = [...squares];
    newSquares.forEach((row) => {
      row.forEach((square) => {
        if (square.id === squareID && square.value === '') {
          square.value = turn;
          ticDict[squareID] = turn;
        }
      });
    });
    setSquares(newSquares);
    toggleTurn();

    let someoneWon = checkForWinner();
    if (someoneWon) {
      setWinner(someoneWon);
      squares.forEach((row) => {
        row.map((square) => {
          if (square.value == '') {
            square.disabled = true;
          }
        });
      });
    }
  };

  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go across each row to see if
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if
    //    all three squares have the same value.
    /* we need to update dict each click and then check 
    
    012, 345, 678 horizontal winners
    036, 147, 258 vertical winners
    048, 246 diagonal winners */

    let winner = null;
    if (ticDict[0] == ticDict[1] && ticDict[1] == ticDict[2]) {
      winner = ticDict[0];
    } else if (ticDict[3] == ticDict[4] && ticDict[4] == ticDict[5]) {
      winner = ticDict[3];
    } else if (ticDict[6] == ticDict[7] && ticDict[6] == ticDict[8]) {
      winner = ticDict[6];
    } else if (ticDict[0] == ticDict[3] && ticDict[3] == ticDict[6]) {
      winner = ticDict[0];
    } else if (ticDict[1] == ticDict[4] && ticDict[4] == ticDict[7]) {
      winner = ticDict[1];
    } else if (ticDict[2] == ticDict[5] && ticDict[5] == ticDict[8]) {
      winner = ticDict[2];
    } else if (ticDict[0] == ticDict[4] && ticDict[4] == ticDict[8]) {
      winner = ticDict[0];
    } else if (ticDict[2] == ticDict[4] && ticDict[4] == ticDict[6]) {
      winner = ticDict[2];
    } else if (Object.keys(ticDict).length === 9) {
      winner = 'tie';
    }
    return winner;
  };

  const resetGame = () => {
    setTicDict({});
    setSquares(generateSquares());
    setTurn(PLAYER_1);
    setWinner(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board
          squares={squares}
          onClickCallback={onClickCallback}
        />
      </main>
    </div>
  );
};

export default App;
