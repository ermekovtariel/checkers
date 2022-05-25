/* eslint-disable no-mixed-operators */
/* eslint-disable array-callback-return */
import React from 'react';
import { alfabeth, bCheksers, board, numbers } from '../configs';
import {
  BlackChecker,
  BlackQuin,
  WhiteChecker,
  WhiteQuin,
} from '../assets/png';

function Board({
  boardData,
  whiteCheksers,
  blackCheksers,
  setChackers,
  chackers,
  setWCheksers,
  setBCheksers,
  setwCollection,
  whitesTurn,
  setWhitesTurn,
  setbCollection,
  wCollection,
  bCollection,
  // setBoardData,
}) {
  // React.useEffect(() => {
  //   // newBoard.map((row) => {
  //   //   row.map((cell) => {
  //   //     if (cell.item) {
  //   //       cell.item = null;
  //   //     }
  //   //   });
  //   // });
  //   if (chackers) {
  //     if (
  //       (chackers === boardData[chackers.y - 1][chackers.x + 1].item &&
  //         boardData[chackers.y + 2][chackers.x + 2].item === null) ||
  //       (chackers === boardData[chackers.y - 1][chackers.x - 1].item &&
  //         boardData[chackers.y + 2][chackers.x - 2].item === null)
  //     ) {
  //       console.error(1);
  //     }
  //   }
  //   // chackers
  // }, [whiteCheksers]);

  function changePlace(place) {
    // let clonedArray = JSON.parse(JSON.stringify(board));
    // const clonedArray = board.map((a) => ({ ...a }));
    console.warn('place', place);
    // console.warn('boardData', boardData);

    let newWhiteCheksers = [];
    let newBlackCheksers = [];
    boardData.map((boardPlace, rowIdx) => {
      let s = [];
      boardPlace?.map((boardPlace, cellIdx) => {
        if (boardPlace.x === place.x && boardPlace.y === place.y) {
          //
          let obj = {};
          obj.color = place.color;
          obj.item = chackers ? chackers : null;
          if (obj.item) {
            obj.item.group = chackers.group;
          }
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
                      setWhitesTurn(false);
                      chackerObj.x = place.x;
                      chackerObj.y = place.y;
                      chackerObj.id = oldchacker.id;
                      chackerObj.group = oldchacker.group;
                      newWhiteCheksers.push(chackerObj);
                      setChackers(null);
                    } else {
                      chackerObj = oldchacker;
                      newWhiteCheksers.push(chackerObj);
                    }
                    // !
                  } else if (place.x === chackers.x) {
                    chackerObj = oldchacker;
                    newWhiteCheksers.push(chackerObj);
                  } else if (
                    boardData[rowIdx + 1][cellIdx + 1].item &&
                    numbers[rowIdx] - 2 === chackers.y &&
                    place.x === chackers.x + 2
                  ) {
                    // console.log(boardData[rowIdx][cellIdx]);
                    // console.error('cellIdx', cellIdx);
                    setWhitesTurn(false);
                    // console.log('rowIdx', rowIdx + 1);
                    // console.log('cellIdx', cellIdx);
                    setwCollection([
                      ...wCollection,
                      boardData[rowIdx + 1][cellIdx - 1].item,
                    ]);

                    // let array = blackCheksers;
                    // let indexa = array.indexOf(
                    //   boardData[rowIdx + 1][cellIdx + 1].item.id
                    // );

                    // delete array[indexa];

                    // var apps = [
                    //   { id: 34, name: 'My App', another: 'thing' },
                    //   { id: 37, name: 'My New App', another: 'things' },
                    // ];

                    // get index of object with id:37
                    // !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                    let removeIndex = blackCheksers
                      .map(function (item) {
                        return item.id;
                      })
                      .indexOf(boardData[rowIdx + 1][cellIdx - 1].item.id);

                    // remove object
                    // console.error('removeIndex', removeIndex);
                    blackCheksers.splice(removeIndex, 1);
                    // !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                    chackerObj.x = place.x;

                    chackerObj.y = place.y;
                    chackerObj.id = oldchacker.id;
                    chackerObj.group = oldchacker.group;

                    newWhiteCheksers.push(chackerObj);
                    // console.log(
                    //   '+1+1',
                    //   boardData[rowIdx + 1][cellIdx - 1].item.id
                    // );
                  } else if (
                    boardData[rowIdx + 1][cellIdx - 1].item &&
                    numbers[rowIdx] - 2 === chackers.y
                  ) {
                    // console.error(boardData[rowIdx][chackers.x + 1]);
                    // console.log('rowIdx', rowIdx);
                    // console.log('cellIdx', cellIdx);
                    setWhitesTurn(false);
                    setwCollection([
                      ...wCollection,
                      boardData[rowIdx + 1][cellIdx + 1].item,
                    ]);

                    // let array = blackCheksers;
                    // let indexa = array.indexOf(
                    //   boardData[rowIdx + 1][cellIdx - 1].item
                    // );

                    // delete array[indexa];
                    // !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                    let removeIndex = blackCheksers
                      .map(function (item) {
                        return item.id;
                      })
                      .indexOf(boardData[rowIdx + 1][cellIdx + 1].item.id);

                    // remove object
                    blackCheksers.splice(removeIndex, 1);
                    // !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

                    chackerObj.x = place.x;

                    chackerObj.y = place.y;
                    chackerObj.id = oldchacker.id;
                    chackerObj.group = oldchacker.group;
                    newWhiteCheksers.push(chackerObj);
                    // console.log(
                    //   '+1-1',
                    //   boardData[rowIdx + 1][cellIdx + 1].item.id
                    // );
                    // console.log('+1-1', numbers[rowIdx] - 2 === chackers.y);
                  } else if (
                    boardData[rowIdx - 1][cellIdx + 1].item &&
                    numbers[rowIdx] + 2 === chackers.y &&
                    place.x === chackers.x + 2
                  ) {
                    console.error('Лево');
                    console.error('fromY', place.y, '->', chackers.y);
                    console.error('fromX', place.x, '->', chackers.x);
                    // console.error(boardData[rowIdx - 1][chackers.x + 1].item);
                    // console.error(
                    //   '-1+1',
                    //   boardData[rowIdx - 1][chackers.x + 1].item.id
                    // );
                    setWhitesTurn(false);
                    setwCollection([
                      ...wCollection,
                      boardData[rowIdx - 1][cellIdx + 1].item,
                    ]);

                    // let array = blackCheksers;
                    // let indexa = array.indexOf(
                    //   boardData[rowIdx - 1][cellIdx + 1].item
                    // );

                    // delete array[indexa];
                    let removeIndex = blackCheksers
                      .map(function (item) {
                        return item.id;
                      })
                      .indexOf(boardData[rowIdx - 1][cellIdx + 1].item.id);

                    // remove object
                    blackCheksers.splice(removeIndex, 1);

                    chackerObj.x = place.x;

                    chackerObj.y = place.y;
                    chackerObj.id = oldchacker.id;
                    chackerObj.group = oldchacker.group;
                    newWhiteCheksers.push(chackerObj);
                  } else if (
                    numbers[rowIdx] + 2 === chackers.y &&
                    boardData[rowIdx - 1][cellIdx - 1].item
                  ) {
                    console.error('left->right');
                    console.error('fromY', place.y, '->', chackers.y);
                    console.error('fromX', place.x, '->', chackers.x);
                    // console.error(
                    //   '-1-1',
                    //   boardData[rowIdx - 1][cellIdx - 1].item.id
                    // );
                    // console.log(boardData[rowIdx][cellIdx]);
                    setWhitesTurn(false);
                    setwCollection([
                      ...wCollection,
                      boardData[rowIdx - 1][cellIdx - 1].item,
                    ]);

                    // let array = blackCheksers;
                    // let indexa = array.indexOf(
                    //   boardData[rowIdx - 1][cellIdx - 1].item
                    // );

                    // delete array[indexa];
                    let removeIndex = blackCheksers
                      .map(function (item) {
                        return item.id;
                      })
                      .indexOf(boardData[rowIdx - 1][cellIdx - 1].item.id);

                    // remove object
                    blackCheksers.splice(removeIndex, 1);

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
                  chackerObj.x = place.x;
                  chackerObj.y = place.y;
                  chackerObj.q = oldchacker.q;
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
                      setWhitesTurn(true);
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
                  } else if (place.x === chackers.x) {
                    chackerObj = oldchacker;
                    newBlackCheksers.push(chackerObj);
                  } else if (
                    boardData[rowIdx + 1][cellIdx + 1].item &&
                    numbers[rowIdx] - 2 === chackers.y
                  ) {
                    console.log(boardData[rowIdx][cellIdx]);
                    console.error('cellIdx', cellIdx);
                    setWhitesTurn(true);
                    setbCollection([
                      ...bCollection,
                      boardData[rowIdx + 1][cellIdx + 1].item,
                    ]);

                    let array = whiteCheksers;
                    let indexa = array.indexOf(
                      boardData[rowIdx + 1][cellIdx + 1].item
                    );

                    delete array[indexa];

                    chackerObj.x = place.x;

                    chackerObj.y = place.y;
                    chackerObj.id = oldchacker.id;
                    chackerObj.group = oldchacker.group;

                    newBlackCheksers.push(chackerObj);
                  } else if (
                    boardData[rowIdx + 1][cellIdx - 1].item &&
                    numbers[rowIdx] - 2 === chackers.y
                  ) {
                    console.log(boardData[rowIdx][cellIdx]);
                    setWhitesTurn(true);
                    setbCollection([
                      ...bCollection,
                      boardData[rowIdx + 1][cellIdx - 1].item,
                    ]);

                    let array = whiteCheksers;
                    let indexa = array.indexOf(
                      boardData[rowIdx + 1][cellIdx - 1].item
                    );

                    delete array[indexa];

                    chackerObj.x = place.x;

                    chackerObj.y = place.y;
                    chackerObj.id = oldchacker.id;
                    chackerObj.group = oldchacker.group;
                    newBlackCheksers.push(chackerObj);
                  } else if (
                    boardData[rowIdx - 1][cellIdx - 1].item &&
                    numbers[rowIdx] + 2 === chackers.y
                  ) {
                    console.log(boardData[rowIdx][cellIdx]);
                    setWhitesTurn(true);
                    setbCollection([
                      ...bCollection,
                      boardData[rowIdx - 1][cellIdx - 1].item,
                    ]);

                    let array = whiteCheksers;
                    let indexa = array.indexOf(
                      boardData[rowIdx - 1][cellIdx - 1].item
                    );

                    delete array[indexa];

                    chackerObj.x = place.x;

                    chackerObj.y = place.y;
                    chackerObj.id = oldchacker.id;
                    chackerObj.group = oldchacker.group;
                    newBlackCheksers.push(chackerObj);
                  } else if (
                    boardData[rowIdx - 1][cellIdx + 1].item &&
                    numbers[rowIdx] + 2 === chackers.y
                  ) {
                    console.log(boardData[rowIdx][cellIdx]);
                    setWhitesTurn(true);
                    setbCollection([
                      ...bCollection,
                      boardData[rowIdx - 1][cellIdx + 1].item,
                    ]);

                    let array = whiteCheksers;
                    let indexa = array.indexOf(
                      boardData[rowIdx - 1][cellIdx + 1].item
                    );

                    delete array[indexa];

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
                  chackerObj.x = place.x;
                  chackerObj.y = place.y;
                  chackerObj.q = oldchacker.q;
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
          //           place.y - 2 === chackers.y ||
          //           place.y + 2 === chackers.y
          //         ) {
          //           // ////////////////////////////////////////////
          //           // let f=board
          //           // let s=board[rowIdx + 1][cellIdx + 1].item
          //           if (
          //             // board[rowIdx + 1][cellIdx - 1].item ||
          //             board[rowIdx + 1][cellIdx + 1].item
          //           ) {
          //             setbCollection([
          //               ...bCollection,
          //               boardData[rowIdx + 1][cellIdx + 1].item,
          //             ]);
          //             // newBlackCheksers;
          //             var removeIndex = newWhiteCheksers
          //               .map(function (item) {
          //                 return item.id;
          //               })
          //               .indexOf();

          //             // console.log('removeIndex', removeIndex);

          //             // remove object
          //             newBlackCheksers.splice(removeIndex, 1);
          //             // setBCheksers(
          //             //   blackCheksers.map((chekser) => {
          //             //     if (
          //             //       chekser !== boardData[rowIdx + 1][cellIdx + 1].item
          //             //     ) {
          //             //       return chekser;
          //             //     }
          //             //   })
          //             // );
          //             // let clonedArray = JSON.parse(JSON.stringify(board));

          //             // console.log([
          //             //   ...wCollection,
          //             //   clonedArray[rowIdx + 1][cellIdx + 1].item,
          //             // ]);

          //             // console.log(1);
          //             chackerObj.x = place.x;
          //             chackerObj.y = place.y;
          //             chackerObj.id = oldchacker.id;
          //             chackerObj.group = oldchacker.group;
          //             newBlackCheksers.push(chackerObj);
          //           } else if (board[rowIdx + 1][cellIdx - 1].item) {
          //             setbCollection([
          //               ...bCollection,
          //               boardData[rowIdx + 1][cellIdx - 1].item,
          //             ]);

          //             // console.log(1);
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
                          // disabled={!whitesTurn}
                          key={`${chekser.x}_${chekser.y}`}
                          onClick={() => {
                            setChackers(chekser);
                            console.log('white_chekser', chekser);
                          }}
                          className={`${
                            chackers === chekser ? 'active' : ''
                          } white_chekser`}
                        >
                          {chekser.q === true ? (
                            // <img src={BlackQuin} alt='CH' />
                            <img src={BlackQuin} alt='CH' />
                          ) : (
                            <img src={BlackChecker} alt='CH' />
                          )}
                        </button>
                      );
                    }
                  })}
                  {blackCheksers.map((chekser) => {
                    if (column.x === chekser.x && column.y === chekser.y) {
                      return (
                        <button
                          // disabled={whitesTurn}
                          onClick={() => {
                            setChackers(chekser);
                            console.log('black_chekser', chekser);
                          }}
                          key={`${chekser.x}_${chekser.y}`}
                          className={`${
                            chackers === chekser ? 'active' : ''
                          } black_chekser`}
                        >
                          {chekser.quin && 'W'}
                          {chekser.q === true ? (
                            <img src={WhiteQuin} alt='CH' />
                          ) : (
                            <img src={WhiteChecker} alt='CH' />
                          )}
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
