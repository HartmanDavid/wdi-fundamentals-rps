////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

var playerWins = 0;
var computerWins = 0;
var storePlayerMove;
var storeComputerMove;

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   var playerMove = move|| getInput();
    storePlayerMove = playerMove;
    return playerMove;
}


    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

function getComputerMove(move) {
    var computerMove = move || randomPlay();
    storeComputerMove = computerMove;
    return computerMove;
}

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

function getWinner(playerMove,computerMove) {
 var winner;
 var computerMove = getComputerMove();
 var playerMove = getPlayerMove();
  // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
    if (computerMove == playerMove) {
        winner= 'tie';
    }
    else if ( (computerMove == 'rock') && (playerMove == 'scissors')) {
        winner = 'computer';
    }
    else if ( (computerMove == 'scissors') && (playerMove == 'paper')) {
        winner = 'computer';
    }
    else if ( (computerMove == 'paper') && (playerMove == 'rock')) {
        winner = 'computer';
    }
    else {
        winner = 'player';
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors! ");
     while (playerWins < 5 && computerWins < 5){
             var whoWon = getWinner();    
        if (whoWon === 'computer') {
            computerWins +=1;
            console.log( "You small human! You think you could keep up with me, 
                the mighty computer? Computer's win: " +computerWins + '\n');
        } else if  (whoWon === 'player') {
            playerWins += 1;
            console.log( "Human you got lucky! Player's win: " + playerWins+ '\n');
        } else {
            console.log( "Good Try human, tie. \n");
        }
    }
    console.log ( 'Human played: ' + storePlayerMove +'.\n' +'Computer played: ' + storeComputerMove + '.\n' + 'WINNER IS: ' +whoWon + '!\n\n');
    return [playerWins, computerWins];
}
playToFive();
