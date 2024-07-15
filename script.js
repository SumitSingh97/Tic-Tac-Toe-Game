let buttons = document.querySelectorAll(".game-button");
let resetButton = document.querySelector("#reset");
let heading = document.querySelector("#heading");

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  whoseTurn = true;
  for (let button of buttons) {
    button.disabled = false;
    button.innerText = "";
  }
  heading.innerText = "TIC TAC TOE";
  resetButton.innerText = "RESET GAME";
  turnCount = 0;
};

resetButton.addEventListener("click", resetGame);

let turnCount = 0;
let whoseTurn = true;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (whoseTurn) {
      button.innerText = "O";
      whoseTurn = false;
    } else {
      button.innerText = "X";
      whoseTurn = true;
    }
    button.disabled = "true";

    checkDraw();
    checkWinner();
  });
});

const checkDraw = () => {
  turnCount++;
  if (turnCount === 9) {
    heading.innerText = "ITS A DRAW";
    resetButton.innerText = "NEW GAME";
  }
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos0 = buttons[pattern[0]].innerText;
    let pos1 = buttons[pattern[1]].innerText;
    let pos2 = buttons[pattern[2]].innerText;

    if (pos0 != "" && pos1 != "" && pos2 != "") {
      if (pos0 === pos1 && pos1 === pos2) {
        for (let button of buttons) {
          button.disabled = true;
        }
        heading.innerText = `${pos0} IS WINNER `;
        resetButton.innerText = "NEW GAME";
        continue;
      }
    }
  }
};
