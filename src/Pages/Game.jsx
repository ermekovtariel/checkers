/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React from 'react';
import { alfabeth, bCheksers, board, numbers, wCheksers } from '../configs';
import { Layout } from '../Layout';

import './Game.scss';

function Game() {
  const [boardData, setBoardData] = React.useState(board);
  const [whiteCheksers, setWCheksers] = React.useState(wCheksers);
  const [blackCheksers, setBCheksers] = React.useState(bCheksers);

  React.useEffect(() => {
    setBoardData(boardData);
  }, [board, whiteCheksers]);

  const bordComponent = boardData.map((row, idx) => {
    return (
      <div className='row' key={idx}>
        <div
          key={`${numbers[idx]}_${idx}`}
          className='board_box board_box_numbers'
        >
          {numbers[idx]}
        </div>
        {row.map((column) => {
          return (
            <div
              className='board_box'
              id={column.value}
              onClick={() => console.log({ x: column.x, y: column.y })}
              style={{ background: column.color, color: column.text }}
              key={column.value}
            >
              {whiteCheksers.map((chekser) => {
                if (column.x === chekser.x && column.y === chekser.y) {
                  return (
                    <button
                      key={`${chekser.x}_${chekser.y}`}
                      onClick={() => console.log('chekserW=>', chekser)}
                      className='white_chekser'
                    >
                      W
                    </button>
                  );
                }
              })}
              {blackCheksers.map((chekser) => {
                if (column.x === chekser.x && column.y === chekser.y) {
                  return (
                    <button
                      onClick={() => console.log('chekserB=>', chekser)}
                      key={`${chekser.x}_${chekser.y}`}
                      className='black_chekser'
                    >
                      B
                    </button>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <Layout>
      <div className='game_place points_black'>BLACK</div>
      <div className='game_place'>
        {bordComponent}
        <div className='row'>
          <div className='board_box board_box_article'>_</div>
          {alfabeth.map((item) => (
            <div key={item} className='board_box board_box_alfabeth'>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className='game_place points_white'>WHITE</div>
    </Layout>
  );
}

export default Game;
