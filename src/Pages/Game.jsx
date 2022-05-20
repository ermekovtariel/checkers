/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { BlackChecker, WhiteChecker } from '../assets/png';
import { Board } from '../components';
import { bCheksers, board, newBoard, wCheksers } from '../configs';
import { Layout } from '../Layout';

import './Game.scss';

function Game() {
  const [boardData, setBoardData] = useState(board);
  const [whiteCheksers, setWCheksers] = useState(wCheksers);
  const [blackCheksers, setBCheksers] = useState(bCheksers);
  const [chackers, setChackers] = useState();
  const [wCollection, setwCollection] = useState([]);
  const [bCollection, setbCollection] = useState([]);

  useEffect(() => {
    newBoard.map((row) => {
      row.map((cell) => {
        if (cell.item) {
          cell.item = null;
        }
      });
    });

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
  }, [whiteCheksers, blackCheksers, boardData]);

  useEffect(() => {
    if (whiteCheksers !== wCheksers || blackCheksers !== bCheksers) {
      setBoardData(newBoard);
    }
  }, [whiteCheksers, blackCheksers]);

  console.log('wCollection', wCollection);
  console.log('bCollection', bCollection);
  // console.log('blackCheksers', blackCheksers);

  return (
    <Layout>
      <div className='game_place points'>
        <h3>BLACK</h3>
        {bCollection.map((chekser) => {
          return (
            <button
              key={`${chekser.x}_${chekser.y}`}
              onClick={() => {
                setChackers(chekser);
                console.log(chekser);
              }}
              className={`${
                chackers === chekser ? 'active' : ''
              } black_chekser`}
            >
              <img src={WhiteChecker} alt='CH' />
            </button>
          );
        })}
      </div>
      <div className='game_place board'>
        <Board
          boardData={boardData}
          whiteCheksers={whiteCheksers}
          blackCheksers={blackCheksers}
          setChackers={setChackers}
          chackers={chackers}
          setWCheksers={setWCheksers}
          setBCheksers={setBCheksers}
          setwCollection={setwCollection}
          wCollection={wCollection}
          bCollection={bCollection}
          setbCollection={setbCollection}
        />
      </div>
      <div className='game_place points'>
        <h3>WHITE</h3>
        {wCollection.map((chekser) => {
          return (
            <button
              key={`${chekser.x}_${chekser.y}`}
              onClick={() => {
                setChackers(chekser);
                console.log(chekser);
              }}
              className={`${
                chackers === chekser ? 'active' : ''
              } black_chekser`}
            >
              <img src={WhiteChecker} alt='CH' />
            </button>
          );
        })}
      </div>
    </Layout>
  );
}

export default Game;
