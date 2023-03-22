import React from 'react'

function GameRules() {
    // to display the game rules
  return (
    <div className='w-full h-fit bg-black'>
    <div className='mx-auto max-w-[600px] bg-black text-gray-200 text-xs sm:text-sm p-2'>

    <div className='font-bold text-sm'>GameRules:</div>
    <p className='pt-2'>The most important rules in this version:</p>

        <p className='pl-4 py-1'>- You play by reading your received E-Mails across the day. </p>
        <p className='pl-4 py-1'>- If you get one that fits the description you can select it. </p>
        <p className='pl-4 py-1'>- A player wins by completing a row, column, or diagonal.</p>
        <p className='pl-4 py-1'>- There's a free slot (always on) in the middle</p>
        <p className='pl-4 py-1'>- You can have multiple bingos</p>
        <p className='pl-4 py-1'>- The one with the most Bingos wins the Game, or the first to fill out the whole Sheet!</p>

    <p className='py-1'>You never played bingo before? 🤯 </p>
    <p><a href='https://en.wikipedia.org/wiki/Bingo_(American_version)' className='text-gray-400'>Here </a>are the basic rules.</p>
    </div>
    </div>
  )
}

export default GameRules