/* eslint-disable array-callback-return */
import React from 'react';
import { alfabeth, numbers } from '../configs';
import { BlackChecker, WhiteChecker } from '../assets/png';

function Board({
  boardData,
  whiteCheksers,
  blackCheksers,
  setChackers,
  chackers,
  setWCheksers,
  setBCheksers,
  // setBoardData,
}) {
  function changePlace(place) {
    console.log(place);
    let newWhiteCheksers = [];
    let newBlackCheksers = [];
    boardData.map((boardPlace, rowIdx) => {
      let s = [];
      boardPlace?.map((boardPlace, cellIdx) => {
        if (boardPlace.x === place.x && boardPlace.y === place.y) {
          let obj = {};
          obj.color = place.color;
          obj.item = chackers ? chackers : null;
          //
          obj.text = place.text;
          obj.value = place.value;
          obj.x = place.x;
          obj.y = place.y;
          //
          whiteCheksers.map((oldchacker) => {
            let chackerObj = {};
            if (chackers && place.item === null) {
              if (chackers.id === oldchacker.id) {
                if (!chackers.q) {
                  if (numbers[rowIdx] - 1 === chackers.y) {
                    // !
                    if (
                      chackers.x + 1 === place.x ||
                      chackers.x - 1 === place.x
                    ) {
                      chackerObj.x = place.x;
                      chackerObj.y = place.y;
                      chackerObj.id = oldchacker.id;
                      chackerObj.group = oldchacker.group;

                      newWhiteCheksers.push(chackerObj);
                    } else {
                      chackerObj = oldchacker;
                      newWhiteCheksers.push(chackerObj);
                    }
                    // !
                  } else {
                    chackerObj = oldchacker;
                    newWhiteCheksers.push(chackerObj);
                  }
                } else {
                  chackerObj.x = place.x;
                  chackerObj.y = place.y;
                  chackerObj.id = oldchacker.id;
                  chackerObj.group = oldchacker.group;

                  newWhiteCheksers.push(chackerObj);
                }
              } else {
                chackerObj = oldchacker;
                newWhiteCheksers.push(chackerObj);
              }
            }
          });

          blackCheksers.map((oldchacker) => {
            let chackerObj = {};
            if (chackers && place.item === null) {
              if (chackers.id === oldchacker.id) {
                if (!chackers.q) {
                  if (numbers[rowIdx] + 1 === chackers.y) {
                    if (
                      chackers.x + 1 === place.x ||
                      chackers.x - 1 === place.x
                    ) {
                      chackerObj.x = place.x;
                      chackerObj.y = place.y;
                      chackerObj.id = oldchacker.id;
                      chackerObj.group = oldchacker.group;
                      newBlackCheksers.push(chackerObj);
                    } else {
                      chackerObj = oldchacker;
                      newBlackCheksers.push(chackerObj);
                    }
                  } else {
                    chackerObj = oldchacker;
                    newBlackCheksers.push(chackerObj);
                  }
                } else {
                  chackerObj.x = place.x;
                  chackerObj.y = place.y;
                  chackerObj.id = oldchacker.id;
                  chackerObj.group = oldchacker.group;

                  newWhiteCheksers.push(chackerObj);
                }
              } else {
                chackerObj = oldchacker;
                newBlackCheksers.push(chackerObj);
              }
            }
          });
          s.push(obj);
        } else {
          s.push(boardPlace);
        }
      });
      // f.push(s);
    });

    setWCheksers(newWhiteCheksers[0] ? newWhiteCheksers : whiteCheksers);
    setBCheksers(newBlackCheksers[0] ? newBlackCheksers : blackCheksers);
    // setBoardData(f);
  }

  return (
    <>
      {boardData.map((row, idx) => {
        return (
          <div className='row' key={idx}>
            <div
              key={`${numbers[idx]}_${idx}`}
              className='board_box board_box_numbers'
              style={{
                borderRight: '1px solid #fff',
                borderTopRightRadius: '0',
                borderBottomRightRadius: '0',
              }}
            >
              {numbers[idx]}
            </div>
            {row.map((column) => {
              return (
                <div
                  className='board_box'
                  id={column.value}
                  onClick={() => changePlace(column)}
                  style={{ background: column.color, color: column.text }}
                  key={column.value}
                >
                  {whiteCheksers.map((chekser) => {
                    if (column.x === chekser.x && column.y === chekser.y) {
                      return (
                        <button
                          key={`${chekser.x}_${chekser.y}`}
                          onClick={() => {
                            setChackers(chekser);
                            console.log(chekser);
                          }}
                          className={`${
                            chackers === chekser ? 'active' : ''
                          } white_chekser`}
                        >
                          <img src={BlackChecker} alt='CH' />
                        </button>
                      );
                    }
                  })}
                  {blackCheksers.map((chekser) => {
                    if (column.x === chekser.x && column.y === chekser.y) {
                      return (
                        <button
                          onClick={() => {
                            setChackers(chekser);
                            console.log(chekser);
                          }}
                          key={`${chekser.x}_${chekser.y}`}
                          className={`${
                            chackers === chekser ? 'active' : ''
                          } black_chekser`}
                        >
                          {chekser.quin && 'W'}
                          <img src={WhiteChecker} alt='CH' />
                        </button>
                      );
                    }
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
      <div className='row'>
        <div className='board_box board_box_article'>_</div>
        {alfabeth.map((item) => (
          <div
            style={{
              borderTop: '1px solid #fff',
              borderTopRightRadius: '0',
              borderTopLeftRadius: '0',
            }}
            key={item}
            className='board_box board_box_alfabeth'
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default Board;
