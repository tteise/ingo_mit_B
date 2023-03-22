import React from 'react';
import PropTypes from 'prop-types';

function GameBoard({ board, onSquareClick }) {
    // to display the game board
  const squares = board.map((square, index) => (
    <button
      key={index}
      className={`cell ${square.checked ? 'bg-gradient-to-r from-teal-500 to-cyan-500' : 'bg-slate-300 hover:bg-slate-400'} rounded transition-colors duration-500 ease-in-out font-semibold text-[8px] sm:text-sm sm:w-28 sm:h-28 w-16 h-16`}
      onClick={() => onSquareClick(index)}
    >
      <p className='m-1'>{square.text}</p>
    </button>
  ));

  return (
    <div className='mx-auto max-w-[600px]'>
    <div className="GameBoard grid grid-cols-5 gap-1 sm:m-0 m-1 pb-4">
      {squares}
    </div>
    </div>
  );
}

GameBoard.propTypes = {
  board: PropTypes.array.isRequired,
  onSquareClick: PropTypes.func.isRequired,
};

export default GameBoard;