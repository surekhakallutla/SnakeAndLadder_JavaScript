let count = 1;
const Winposition = 100;
let p1Position = 0;
let p2Position = 0;
let p1CurrentPosition = 0;
let p2CurrentPosition = 0;

console.log("Welcome to Snake and Ladder Program");

while(p1CurrentPosition <=Winposition && p2CurrentPosition <= Winposition) {
    if(count % 2 != 0) {
        console.log("\n Player 1 is Playing :");
        p1Position = player1Position();
        p1CurrentPosition = p1Position;
    }
    else {
        console.log("\n Player 2 is Playing :");
        p2Position = player2Position();
        p2CurrentPosition = p2Position;
    }

    if(p1Position <= Winposition || p2Position <= Winposition)
        count++;
    if(p1Position == Winposition || p2Position == Winposition)
        break;
    
        console.log("Player 1 Position = ", p1CurrentPosition);
        console.log("Player 2 position = ", p2CurrentPosition);
}

console.log("P1Position ", p1Position);
console.log("p2Position ", p2Position);

if(p1Position > p2Position)
    console.log("\n Player 1 Won the Game");
else
    console.log("\n Player 2 Won the Game");

console.log("The no. of times the dice was rolled to win the game is ", count);

function rollDice() {
    let random = Math.floor((Math.random() * 6) + 1);
    return random; 
}

function player1Position() {
    let diceValue = rollDice();
    console.log("The Dice Value is ", diceValue);

    if( diceValue == 6) {
         let player1DiceValue = rollDice();
         console.log("The Dice value is ", player1DiceValue);
         diceValue += player1DiceValue;
    }

    let player1Random = Math.floor(Math.random() * 2) + 1;
    
    switch(player1Random) {
        case 0: 
            p1Position = p1CurrentPosition;
            console.log("The player is not playing");
            break;
        case 1:
            p1Position = p1CurrentPosition + diceValue;
            console.log("The player got Ladder and got chance to roll the dice again");
            let player1NewChance = rollDice();
            console.log("The dice Value is ", player1NewChance);
             let p1ExtraPosition = p1Position + player1NewChance;
             p1Position = p1ExtraPosition;

             if(p1Position > Winposition)
                p1Position = p1CurrentPosition;
            break;
        default :
            p1Position = p1CurrentPosition - diceValue;
            if(p1Position < 0)
                p1Position = 0;
            console.log("The player got Snake ");
            break;
    }

    p1CurrentPosition = p1Position;
    return(p1CurrentPosition);
}

function player2Position() {
    let diceValue = rollDice();
    console.log("The dice value is ", diceValue);

    if(diceValue == 6) {
        let player2DiceValue = rollDice();
        console.log("The dice value is ", player2DiceValue);
    }

    let player2Random = Math.floor(Math.random() * 2) + 1;

    switch(player2Random) {
        case 0:
            p2Position = p2CurrentPosition;
            console.log("The player is not playing");
            break;
        case 1:
            p2Position = p2CurrentPosition + diceValue;
            console.log("The player got Ladder and got chance to roll the dice again");

            let player2NewChance = rollDice();
            console.log("The dice value is ", player2NewChance);

            let p2ExtraPosition = p2Position + player2NewChance;
            p2Position = p2ExtraPosition;

            if(p2Position > Winposition)
                p2Position = p2CurrentPosition;
            break;
        default :
            p2Position = p2CurrentPosition - diceValue;

            if(p2Position < 0) 
                p2Position = 0;
            console.log("The player got snake ");
            break;
    }

    p2CurrentPosition = p2Position;
    return p2CurrentPosition;
}