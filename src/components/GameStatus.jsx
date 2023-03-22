import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import PropTypes from 'prop-types';

function GameStatus({ gameStatus, onContinueClick }) {
  // add your code here to display the game status
  return (
    <div className="GameStatus text-white">
      {gameStatus ? 
          <div className='absolute flex flex-col items-center justify-center z-10 bg-gray-900 opacity-90 h-full w-screen'>
                      <div className='opacity-100 text-xl font-bold my-4 z-30'>Bingo! 🙌</div>

            <ConfettiExplosion />
            <button
                className='rounded bg-gradient-to-r from-teal-500 to-cyan-500 text-black px-4 py-2'
                onClick={() => onContinueClick()}
            >
              Continue Playing   
            </button>
        </div>
        :
        <div></div>
      }
    </div>
  );
}

GameStatus.propTypes = {
  gameStatus: PropTypes.bool.isRequired,
  onContinueClick: PropTypes.func.isRequired
};

export default GameStatus