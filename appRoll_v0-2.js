function myRoll(dieList1, dieList2) {
  let butText = document.getElementById(dieList1).value;
  butText = "D" + butText;
  document.querySelector(dieList2).innerText = butText;
}
// ______________________________ROLL 1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A
function rollDice(rolled, total, die, qty, mod) {
  let diceRlt = "Rolling Dice";
  document.getElementById(rolled).innerHTML = diceRlt;
  document.getElementById(total).style.opacity = 0;
  document.getElementById(total).style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    document.getElementById(total).style.opacity = 1;
    document.getElementById(total).style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById(die).value;
    let diceNum = +document.getElementById(qty).value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById(mod).value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById(rolled).innerHTML = diceRlt;
    let dice = document.getElementById(die).value;

    if (dice == 20) {
      if (diceRolledOnly.includes(20)) {
        if (diceRolledOnly.includes(1)) {
          document.getElementById(total).style.color = "purple";
          document.getElementById(total).innerHTML = sumDice;
        } else {
          document.getElementById(total).style.color = "blue";
          document.getElementById(total).innerHTML = sumDice;
        }
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById(total).style.color = "red";
        document.getElementById(total).innerHTML = sumDice;
      } else {
        document.getElementById(total).style.color = "black";
        document.getElementById(total).innerHTML = sumDice;
      }
    } else {
      document.getElementById(total).style.color = "black";
      document.getElementById(total).innerHTML = sumDice;
    }
  }
}
