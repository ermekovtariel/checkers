/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React from 'react';
import { Board } from '../components';
import { bCheksers, board, newBoard, wCheksers } from '../configs';
import { Layout } from '../Layout';

import './Game.scss';

function Game() {
  const [boardData, setBoardData] = React.useState(board);
  const [whiteCheksers, setWCheksers] = React.useState(wCheksers);
  const [blackCheksers, setBCheksers] = React.useState(bCheksers);
  const [chackers, setChackers] = React.useState();

  React.useEffect(() => {
    if (whiteCheksers !== wCheksers || blackCheksers !== bCheksers) {
      setBoardData(newBoard);
    }

    boardData.map((row, rowIdx) => {
      row.map((cell, cellIdx) => {
        blackCheksers.map((item) => {
          if (cell.x === item.x && cell.y === item.y) {
            board[rowIdx][cellIdx] = cell;
            board[rowIdx][cellIdx].item = item;
          }
        });
        whiteCheksers.map((item) => {
          if (cell.x === item.x && cell.y === item.y) {
            board[rowIdx][cellIdx] = cell;
            board[rowIdx][cellIdx].item = item;
          }
        });
      });
    });
  }, [whiteCheksers, blackCheksers]);

  return (
    <Layout>
      <div className='game_place points'>BLACK</div>
      <div className='game_place'>
        <Board
          boardData={boardData}
          whiteCheksers={whiteCheksers}
          blackCheksers={blackCheksers}
          setChackers={setChackers}
          chackers={chackers}
          setWCheksers={setWCheksers}
          setBCheksers={setBCheksers}
        />
      </div>
      <div className='game_place points'>WHITE</div>
    </Layout>
  );
}

export default Game;
