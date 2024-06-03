import React from 'react';
import  useTictacToe  from './useTicTacToe';

function TicTacToe() {
  const { board, handleClick, resetGame, getStatusMessage } = useTictacToe();

  return (
    <div className="mx-auto flex flex-col items-center  text-center p-5">
      <div className="text-xl flex justify-between mb-5">
        {getStatusMessage()}
        <button
          className="px-3 mx-6 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>

      <div className="flex flex-wrap w-[300px]">
        {board.map((b, index) => {
          return (
            <button
              className="w-24 h-24 text-4xl border-2 border-gray-500 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
