const button = document.getElementById("roll-button");
const diceEl  = document.getElementById("dice");

function rollDice() {
    // Generates a random number between 1 and 6
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace  = gettDiceFace(rollResult);
    console.log(diceFace);
    diceEl.innerHTML = diceFace;
    return rollResult;
}
// Changing the face of the dice based on the randomly generated number
function gettDiceFace(rollResult) {
    switch(rollResult) {
        case 1:
            return "&#9856";
            break;
        case 2:
            return "&#9857";
            break;
        case 3:
            return "&#9858";
            break;
        case 4:
            return "&#9860";
            break;
        case 5:
            return "&#9860";
            break;
        default:
            return "&#9861";
    }
}

button.addEventListener("click", () => {
    diceEl.classList.toggle('roll-animation');
    console.log(rollDice());
});
