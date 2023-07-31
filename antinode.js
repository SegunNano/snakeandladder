alert('Welcome')
const p1 = {
    userName: prompt('First Player, Enter your Name'),
    seedPosition: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    seed: 'playerOne',
    score: 0
}
const p2 = {
    userName: prompt('Second Player, Enter your Name'),
    seedPosition: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    seed: 'playerTwo',
    score: 0
}
const playGround = document.querySelector('#playGround');
const gameInfo = document.querySelector('#gameInfo');
const startButton = document.querySelector('#startGame');
const quitButton = document.querySelector('#quitGame');
const instructionInfo = document.querySelector('#instructions');
p1.button.textContent = p1.userName;
p2.button.textContent = p2.userName;
let isGameOver = true;
p1.button.disabled = true;
p2.button.disabled = true;
const board = {
    snake: {
        head: [8, 18, 26, 39, 51, 54, 56, 60, 75, 83, 85, 90, 92, 97, 99],
        tail: [4, 1, 10, 5, 6, 36, 1, 23, 28, 45, 59, 48, 25, 87, 63]
    },
    ladder: {
        foot: [3, 6, 11, 15, 17, 22, 38, 49, 57, 61, 73, 81, 88],
        top: [20, 14, 28, 34, 74, 37, 59, 67, 76, 78, 86, 98, 91]
    }
}
const initialPosition = board.snake.head.concat(board.ladder.foot);
const finalPosition = board.snake.tail.concat(board.ladder.top);
const createdDiv = [];
const createdClass = [];

for (let i = 11; i < 21; i++) {createdDiv.push(i)}
for (let i = 31; i < 41; i++) {createdDiv.push(i)}
for (let i = 51; i < 61; i++) {createdDiv.push(i)}
for (let i = 71; i < 81; i++) {createdDiv.push(i)}
for (let i = 91; i < 101; i++) {createdDiv.push(i)}
for (let i = 20; i > 10; i--) {createdClass.push(i)}
for (let i = 40; i > 30; i--) {createdClass.push(i)}
for (let i = 60; i > 50; i--) {createdClass.push(i)}
for (let i = 80; i > 70; i--) {createdClass.push(i)}
for (let i = 100; i > 90; i--) {createdClass.push(i)}
for (let i = 1; i < 101; i++) {
    const numberDiv = document.createElement('div');
    if (i > 10 && i < 21) {
        if (i === 11)    {
            numberDiv.classList.add(`square-20`)
        } else if (i === 12) {
            numberDiv.classList.add(`square-19`)
        } else if (i === 13) {
            numberDiv.classList.add(`square-18`)
        } else if (i === 14) {
            numberDiv.classList.add(`square-17`)
        } else if (i === 15) {
            numberDiv.classList.add(`square-16`)
        } else if (i === 16) {
            numberDiv.classList.add(`square-15`)
        } else if (i === 17) {
            numberDiv.classList.add(`square-14`)
        } else if (i === 18) {
            numberDiv.classList.add(`square-13`)
        } else if (i === 19) {
            numberDiv.classList.add(`square-12`)
        } else if (i === 20){
            numberDiv.classList.add(`square-11`)
        }
    } else if (i > 30 && i < 41) {
        if (i === 31)    {numberDiv.classList.add(`square-40`)
        } else if (i === 32) {numberDiv.classList.add(`square-39`)
        } else if (i === 33) {numberDiv.classList.add(`square-38`)
        } else if (i === 34) {numberDiv.classList.add(`square-37`)
        } else if (i === 35) {numberDiv.classList.add(`square-36`)
        } else if (i === 36) {numberDiv.classList.add(`square-35`)
        } else if (i === 37) {numberDiv.classList.add(`square-34`)
        } else if (i === 38) {numberDiv.classList.add(`square-33`)
        } else if (i === 39) {numberDiv.classList.add(`square-32`)
        } else if (i === 40) {numberDiv.classList.add(`square-31`)
        }
    } else if (i > 50 && i < 61) {
        if (i === 51)    {numberDiv.classList.add(`square-60`)
        } else if (i === 52) {numberDiv.classList.add(`square-59`)
        } else if (i === 53) {numberDiv.classList.add(`square-58`)
        } else if (i === 54) {numberDiv.classList.add(`square-57`)
        } else if (i === 55) {numberDiv.classList.add(`square-56`)
        } else if (i === 56) {numberDiv.classList.add(`square-55`)
        } else if (i === 57) {numberDiv.classList.add(`square-54`)
        } else if (i === 58) {numberDiv.classList.add(`square-53`)
        } else if (i === 59) {numberDiv.classList.add(`square-52`)
        } else if (i === 60) {numberDiv.classList.add(`square-51`)
        }
    } else if (i > 70 && i < 81) {
        if (i === 71)    {numberDiv.classList.add(`square-80`)
        } else if (i === 72) {numberDiv.classList.add(`square-79`)
        } else if (i === 73) {numberDiv.classList.add(`square-78`)
        } else if (i === 74) {numberDiv.classList.add(`square-77`)
        } else if (i === 75) {numberDiv.classList.add(`square-76`)
        } else if (i === 76) {numberDiv.classList.add(`square-75`)
        } else if (i === 77) {numberDiv.classList.add(`square-74`)
        } else if (i === 78) {numberDiv.classList.add(`square-73`)
        } else if (i === 79) {numberDiv.classList.add(`square-72`)
        } else if ((i === 80)){numberDiv.classList.add(`square-71`)
        }
    } else if (i > 90 && i < 101) {
        if (i === 91)    {numberDiv.classList.add(`square-100`)
        } else if (i === 92) {numberDiv.classList.add(`square-99`)
        } else if (i === 93) {numberDiv.classList.add(`square-98`)
        } else if (i === 94) {numberDiv.classList.add(`square-97`)
        } else if (i === 95) {numberDiv.classList.add(`square-96`)
        } else if (i === 96) {numberDiv.classList.add(`square-95`)
        } else if (i === 97) {numberDiv.classList.add(`square-94`)
        } else if (i === 98) {numberDiv.classList.add(`square-93`)
        } else if (i === 99) {numberDiv.classList.add(`square-92`)
        } else if (i === 100) {numberDiv.classList.add(`square-91`)
        }
    } else {
        numberDiv.classList.add(`square-${i}`);
    }
    // showNumber.textContent = `${numberDiv.classList.value}`
    // console.log(playGround.getAttribute('class'))
    numberDiv.classList.add(`numberDiv`)
    // numberDiv.appendChild(showNumber)
    playGround.appendChild(numberDiv);
}
p1Button.addEventListener('click', function() {
    moveSeed(p1, p2);
});

