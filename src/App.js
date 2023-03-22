import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import GameRules from './components/GameRules';
import GameStatus from './components/GameStatus';

function App() {
    const [board, setBoard] = useState(generateBoard());
    const [gameStatus, setGameStatus] = useState(false);
    const [curCount, setCurCount] = useState(0);
    const [prevCount, setPrevCount] = useState(0);
  
    useEffect(() => {
      // This function will be called every time the count goes up
      if (curCount > prevCount) {
        setGameStatus(true)
      }
      setPrevCount(curCount);
    }, [curCount]);

    // function to generate a new board
    function generateBoard() {
        const phrases = [
            "Reply All disaster",
            "Email signature with a funny quote",
            "Overuse of exclamation points",
            "Unintentional Reply instead of Forward",
            "Use of emojis in a professional email",
            "Autocorrect fail",
            "Email sent to the wrong recipient",
            "Use of a creative subject line",
            "Email chains that never seem to end",
            "Use of the term ASAP in an email",
            "Unread emails piling up in the inbox",
            "Important email sent to spam folder",
            "Email sent with a typo in the recipient's name",
            "Email sent after office hours",
            "Use of an out-of-office auto-reply message",
            "CC'd on an email thread unnecessarily",
            "Use of a high-priority flag on a non-urgent email",
            "Use of a GIF or meme in an email",
            "Email with a subject line that is too long or unclear",
            "Email sent with an empty body or no message",
            "Use of a font style or color that is difficult to read",
            "Overuse of abbreviations or acronyms",
            "Email with a request for a call without date or time",
            "Email with a broken hyperlink",
            "Email with a requested response by a specific deadline",
            "Email with a call that conflicts with your schedule",
          ];

        // Shuffle the phrases array to randomize the order
        phrases.sort(() => Math.random() - 0.5);

        const board = [];

        // Fill the board with the first 25 unique phrases
        for (let i = 0; i < 25; i++) {
            board.push({
              text: phrases[i],
              checked: false, // add a checked property to each square
            });
          }

        // Mark the center square as free
        // board[12] = "FREE";
        board[12]=({
            text: "FREE",
            checked: true,
          });

        return board;
      }

      function handleSquareClick(index) {
        if (index === 12) {
            // Prevent deselection of center square
            return;
          }
        const newBoard = [...board];
        newBoard[index].checked = !newBoard[index].checked;
        setBoard(newBoard);
        checkForWinner();
      }

      function handleContinueClick() {
        setGameStatus(false);
      }

  
    // function to check for a winner
    function checkForWinner() {

    let winCount = 1;
    // Check horizontal rows
    for (let row = 0; row < 5; row++) {
        let count = 0;
        for (let col = 0; col < 5; col++) {
        const index = row * 5 + col;
        if (board[index].checked) {
            count++;
            console.log('horizontal',count)
        }
        }
        if (count === 5) {
            let counti = winCount++
            setCurCount(counti);
        // setGameStatus(true);
        }
    }

    // Check vertical columns
    for (let col = 0; col < 5; col++) {
        let count = 0;
        for (let row = 0; row < 5; row++) {
        const index = row * 5 + col;
        if (board[index].checked) {
            count++;
            console.log('vertical',count)
        }
        if (count === 5) {
            console.log('got into it')
            let counti = winCount++
            console.log(winCount)
            setCurCount(counti);
            // setGameStatus(true);
        }
        }
    }

    // Check diagonal top-left to bottom-right
    let count = 0;
    for (let i = 0; i < 5; i++) {
        const index = i * 5 + i;
        if (board[index].checked) {
        count++;
        console.log('diagonal tl-to-br',count)
        }
    }
    if (count === 5) {
        let counti = winCount++
        setCurCount(counti);
        // setGameStatus(true);
    }

    // Check diagonal bottom-left to top-right
    count = 0;
    for (let i = 0; i < 5; i++) {
        const index = i * 5 + (4 - i);
        if (board[index].checked) {
        count++;
        console.log('diagonal bl-to-tr',count)
        }
    }
    if (count === 5) {
        let counti = winCount++
        setCurCount(counti);
        // setGameStatus(true);
    }

    }
  
    return (
        <>
        <GameStatus gameStatus={gameStatus} onContinueClick={handleContinueClick}/>
        <div className="App bg-black h-screen">
          <header className="App-header py-2">
            <span><h1 className="App-title sm:text-xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Sensory Mind's Coding Challenge <span className='text-black'>👾</span></h1></span>
          </header>
          <GameBoard board={board} onSquareClick={handleSquareClick} />
          <GameRules />
        </div>
        </>
      );
}

export default App;
