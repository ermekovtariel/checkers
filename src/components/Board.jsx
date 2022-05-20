/* eslint-disable no-mixed-operators */
/* eslint-disable array-callback-return */
import React from 'react';
import { alfabeth, board, numbers } from '../configs';
import { BlackChecker, WhiteChecker } from '../assets/png';

function Board({
  boardData,
  whiteCheksers,
  blackCheksers,
  setChackers,
  chackers,
  setWCheksers,
  setBCheksers,
  setwCollection,
  setbCollection,
  wCollection,
  bCollection,
  // clonedArray,
  // setBoardData,
}) {
  // React.useEffect(() => {
  //   newBoard.map((row) => {
  //     row.map((cell) => {
  //       if (cell.item) {
  //         cell.item = null;
  //       }
  //     });
  //   });
  // }, [whiteCheksers, blackCheksers]);

  function changePlace(place) {
    // let clonedArray = JSON.parse(JSON.stringify(board));
    // const clonedArray = board.map((a) => ({ ...a }));
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
                  } else if (
                    place.y - 2 === chackers.y ||
                    place.y + 2 === chackers.y
                  ) {
                    // ////////////////////////////////////////////
                    if (board[rowIdx + 1][cellIdx + 1].item) {
                      setwCollection([
                        ...wCollection,
                        boardData[rowIdx + 1][cellIdx + 1].item,
                      ]);

                      let array = blackCheksers;
                      let indexa = array.indexOf(
                        boardData[rowIdx + 1][cellIdx + 1].item
                      );

                      delete array[indexa];

                      console.log(1);
                      chackerObj.x = place.x;
                      chackerObj.y = place.y;
                      chackerObj.id = oldchacker.id;
                      chackerObj.group = oldchacker.group;
                      newWhiteCheksers.push(chackerObj);
                    } else if (board[rowIdx + 1][cellIdx - 1].item) {
                      setwCollection([
                        ...wCollection,
                        boardData[rowIdx + 1][cellIdx - 1].item,
                      ]);
                      let array = blackCheksers;
                      let indexa = array.indexOf(
                        boardData[rowIdx + 1][cellIdx - 1].item
                      );

                      delete array[indexa];

                      console.log(1);
                      chackerObj.x = place.x;
                      chackerObj.y = place.y;
                      chackerObj.id = oldchacker.id;
                      chackerObj.group = oldchacker.group;
                      newWhiteCheksers.push(chackerObj);
                    } else if (board[rowIdx - 1][cellIdx - 1].item) {
                      setwCollection([
                        ...wCollection,
                        boardData[rowIdx - 1][cellIdx - 1].item,
                      ]);

                      let array = blackCheksers;
                      let indexa = array.indexOf(
                        boardData[rowIdx - 1][cellIdx - 1].item
                      );

                      delete blackCheksers[indexa];

                      console.log(1);
                      chackerObj.x = place.x;
                      chackerObj.y = place.y;
                      chackerObj.id = oldchacker.id;
                      chackerObj.group = oldchacker.group;
                      newWhiteCheksers.push(chackerObj);
                    } else if (board[rowIdx - 1][cellIdx + 1].item) {
                      setwCollection([
                        ...wCollection,
                        boardData[rowIdx - 1][cellIdx + 1].item,
                      ]);
                      let array = blackCheksers;
                      let indexa = array.indexOf(
                        boardData[rowIdx - 1][cellIdx + 1].item
                      );

                      delete array[indexa];

                      console.log(1);
                      chackerObj.x = place.x;
                      chackerObj.y = place.y;
                      chackerObj.id = oldchacker.id;
                      chackerObj.group = oldchacker.group;
                      newWhiteCheksers.push(chackerObj);
                    } else {
                      chackerObj = oldchacker;
                      newWhiteCheksers.push(chackerObj);
                    }
                  } else {
                    chackerObj = oldchacker;
                    newWhiteCheksers.push(chackerObj);
                  }
                  // !
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
                    // !
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
                    // !
                  } else if (
                    place.y - 2 === chackers.y ||
                    place.y + 2 === chackers.y
                  ) {
                    // ////////////////////////////////////////////
                    // let f=board
                    // let s=board[rowIdx + 1][cellIdx + 1].item
                    if (
                      // board[rowIdx + 1][cellIdx - 1].item ||
                      board[rowIdx + 1][cellIdx + 1].item
                    ) {
                      setbCollection([
                        ...bCollection,
                        boardData[rowIdx + 1][cellIdx + 1].item,
                      ]);
                      // newBlackCheksers;
                      var removeIndex = newWhiteCheksers
                        .map(function (item) {
                          return item.id;
                        })
                        .indexOf();

                      console.log('removeIndex', removeIndex);

                      // remove object
                      newBlackCheksers.splice(removeIndex, 1);
                      // setBCheksers(
                      //   blackCheksers.map((chekser) => {
                      //     if (
                      //       chekser !== boardData[rowIdx + 1][cellIdx + 1].item
                      //     ) {
                      //       return chekser;
                      //     }
                      //   })
                      // );
                      // let clonedArray = JSON.parse(JSON.stringify(board));

                      // console.log([
                      //   ...wCollection,
                      //   clonedArray[rowIdx + 1][cellIdx + 1].item,
                      // ]);

                      console.log(1);
                      chackerObj.x = place.x;
                      chackerObj.y = place.y;
                      chackerObj.id = oldchacker.id;
                      chackerObj.group = oldchacker.group;
                      newBlackCheksers.push(chackerObj);
                    } else if (board[rowIdx + 1][cellIdx - 1].item) {
                      setbCollection([
                        ...bCollection,
                        boardData[rowIdx + 1][cellIdx - 1].item,
                      ]);

                      console.log(1);
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
                  // !
                } else {
                  chackerObj.x = place.x;
                  chackerObj.y = place.y;
                  chackerObj.id = oldchacker.id;
                  chackerObj.group = oldchacker.group;

                  newBlackCheksers.push(chackerObj);
                }
              } else {
                chackerObj = oldchacker;
                newBlackCheksers.push(chackerObj);
              }
            }
          });
          ////////////////////////////////////////////////////////////////////
          // blackCheksers.map((oldchacker) => {
          //   let chackerObj = {};
          //   if (chackers && place.item === null) {
          //     if (chackers.id === oldchacker.id) {
          //       if (!chackers.q) {
          //         if (numbers[rowIdx] + 1 === chackers.y) {
          //           // !
          //           if (
          //             chackers.x + 1 === place.x ||
          //             chackers.x - 1 === place.x
          //           ) {
          //             chackerObj.x = place.x;
          //             chackerObj.y = place.y;
          //             chackerObj.id = oldchacker.id;
          //             chackerObj.group = oldchacker.group;

          //             newBlackCheksers.push(chackerObj);
          //           } else {
          //             chackerObj = oldchacker;
          //             newBlackCheksers.push(chackerObj);
          //           }
          //           // !
          //         } else if (
          //           (chackers.x + 2 === place.x &&
          //             numbers[rowIdx] === chackers.y &&
          //             boardData[rowIdx][cellIdx].item) ||
          //           (chackers.x - 2 === place.x &&
          //             numbers[rowIdx] === place.y &&
          //             boardData[rowIdx][cellIdx].item)
          //         ) {
          //           chackerObj.x = place.x;
          //           chackerObj.y = place.y;
          //           chackerObj.id = oldchacker.id;
          //           chackerObj.group = oldchacker.group;

          //           newBlackCheksers.push(chackerObj);
          //           // ! setwCollection(boardData[rowIdx][cellIdx].item);
          //         } else {
          //           chackerObj = oldchacker;
          //           newBlackCheksers.push(chackerObj);
          //         }
          //         // !
          //       } else {
          //         chackerObj.x = place.x;
          //         chackerObj.y = place.y;
          //         chackerObj.id = oldchacker.id;
          //         chackerObj.group = oldchacker.group;

          //         newBlackCheksers.push(chackerObj);
          //       }
          //     } else {
          //       chackerObj = oldchacker;
          //       newBlackCheksers.push(chackerObj);
          //     }
          //   }
          // });

          // blackCheksers.map((oldchacker) => {
          //   let chackerObj = {};
          //   if (chackers && place.item === null) {
          //     if (chackers.id === oldchacker.id) {
          //       if (!chackers.q) {
          //         if (numbers[rowIdx] + 1 === chackers.y) {
          //           if (
          //             chackers.x + 1 === place.x ||
          //             chackers.x - 1 === place.x
          //           ) {
          //             chackerObj.x = place.x;
          //             chackerObj.y = place.y;
          //             chackerObj.id = oldchacker.id;
          //             chackerObj.group = oldchacker.group;
          //             newBlackCheksers.push(chackerObj);
          //           } else {
          //             chackerObj = oldchacker;
          //             newBlackCheksers.push(chackerObj);
          //           }
          //         } else {
          //           chackerObj = oldchacker;
          //           newBlackCheksers.push(chackerObj);
          //         }
          //       } else {
          //         chackerObj.x = place.x;
          //         chackerObj.y = place.y;
          //         chackerObj.id = oldchacker.id;
          //         chackerObj.group = oldchacker.group;

          //         newWhiteCheksers.push(chackerObj);
          //       }
          //     } else {
          //       chackerObj = oldchacker;
          //       newBlackCheksers.push(chackerObj);
          //     }
          //   }
          // });
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
              className='board_box board_box_numbers '
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