p2Button.addEventListener('click', function() {
    moveSeed(p2, p1);
});
startButton.addEventListener('click', function() {
    startGame()
    startButton.disabled = true
})
function moveSeed(player, opponent) {
    if(!isGameOver) {
        dieOutcome = rollDie(6);
        if (player.seedPosition === 0) {
            if (dieOutcome === 6) {
                player.seedPosition = 1
                opponent.button.disabled = false;
                player.button.disabled = true;
                gameInfo.textContent = `Bingo!!!, You rolled out rolled ${dieOutcome}, ${player.userName}. You've officially started your game`;
                indicatorClass = `.square-${player.seedPosition}`;
                indicatorDiv = document.createElement('div');
                newseedPosition = document.querySelector(indicatorClass);
                newseedPosition.appendChild(indicatorDiv);
                indicatorDiv.classList.add(player.seed)
            } else {
                player.seedPosition = 0;
                opponent.button.disabled = false;
                player.button.disabled = true;
                gameInfo.textContent = `You rolled out rolled ${dieOutcome}, but you need to roll a 6 to start playing on the board, ${player.userName}.`;
            }
        } else {
            // document.querySelector(`.${player.seed}`).classList = ''
            while (document.querySelector(`.${player.seed}`)) {
                // document.querySelector(`.${player.seed}`).parentElement.innerHTML = ''
                document.querySelector(`.${player.seed}`).parentElement.removeChild(document.querySelector(`.${player.seed}`));
            }
            player.seedPosition += dieOutcome;
            if (player.seedPosition === 100) {
                isGameOver = true;
                opponent.button.disabled = true;
                player.button.disabled = true;
                gameInfo.textContent = `${player.userName} wins the Game`;
                startButton.disabled = false;
                player.score += 1;
                player.display.textContent = player.score;
                startButton.textContent = 'Next Round';
                player.seedPosition = 0
                opponent.seedPosition = 0
                while (p1.display.classList.length && p2.display.classList.length) {
                    player.display.classList.remove('winner loser');
                    opponent.display.classList.remove('loser winner');
                }
                if (player.score > opponent.score) {
                    player.display.classList.add('winner');
                    opponent.display.classList.add('loser');
                } else if (player.score < opponent.score) {
                    player.display.classList.add('loser');
                    opponent.display.classList.add('winner');
                }
            } else if (player.seedPosition > 100) {
                opponent.button.disabled = false;
                player.button.disabled = true;
                player.seedPosition -= dieOutcome;
                gameInfo.textContent = `${player.userName} rolled ${dieOutcome}, but you need just ${100 -player.seedPosition} to win.`
            } else {
                // const oldIndicator = document.querySelector()
                opponent.button.disabled = false;
                player.button.disabled = true;
                gameInfo.textContent = `${player.userName} rolled ${dieOutcome}, so He's on number ${player.seedPosition}`;
                indicatorClass = `.square-${player.seedPosition}`;
                indicatorDiv = document.createElement('div');
                indicatorDiv.classList.add(player.seed);
                newseedPosition = document.querySelector(indicatorClass);
                newseedPosition.appendChild(indicatorDiv);
            }
        }
        for (i = 0; i < initialPosition.length; i++) {
            if (player.seedPosition === initialPosition[i]) {
                    document.querySelector(`.${player.seed}`).parentElement.innerHTML = ''
                if (i < 15) {
                    gameInfo.textContent = `Uh-oh, you rolled ${dieOutcome}, you've got bitten by a snake at ${player.seedPosition}. You have to go back to ${finalPosition[i]} for the antidote.`;  
                } else {
                    gameInfo.textContent = `Up you go, ${player.userName}. You climbed the ladder from ${player.seedPosition} to ${finalPosition[i]}. You rolled  out ${dieOutcome}.`;  
                }
                player.seedPosition = finalPosition[i]
                indicatorClass = `.square-${player.seedPosition}`;
                indicatorDiv = document.createElement('div');
                indicatorDiv.classList.add(player.seed);
                newseedPosition = document.querySelector(indicatorClass);
                newseedPosition.appendChild(indicatorDiv);;
            }
        }
        instructionInfo.textContent = `${p1.userName}'s position: ${p1.seedPosition} ||| ${p2.userName}'s position: ${p2.seedPosition}`;
    }
}
function rollDie(e) {
    return Math.floor(Math.random() * e + 1);
}
function startGame() {
    isGameOver = false
    p1.seedPosition = 0;
    p2.seedPosition = 0;
    turns = rollDie(2)
    while (document.querySelector(`.${opponent.seed}`)) {
        // document.querySelector(`.${player.seed}`).parentElement.innerHTML = ''
        document.querySelector(`.${p1.seed}`).parentElement.removeChild(document.querySelector(`.${player.seed}`));
        while (document.querySelector(`.${player.seed}`)) {
            // document.querySelector(`.${player.seed}`).parentElement.innerHTML = ''
            document.querySelector(`.${p2.seed}`).parentElement.removeChild(document.querySelector(`.${player.seed}`));
        }
    }
    
    if (!turns) {
        p1.button.disabled = false;
        p2.button.disabled = true;
        instructionInfo.textContent = `${p1.userName} wins the Toss and plays first`;
    } else {
        p1.button.disabled = true;
        p2.button.disabled = false;
        instructionInfo.textContent = `${p2.userName} wins the Toss and plays first`;
    }
}
quitButton.addEventListener('dblclick', function () {
    confirmQuit = prompt('You are about the quit the Game. Note that your session wont be saved. Type Quit to confirm');
    if (confirmQuit.toUpperCase() === 'QUIT') { 
        isGameOver = true;
        p1.button.disabled = false;
        p2.button.disabled = false;
        startButton.disabled = true;
        p1.display.textContent = 0;
        p2.display.textContent = 0;
        instructionInfo.textContent = 'Click Start To Begin'
        startButton.textContent = 'Start Game'
    };
});