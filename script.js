const boxes = document.querySelectorAll(".box");
const button = document.querySelector(".btn");
const header = document.querySelector("#heading");
let tictactoe = [], player_value = "X", count = 0, tied = true;


let gameChecker = () => {

  //Horizontal checking

  for (let i = 0; i < tictactoe.length; i += 3) {
    if (tictactoe[i] === undefined) continue;
    if (tictactoe[i] === tictactoe[i + 1] && tictactoe[i + 1] === tictactoe[i + 2]) {
        for(let color=i; color < i + 3; color++){
            boxes[color].classList.add('win')
        }
        header.innerText = `Winner - ${tictactoe[i + 2]}`
        tied = false;
        // console.log("Winner", tictactoe[i + 1]);
        break;
    }
  }

  //Vertical checking

  for (let j = 0; j < 3; j++) {
    if (tictactoe[j] === undefined) continue;
    if (tictactoe[j] === tictactoe[j + 3] && tictactoe[j + 3] === tictactoe[j + 6]) {
        for(let color=j; color < j + 7; color+=3){
            boxes[color].classList.add('win')
        }
        header.innerText = `Winner - ${tictactoe[j + 6]}`
        tied = false;
        // console.log("Winner", tictactoe[j + 3]);
        break;
    }
  }

 //Diagonal checking

  if (tictactoe[0] === tictactoe[4] && tictactoe[4] === tictactoe[8]) {
    boxes[0].classList.add('win')
    boxes[4].classList.add('win')
    boxes[8].classList.add('win')
    header.innerText = `Winner - ${tictactoe[4]}`
    // console.log("Winner", tictactoe[4]);
    tied = false;
  }
  if (tictactoe[2] === tictactoe[4] && tictactoe[4] === tictactoe[6]) {
    boxes[2].classList.add('win')
    boxes[4].classList.add('win')
    boxes[6].classList.add('win')
    header.innerText = `Winner - ${tictactoe[4]}`
    // console.log("Winner", tictactoe[4]);
    tied = false;
  }

};

let putValue = (n) => {
  tictactoe[getNodeIndex(n)] = player_value;
  // console.log(tictactoe);
};

function getNodeIndex(elm) {
  var c = elm.parentNode.children;
  for (let i = 0; i < c.length; i++) if (c[i] == elm) return i;
}

for (const box of boxes) {
  box.addEventListener("click", (e) => {
    e.target.classList.add('noresponse')
    count++;
    e.target.innerText = player_value;
    putValue(e.target);
    player_value = (player_value === "X") ? "O" : "X";
    header.innerText = `Current Player - ${player_value}`
    if (count > 4) {
        // console.log('Checking part');
        gameChecker();
    }
    if(count > 8 && tied){
        header.innerText = 'Match Tied !'
        button.classList.add('active')
    }
    if(!tied){
        button.classList.add('active')
        boxes.forEach((element) => {
            element.classList.add('noresponse')
        })

    }

  });
}


function newGame() {
    tictactoe = [], player_value = "X", count = 0, tied = true;
    header.innerText = `Current Player - ${player_value}`
    button.classList.remove('active')
    boxes.forEach((element) => {
        element.classList.remove('noresponse')
        element.classList.remove('win');
        element.innerText = ""
    })
}