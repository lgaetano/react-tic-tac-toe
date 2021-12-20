import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
};

const App = () => {
  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());

  // Wave 2
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const onClickCallback = (squareID) => {
    const newSquares = [...squares];
    // console.log('new squares:', newSquares);
    /*[[] [] []] */
    newSquares.forEach((row) => {
      row.forEach((square) => {
        if (square.id === squareID) {
          square.value = PLAYER_1;
        }
      });
    });
    setSquares(newSquares);
    // console.log('we made squares');
    // console.log(newSquares);
    // console.log(newSquares);
  };

  const checkForWinner = (tic_dict) => {
    // tic_dict = {
    //   0: '',
    //   1: '',
    //   2: '',
    //   3: '',
    //   4: '',
    //   5: '',
    //   6: '',
    //   7: '',
    //   8: '',
    // };
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if
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
  };

  const resetGame = () => {
    // Complete in Wave 4
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
};

export default App;
