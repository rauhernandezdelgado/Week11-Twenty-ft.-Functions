//Ye Olde List of Variables
var userwin = 0;
var mattwin = 0;

//Username Prompt
function askName() {
    var username = prompt("Enter a username");
    return username
}

//Username Global Set
var username = askName();

//Start Message
function greeting(a) {
    alert(`Welcome to 20 ${a}! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer. You will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number, press "y".`);
}

greeting(username);

//Random Number 1-10 Gen
function ranNumber() {
    var ranNum = Math.floor(Math.random() * 10) + 1
    return ranNum
}

//Master Function
function mainGame() {
    do {
        function userTurn() {
            var userNum = 0;
            alert("It is now the users turn");
            do {
                var ranNum = ranNumber()
                var userNum = Math.floor(userNum + ranNum);
                alert(`The new number is ${ranNum}. The User total is ${userNum}`);
                if (userNum > 20) {
                    alert(`You got ${userNum}. Because you went over 20, Matt wins`);
                    mattwin++
                    break;
                }
                var userRequest = prompt("Would you like another number? If you would like to stop press `n` to stop.");
                if (userRequest == "n") {
                    alert(`You stopped at ${userNum}`)
                    break;
                }
                
        } while ((userRequest != "n") || (userNum < 20));
        return userNum
        }
        var userNum = userTurn()
            if (userNum <= 20) {
            function compTurn() {
                alert("Now its Matt's turn");
                var mattnum = 0;
                do {
                    var ranNum = ranNumber()
                    var mattnum = Math.floor(mattnum + ranNum);
                    alert(`The new number is ${ranNum}. The computer total is ${mattnum}`);
                } while (mattnum < 16)
                return mattnum
                }
                var mattnum = compTurn();
            
                if (mattnum > 20) {
                    alert("The computer has gone over 20 you win the round");
                    userwin++
                } else if (mattnum >= 16) {
                    alert(`The computer will stop at ${mattnum}`);
                    function compareNum() {
            
                        if (mattnum > userNum) {
                            alert(`You lose, Matt guessed ${mattnum} and you guessed ${userNum}`);
                            mattnum++
                        } else if ((userNum > mattnum) && (userNum <= 20)) {
                            alert(`You win. You got ${userNum} and Matt guessed ${mattnum}`);
                            userwin++
                        } else if ((userNum == mattnum) && (userNum <= 20)){
                            alert(`You tied, Matt guessed ${mattnum} and you also guessed ${userNum}`);
                        }
                        }
                        compareNum()    
                }
        }
        alert(`The current score is User ${userwin}, and Computer ${mattwin}`);
            var play = prompt("Would you like to play again? Press `y` to play again. Any other key will exit the program");
    } while (play == "y")
    
    if (mattwin > userwin){
        alert(`Thank you for playing, The final score was User ${userwin}, and Matt ${mattwin}. 
    Matt wins!`);
    } else if (userwin > mattwin) {
        alert(`Thank you for playing, The final score was User ${userwin}, and Matt ${mattwin}. 
    You win!`);
    } else {
        alert(`Thank you for playing, The final score was User ${userwin}, and Computer ${mattwin}. 
    Its a tie.`);
    }
    
}

//Invoke Master
mainGame()