function myRoll(dieList1, dieList2) {
  let butText = document.getElementById(dieList1).value;
  butText = "D" + butText;
  document.querySelector(dieList2).innerText = butText;
}
// ______________________________ROLL 1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A
function rollDice1A() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled1A").innerHTML = diceRlt;
  total1A.style.opacity = 0;
  document.getElementById("total1A").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total1A.style.opacity = 1;
    document.getElementById("total1A").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die1A").value;
    let diceNum = +document.getElementById("qty1A").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod1A").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled1A").innerHTML = diceRlt;
    let die = document.getElementById("die1A").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total1A").style.color = "purple";
        document.getElementById("total1A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total1A").style.color = "red";
        document.getElementById("total1A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total1A").style.color = "blue";
        document.getElementById("total1A").innerHTML = sumDice;
      } else {
        document.getElementById("total1A").style.color = "black";
        document.getElementById("total1A").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total1A").style.color = "black";
      document.getElementById("total1A").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 1B1B1B1B1B1B1B1B1B1B1B1B1B1B1B1B1B1B
function rollDice1B() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled1B").innerHTML = diceRlt;
  total1B.style.opacity = 0;
  document.getElementById("total1B").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total1B.style.opacity = 1;
    document.getElementById("total1B").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die1B").value;
    let diceNum = +document.getElementById("qty1B").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod1B").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled1B").innerHTML = diceRlt;
    let die = document.getElementById("die1B").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total1B").style.color = "purple";
        document.getElementById("total1B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total1B").style.color = "red";
        document.getElementById("total1B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total1B").style.color = "blue";
        document.getElementById("total1B").innerHTML = sumDice;
      } else {
        document.getElementById("total1B").style.color = "black";
        document.getElementById("total1B").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total1B").style.color = "black";
      document.getElementById("total1B").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C
function rollDice1C() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled1C").innerHTML = diceRlt;
  total1C.style.opacity = 0;
  document.getElementById("total1C").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total1C.style.opacity = 1;
    document.getElementById("total1C").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die1C").value;
    let diceNum = +document.getElementById("qty1C").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod1C").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled1C").innerHTML = diceRlt;
    let die = document.getElementById("die1C").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total1C").style.color = "purple";
        document.getElementById("total1C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total1C").style.color = "red";
        document.getElementById("total1C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total1C").style.color = "blue";
        document.getElementById("total1C").innerHTML = sumDice;
      } else {
        document.getElementById("total1C").style.color = "black";
        document.getElementById("total1C").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total1C").style.color = "black";
      document.getElementById("total1C").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D1D
function rollDice1D() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled1D").innerHTML = diceRlt;
  total1D.style.opacity = 0;
  document.getElementById("total1D").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total1D.style.opacity = 1;
    document.getElementById("total1D").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die1D").value;
    let diceNum = +document.getElementById("qty1D").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod1D").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled1D").innerHTML = diceRlt;
    let die = document.getElementById("die1D").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total1D").style.color = "purple";
        document.getElementById("total1D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total1D").style.color = "red";
        document.getElementById("total1D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total1D").style.color = "blue";
        document.getElementById("total1D").innerHTML = sumDice;
      } else {
        document.getElementById("total1D").style.color = "black";
        document.getElementById("total1D").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total1D").style.color = "black";
      document.getElementById("total1D").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E
function rollDice1E() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled1E").innerHTML = diceRlt;
  total1E.style.opacity = 0;
  document.getElementById("total1E").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total1E.style.opacity = 1;
    document.getElementById("total1E").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die1E").value;
    let diceNum = +document.getElementById("qty1E").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod1E").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled1E").innerHTML = diceRlt;
    let die = document.getElementById("die1E").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total1E").style.color = "purple";
        document.getElementById("total1E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total1E").style.color = "red";
        document.getElementById("total1E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total1E").style.color = "blue";
        document.getElementById("total1E").innerHTML = sumDice;
      } else {
        document.getElementById("total1E").style.color = "black";
        document.getElementById("total1E").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total1E").style.color = "black";
      document.getElementById("total1E").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 1F1F1F1F1F1F1F1F1F1F1F1F1F1F1F1F
function rollDice1F() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled1F").innerHTML = diceRlt;
  total1F.style.opacity = 0;
  document.getElementById("total1F").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total1F.style.opacity = 1;
    document.getElementById("total1F").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die1F").value;
    let diceNum = +document.getElementById("qty1F").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod1F").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled1F").innerHTML = diceRlt;
    let die = document.getElementById("die1F").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total1F").style.color = "purple";
        document.getElementById("total1F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total1F").style.color = "red";
        document.getElementById("total1F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total1F").style.color = "blue";
        document.getElementById("total1F").innerHTML = sumDice;
      } else {
        document.getElementById("total1F").style.color = "black";
        document.getElementById("total1F").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total1F").style.color = "black";
      document.getElementById("total1F").innerHTML = sumDice;
    }
  }
}
// ______________________________ROLL 2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A
function rollDice2A() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled2A").innerHTML = diceRlt;
  total2A.style.opacity = 0;
  document.getElementById("total2A").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total2A.style.opacity = 1;
    document.getElementById("total2A").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die2A").value;
    let diceNum = +document.getElementById("qty2A").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod2A").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled2A").innerHTML = diceRlt;
    let die = document.getElementById("die2A").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total2A").style.color = "purple";
        document.getElementById("total2A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total2A").style.color = "red";
        document.getElementById("total2A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total2A").style.color = "blue";
        document.getElementById("total2A").innerHTML = sumDice;
      } else {
        document.getElementById("total2A").style.color = "black";
        document.getElementById("total2A").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total2A").style.color = "black";
      document.getElementById("total2A").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 2B2B2B2B2B2B2B2B2B2B2B2B2B2B2B2B2B2B
function rollDice2B() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled2B").innerHTML = diceRlt;
  total2B.style.opacity = 0;
  document.getElementById("total2B").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total2B.style.opacity = 1;
    document.getElementById("total2B").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die2B").value;
    let diceNum = +document.getElementById("qty2B").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod2B").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled2B").innerHTML = diceRlt;
    let die = document.getElementById("die2B").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total2B").style.color = "purple";
        document.getElementById("total2B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total2B").style.color = "red";
        document.getElementById("total2B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total2B").style.color = "blue";
        document.getElementById("total2B").innerHTML = sumDice;
      } else {
        document.getElementById("total2B").style.color = "black";
        document.getElementById("total2B").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total2B").style.color = "black";
      document.getElementById("total2B").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 2C2C2C2C2C2C2C2C2C2C2C2C2C2C2C
function rollDice2C() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled2C").innerHTML = diceRlt;
  total2C.style.opacity = 0;
  document.getElementById("total2C").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total2C.style.opacity = 1;
    document.getElementById("total2C").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die2C").value;
    let diceNum = +document.getElementById("qty2C").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod2C").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled2C").innerHTML = diceRlt;
    let die = document.getElementById("die2C").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total2C").style.color = "purple";
        document.getElementById("total2C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total2C").style.color = "red";
        document.getElementById("total2C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total2C").style.color = "blue";
        document.getElementById("total2C").innerHTML = sumDice;
      } else {
        document.getElementById("total2C").style.color = "black";
        document.getElementById("total2C").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total2C").style.color = "black";
      document.getElementById("total2C").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D
function rollDice2D() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled2D").innerHTML = diceRlt;
  total2D.style.opacity = 0;
  document.getElementById("total2D").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total2D.style.opacity = 1;
    document.getElementById("total2D").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die2D").value;
    let diceNum = +document.getElementById("qty2D").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod2D").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled2D").innerHTML = diceRlt;
    let die = document.getElementById("die2D").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total2D").style.color = "purple";
        document.getElementById("total2D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total2D").style.color = "red";
        document.getElementById("total2D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total2D").style.color = "blue";
        document.getElementById("total2D").innerHTML = sumDice;
      } else {
        document.getElementById("total2D").style.color = "black";
        document.getElementById("total2D").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total2D").style.color = "black";
      document.getElementById("total2D").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 2E2E2E2E2E2E2E2E2E2E2E2E2E2E2E2E
function rollDice2E() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled2E").innerHTML = diceRlt;
  total2E.style.opacity = 0;
  document.getElementById("total2E").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total2E.style.opacity = 1;
    document.getElementById("total2E").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die2E").value;
    let diceNum = +document.getElementById("qty2E").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod2E").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled2E").innerHTML = diceRlt;
    let die = document.getElementById("die2E").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total2E").style.color = "purple";
        document.getElementById("total2E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total2E").style.color = "red";
        document.getElementById("total2E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total2E").style.color = "blue";
        document.getElementById("total2E").innerHTML = sumDice;
      } else {
        document.getElementById("total2E").style.color = "black";
        document.getElementById("total2E").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total2E").style.color = "black";
      document.getElementById("total2E").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 2F2F2F2F2F2F2F2F2F2F2F2F2F2F2F2F
function rollDice2F() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled2F").innerHTML = diceRlt;
  total2F.style.opacity = 0;
  document.getElementById("total2F").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total2F.style.opacity = 1;
    document.getElementById("total2F").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die2F").value;
    let diceNum = +document.getElementById("qty2F").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod2F").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled2F").innerHTML = diceRlt;
    let die = document.getElementById("die2F").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total2F").style.color = "purple";
        document.getElementById("total2F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total2F").style.color = "red";
        document.getElementById("total2F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total2F").style.color = "blue";
        document.getElementById("total2F").innerHTML = sumDice;
      } else {
        document.getElementById("total2F").style.color = "black";
        document.getElementById("total2F").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total2F").style.color = "black";
      document.getElementById("total2F").innerHTML = sumDice;
    }
  }
}
// ______________________________ROLL 3A3A3A3A3A3A3A3A3A3A3A3A3A3A3A3A3A3A
function rollDice3A() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled3A").innerHTML = diceRlt;
  total3A.style.opacity = 0;
  document.getElementById("total3A").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total3A.style.opacity = 1;
    document.getElementById("total3A").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die3A").value;
    let diceNum = +document.getElementById("qty3A").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod3A").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled3A").innerHTML = diceRlt;
    let die = document.getElementById("die3A").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total3A").style.color = "purple";
        document.getElementById("total3A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total3A").style.color = "red";
        document.getElementById("total3A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total3A").style.color = "blue";
        document.getElementById("total3A").innerHTML = sumDice;
      } else {
        document.getElementById("total3A").style.color = "black";
        document.getElementById("total3A").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total3A").style.color = "black";
      document.getElementById("total3A").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B
function rollDice3B() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled3B").innerHTML = diceRlt;
  total3B.style.opacity = 0;
  document.getElementById("total3B").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total3B.style.opacity = 1;
    document.getElementById("total3B").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die3B").value;
    let diceNum = +document.getElementById("qty3B").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod3B").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled3B").innerHTML = diceRlt;
    let die = document.getElementById("die3B").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total3B").style.color = "purple";
        document.getElementById("total3B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total3B").style.color = "red";
        document.getElementById("total3B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total3B").style.color = "blue";
        document.getElementById("total3B").innerHTML = sumDice;
      } else {
        document.getElementById("total3B").style.color = "black";
        document.getElementById("total3B").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total3B").style.color = "black";
      document.getElementById("total3B").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 3C3C3C3C3C3C3C3C3C3C3C3C3C3C3C
function rollDice3C() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled3C").innerHTML = diceRlt;
  total3C.style.opacity = 0;
  document.getElementById("total3C").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total3C.style.opacity = 1;
    document.getElementById("total3C").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die3C").value;
    let diceNum = +document.getElementById("qty3C").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod3C").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled3C").innerHTML = diceRlt;
    let die = document.getElementById("die3C").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total3C").style.color = "purple";
        document.getElementById("total3C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total3C").style.color = "red";
        document.getElementById("total3C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total3C").style.color = "blue";
        document.getElementById("total3C").innerHTML = sumDice;
      } else {
        document.getElementById("total3C").style.color = "black";
        document.getElementById("total3C").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total3C").style.color = "black";
      document.getElementById("total3C").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 3D3D3D3D3D3D3D3D3D3D3D3D3D3D3D3D3D3D
function rollDice3D() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled3D").innerHTML = diceRlt;
  total3D.style.opacity = 0;
  document.getElementById("total3D").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total3D.style.opacity = 1;
    document.getElementById("total3D").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die3D").value;
    let diceNum = +document.getElementById("qty3D").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod3D").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled3D").innerHTML = diceRlt;
    let die = document.getElementById("die3D").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total3D").style.color = "purple";
        document.getElementById("total3D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total3D").style.color = "red";
        document.getElementById("total3D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total3D").style.color = "blue";
        document.getElementById("total3D").innerHTML = sumDice;
      } else {
        document.getElementById("total3D").style.color = "black";
        document.getElementById("total3D").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total3D").style.color = "black";
      document.getElementById("total3D").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E
function rollDice3E() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled3E").innerHTML = diceRlt;
  total3E.style.opacity = 0;
  document.getElementById("total3E").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total3E.style.opacity = 1;
    document.getElementById("total3E").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die3E").value;
    let diceNum = +document.getElementById("qty3E").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod3E").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled3E").innerHTML = diceRlt;
    let die = document.getElementById("die3E").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total3E").style.color = "purple";
        document.getElementById("total3E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total3E").style.color = "red";
        document.getElementById("total3E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total3E").style.color = "blue";
        document.getElementById("total3E").innerHTML = sumDice;
      } else {
        document.getElementById("total3E").style.color = "black";
        document.getElementById("total3E").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total3E").style.color = "black";
      document.getElementById("total3E").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 3F3F3F3F3F3F3F3F3F3F3F3F3F3F3F3F
function rollDice3F() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled3F").innerHTML = diceRlt;
  total3F.style.opacity = 0;
  document.getElementById("total3F").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total3F.style.opacity = 1;
    document.getElementById("total3F").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die3F").value;
    let diceNum = +document.getElementById("qty3F").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod3F").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled3F").innerHTML = diceRlt;
    let die = document.getElementById("die3F").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total3F").style.color = "purple";
        document.getElementById("total3F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total3F").style.color = "red";
        document.getElementById("total3F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total3F").style.color = "blue";
        document.getElementById("total3F").innerHTML = sumDice;
      } else {
        document.getElementById("total3F").style.color = "black";
        document.getElementById("total3F").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total3F").style.color = "black";
      document.getElementById("total3F").innerHTML = sumDice;
    }
  }
}
// ______________________________ROLL 4A4A4A4A4A4A4A4A4A4A4A4A4A4A4A4A4A4A
function rollDice4A() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled4A").innerHTML = diceRlt;
  total4A.style.opacity = 0;
  document.getElementById("total4A").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total4A.style.opacity = 1;
    document.getElementById("total4A").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die4A").value;
    let diceNum = +document.getElementById("qty4A").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod4A").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled4A").innerHTML = diceRlt;
    let die = document.getElementById("die4A").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total4A").style.color = "purple";
        document.getElementById("total4A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total4A").style.color = "red";
        document.getElementById("total4A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total4A").style.color = "blue";
        document.getElementById("total4A").innerHTML = sumDice;
      } else {
        document.getElementById("total4A").style.color = "black";
        document.getElementById("total4A").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total4A").style.color = "black";
      document.getElementById("total4A").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 4B4B4B4B4B4B4B4B4B4B4B4B4B4B4B4B4B4B
function rollDice4B() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled4B").innerHTML = diceRlt;
  total4B.style.opacity = 0;
  document.getElementById("total4B").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total4B.style.opacity = 1;
    document.getElementById("total4B").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die4B").value;
    let diceNum = +document.getElementById("qty4B").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod4B").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled4B").innerHTML = diceRlt;
    let die = document.getElementById("die4B").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total4B").style.color = "purple";
        document.getElementById("total4B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total4B").style.color = "red";
        document.getElementById("total4B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total4B").style.color = "blue";
        document.getElementById("total4B").innerHTML = sumDice;
      } else {
        document.getElementById("total4B").style.color = "black";
        document.getElementById("total4B").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total4B").style.color = "black";
      document.getElementById("total4B").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 4C4C4C4C4C4C4C4C4C4C4C4C4C4C4C
function rollDice4C() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled4C").innerHTML = diceRlt;
  total4C.style.opacity = 0;
  document.getElementById("total4C").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total4C.style.opacity = 1;
    document.getElementById("total4C").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die4C").value;
    let diceNum = +document.getElementById("qty4C").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod4C").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled4C").innerHTML = diceRlt;
    let die = document.getElementById("die4C").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total4C").style.color = "purple";
        document.getElementById("total4C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total4C").style.color = "red";
        document.getElementById("total4C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total4C").style.color = "blue";
        document.getElementById("total4C").innerHTML = sumDice;
      } else {
        document.getElementById("total4C").style.color = "black";
        document.getElementById("total4C").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total4C").style.color = "black";
      document.getElementById("total4C").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 4D4D4D4D4D4D4D4D4D4D4D4D4D4D4D4D4D4D
function rollDice4D() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled4D").innerHTML = diceRlt;
  total4D.style.opacity = 0;
  document.getElementById("total4D").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total4D.style.opacity = 1;
    document.getElementById("total4D").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die4D").value;
    let diceNum = +document.getElementById("qty4D").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod4D").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled4D").innerHTML = diceRlt;
    let die = document.getElementById("die4D").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total4D").style.color = "purple";
        document.getElementById("total4D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total4D").style.color = "red";
        document.getElementById("total4D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total4D").style.color = "blue";
        document.getElementById("total4D").innerHTML = sumDice;
      } else {
        document.getElementById("total4D").style.color = "black";
        document.getElementById("total4D").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total4D").style.color = "black";
      document.getElementById("total4D").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 4E4E4E4E4E4E4E4E4E4E4E4E4E4E4E4E
function rollDice4E() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled4E").innerHTML = diceRlt;
  total4E.style.opacity = 0;
  document.getElementById("total4E").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total4E.style.opacity = 1;
    document.getElementById("total4E").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die4E").value;
    let diceNum = +document.getElementById("qty4E").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod4E").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled4E").innerHTML = diceRlt;
    let die = document.getElementById("die4E").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total4E").style.color = "purple";
        document.getElementById("total4E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total4E").style.color = "red";
        document.getElementById("total4E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total4E").style.color = "blue";
        document.getElementById("total4E").innerHTML = sumDice;
      } else {
        document.getElementById("total4E").style.color = "black";
        document.getElementById("total4E").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total4E").style.color = "black";
      document.getElementById("total4E").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 4F4F4F4F4F4F4F4F4F4F4F4F4F4F4F4F
function rollDice4F() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled4F").innerHTML = diceRlt;
  total4F.style.opacity = 0;
  document.getElementById("total4F").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total4F.style.opacity = 1;
    document.getElementById("total4F").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die4F").value;
    let diceNum = +document.getElementById("qty4F").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod4F").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled4F").innerHTML = diceRlt;
    let die = document.getElementById("die4F").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total4F").style.color = "purple";
        document.getElementById("total4F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total4F").style.color = "red";
        document.getElementById("total4F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total4F").style.color = "blue";
        document.getElementById("total4F").innerHTML = sumDice;
      } else {
        document.getElementById("total4F").style.color = "black";
        document.getElementById("total4F").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total4F").style.color = "black";
      document.getElementById("total4F").innerHTML = sumDice;
    }
  }
}
// ______________________________ROLL 5A5A5A5A5A5A5A5A5A5A5A5A5A5A5A5A5A5A
function rollDice5A() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled5A").innerHTML = diceRlt;
  total5A.style.opacity = 0;
  document.getElementById("total5A").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total5A.style.opacity = 1;
    document.getElementById("total5A").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die5A").value;
    let diceNum = +document.getElementById("qty5A").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod5A").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled5A").innerHTML = diceRlt;
    let die = document.getElementById("die5A").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total5A").style.color = "purple";
        document.getElementById("total5A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total5A").style.color = "red";
        document.getElementById("total5A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total5A").style.color = "blue";
        document.getElementById("total5A").innerHTML = sumDice;
      } else {
        document.getElementById("total5A").style.color = "black";
        document.getElementById("total5A").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total5A").style.color = "black";
      document.getElementById("total5A").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 5B5B5B5B5B5B5B5B5B5B5B5B5B5B5B5B5B5B
function rollDice5B() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled5B").innerHTML = diceRlt;
  total5B.style.opacity = 0;
  document.getElementById("total5B").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total5B.style.opacity = 1;
    document.getElementById("total5B").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die5B").value;
    let diceNum = +document.getElementById("qty5B").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod5B").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled5B").innerHTML = diceRlt;
    let die = document.getElementById("die5B").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total5B").style.color = "purple";
        document.getElementById("total5B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total5B").style.color = "red";
        document.getElementById("total5B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total5B").style.color = "blue";
        document.getElementById("total5B").innerHTML = sumDice;
      } else {
        document.getElementById("total5B").style.color = "black";
        document.getElementById("total5B").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total5B").style.color = "black";
      document.getElementById("total5B").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 5C5C5C5C5C5C5C5C5C5C5C5C5C5C5C
function rollDice5C() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled5C").innerHTML = diceRlt;
  total5C.style.opacity = 0;
  document.getElementById("total5C").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total5C.style.opacity = 1;
    document.getElementById("total5C").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die5C").value;
    let diceNum = +document.getElementById("qty5C").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod5C").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled5C").innerHTML = diceRlt;
    let die = document.getElementById("die5C").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total5C").style.color = "purple";
        document.getElementById("total5C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total5C").style.color = "red";
        document.getElementById("total5C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total5C").style.color = "blue";
        document.getElementById("total5C").innerHTML = sumDice;
      } else {
        document.getElementById("total5C").style.color = "black";
        document.getElementById("total5C").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total5C").style.color = "black";
      document.getElementById("total5C").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D
function rollDice5D() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled5D").innerHTML = diceRlt;
  total5D.style.opacity = 0;
  document.getElementById("total5D").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total5D.style.opacity = 1;
    document.getElementById("total5D").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die5D").value;
    let diceNum = +document.getElementById("qty5D").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod5D").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled5D").innerHTML = diceRlt;
    let die = document.getElementById("die5D").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total5D").style.color = "purple";
        document.getElementById("total5D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total5D").style.color = "red";
        document.getElementById("total5D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total5D").style.color = "blue";
        document.getElementById("total5D").innerHTML = sumDice;
      } else {
        document.getElementById("total5D").style.color = "black";
        document.getElementById("total5D").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total5D").style.color = "black";
      document.getElementById("total5D").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 5E5E5E5E5E5E5E5E5E5E5E5E5E5E5E5E
function rollDice5E() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled5E").innerHTML = diceRlt;
  total5E.style.opacity = 0;
  document.getElementById("total5E").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total5E.style.opacity = 1;
    document.getElementById("total5E").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die5E").value;
    let diceNum = +document.getElementById("qty5E").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod5E").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled5E").innerHTML = diceRlt;
    let die = document.getElementById("die5E").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total5E").style.color = "purple";
        document.getElementById("total5E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total5E").style.color = "red";
        document.getElementById("total5E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total5E").style.color = "blue";
        document.getElementById("total5E").innerHTML = sumDice;
      } else {
        document.getElementById("total5E").style.color = "black";
        document.getElementById("total5E").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total5E").style.color = "black";
      document.getElementById("total5E").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 5F5F5F5F5F5F5F5F5F5F5F5F5F5F5F5F
function rollDice5F() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled5F").innerHTML = diceRlt;
  total5F.style.opacity = 0;
  document.getElementById("total5F").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total5F.style.opacity = 1;
    document.getElementById("total5F").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die5F").value;
    let diceNum = +document.getElementById("qty5F").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod5F").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled5F").innerHTML = diceRlt;
    let die = document.getElementById("die5F").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total5F").style.color = "purple";
        document.getElementById("total5F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total5F").style.color = "red";
        document.getElementById("total5F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total5F").style.color = "blue";
        document.getElementById("total5F").innerHTML = sumDice;
      } else {
        document.getElementById("total5F").style.color = "black";
        document.getElementById("total5F").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total5F").style.color = "black";
      document.getElementById("total5F").innerHTML = sumDice;
    }
  }
}
// ______________________________ROLL 6A6A6A6A6A6A6A6A6A6A6A6A6A6A6A6A6A6A
function rollDice6A() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled6A").innerHTML = diceRlt;
  total6A.style.opacity = 0;
  document.getElementById("total6A").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total6A.style.opacity = 1;
    document.getElementById("total6A").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die6A").value;
    let diceNum = +document.getElementById("qty6A").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod6A").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled6A").innerHTML = diceRlt;
    let die = document.getElementById("die6A").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total6A").style.color = "purple";
        document.getElementById("total6A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total6A").style.color = "red";
        document.getElementById("total6A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total6A").style.color = "blue";
        document.getElementById("total6A").innerHTML = sumDice;
      } else {
        document.getElementById("total6A").style.color = "black";
        document.getElementById("total6A").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total6A").style.color = "black";
      document.getElementById("total6A").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 6B6B6B6B6B6B6B6B6B6B6B6B6B6B6B6B6B6B
function rollDice6B() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled6B").innerHTML = diceRlt;
  total6B.style.opacity = 0;
  document.getElementById("total6B").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total6B.style.opacity = 1;
    document.getElementById("total6B").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die6B").value;
    let diceNum = +document.getElementById("qty6B").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod6B").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled6B").innerHTML = diceRlt;
    let die = document.getElementById("die6B").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total6B").style.color = "purple";
        document.getElementById("total6B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total6B").style.color = "red";
        document.getElementById("total6B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total6B").style.color = "blue";
        document.getElementById("total6B").innerHTML = sumDice;
      } else {
        document.getElementById("total6B").style.color = "black";
        document.getElementById("total6B").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total6B").style.color = "black";
      document.getElementById("total6B").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 6C6C6C6C6C6C6C6C6C6C6C6C6C6C6C
function rollDice6C() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled6C").innerHTML = diceRlt;
  total6C.style.opacity = 0;
  document.getElementById("total6C").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total6C.style.opacity = 1;
    document.getElementById("total6C").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die6C").value;
    let diceNum = +document.getElementById("qty6C").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod6C").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled6C").innerHTML = diceRlt;
    let die = document.getElementById("die6C").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total6C").style.color = "purple";
        document.getElementById("total6C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total6C").style.color = "red";
        document.getElementById("total6C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total6C").style.color = "blue";
        document.getElementById("total6C").innerHTML = sumDice;
      } else {
        document.getElementById("total6C").style.color = "black";
        document.getElementById("total6C").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total6C").style.color = "black";
      document.getElementById("total6C").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 6D6D6D6D6D6D6D6D6D6D6D6D6D6D6D6D6D6D
function rollDice6D() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled6D").innerHTML = diceRlt;
  total6D.style.opacity = 0;
  document.getElementById("total6D").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total6D.style.opacity = 1;
    document.getElementById("total6D").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die6D").value;
    let diceNum = +document.getElementById("qty6D").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod6D").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled6D").innerHTML = diceRlt;
    let die = document.getElementById("die6D").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total6D").style.color = "purple";
        document.getElementById("total6D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total6D").style.color = "red";
        document.getElementById("total6D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total6D").style.color = "blue";
        document.getElementById("total6D").innerHTML = sumDice;
      } else {
        document.getElementById("total6D").style.color = "black";
        document.getElementById("total6D").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total6D").style.color = "black";
      document.getElementById("total6D").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 6E6E6E6E6E6E6E6E6E6E6E6E6E6E6E6E
function rollDice6E() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled6E").innerHTML = diceRlt;
  total6E.style.opacity = 0;
  document.getElementById("total6E").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total6E.style.opacity = 1;
    document.getElementById("total6E").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die6E").value;
    let diceNum = +document.getElementById("qty6E").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod6E").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled6E").innerHTML = diceRlt;
    let die = document.getElementById("die6E").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total6E").style.color = "purple";
        document.getElementById("total6E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total6E").style.color = "red";
        document.getElementById("total6E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total6E").style.color = "blue";
        document.getElementById("total6E").innerHTML = sumDice;
      } else {
        document.getElementById("total6E").style.color = "black";
        document.getElementById("total6E").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total6E").style.color = "black";
      document.getElementById("total6E").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 6F6F6F6F6F6F6F6F6F6F6F6F6F6F6F6F
function rollDice6F() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled6F").innerHTML = diceRlt;
  total6F.style.opacity = 0;
  document.getElementById("total6F").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total6F.style.opacity = 1;
    document.getElementById("total6F").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die6F").value;
    let diceNum = +document.getElementById("qty6F").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod6F").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled6F").innerHTML = diceRlt;
    let die = document.getElementById("die6F").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total6F").style.color = "purple";
        document.getElementById("total6F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total6F").style.color = "red";
        document.getElementById("total6F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total6F").style.color = "blue";
        document.getElementById("total6F").innerHTML = sumDice;
      } else {
        document.getElementById("total6F").style.color = "black";
        document.getElementById("total6F").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total6F").style.color = "black";
      document.getElementById("total6F").innerHTML = sumDice;
    }
  }
}
// ______________________________ROLL 7A7A7A7A7A7A7A7A7A7A7A7A7A7A7A7A7A7A
function rollDice7A() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled7A").innerHTML = diceRlt;
  total7A.style.opacity = 0;
  document.getElementById("total7A").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total7A.style.opacity = 1;
    document.getElementById("total7A").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die7A").value;
    let diceNum = +document.getElementById("qty7A").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod7A").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled7A").innerHTML = diceRlt;
    let die = document.getElementById("die7A").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total7A").style.color = "purple";
        document.getElementById("total7A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total7A").style.color = "red";
        document.getElementById("total7A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total7A").style.color = "blue";
        document.getElementById("total7A").innerHTML = sumDice;
      } else {
        document.getElementById("total7A").style.color = "black";
        document.getElementById("total7A").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total7A").style.color = "black";
      document.getElementById("total7A").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 7B7B7B7B7B7B7B7B7B7B7B7B7B7B7B7B7B7B
function rollDice7B() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled7B").innerHTML = diceRlt;
  total7B.style.opacity = 0;
  document.getElementById("total7B").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total7B.style.opacity = 1;
    document.getElementById("total7B").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die7B").value;
    let diceNum = +document.getElementById("qty7B").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod7B").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled7B").innerHTML = diceRlt;
    let die = document.getElementById("die7B").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total7B").style.color = "purple";
        document.getElementById("total7B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total7B").style.color = "red";
        document.getElementById("total7B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total7B").style.color = "blue";
        document.getElementById("total7B").innerHTML = sumDice;
      } else {
        document.getElementById("total7B").style.color = "black";
        document.getElementById("total7B").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total7B").style.color = "black";
      document.getElementById("total7B").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 7C7C7C7C7C7C7C7C7C7C7C7C7C7C7C
function rollDice7C() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled7C").innerHTML = diceRlt;
  total7C.style.opacity = 0;
  document.getElementById("total7C").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total7C.style.opacity = 1;
    document.getElementById("total7C").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die7C").value;
    let diceNum = +document.getElementById("qty7C").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod7C").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled7C").innerHTML = diceRlt;
    let die = document.getElementById("die7C").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total7C").style.color = "purple";
        document.getElementById("total7C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total7C").style.color = "red";
        document.getElementById("total7C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total7C").style.color = "blue";
        document.getElementById("total7C").innerHTML = sumDice;
      } else {
        document.getElementById("total7C").style.color = "black";
        document.getElementById("total7C").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total7C").style.color = "black";
      document.getElementById("total7C").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 7D7D7D7D7D7D7D7D7D7D7D7D7D7D7D7D7D7D
function rollDice7D() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled7D").innerHTML = diceRlt;
  total7D.style.opacity = 0;
  document.getElementById("total7D").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total7D.style.opacity = 1;
    document.getElementById("total7D").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die7D").value;
    let diceNum = +document.getElementById("qty7D").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod7D").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled7D").innerHTML = diceRlt;
    let die = document.getElementById("die7D").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total7D").style.color = "purple";
        document.getElementById("total7D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total7D").style.color = "red";
        document.getElementById("total7D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total7D").style.color = "blue";
        document.getElementById("total7D").innerHTML = sumDice;
      } else {
        document.getElementById("total7D").style.color = "black";
        document.getElementById("total7D").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total7D").style.color = "black";
      document.getElementById("total7D").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 7E7E7E7E7E7E7E7E7E7E7E7E7E7E7E7E
function rollDice7E() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled7E").innerHTML = diceRlt;
  total7E.style.opacity = 0;
  document.getElementById("total7E").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total7E.style.opacity = 1;
    document.getElementById("total7E").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die7E").value;
    let diceNum = +document.getElementById("qty7E").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod7E").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled7E").innerHTML = diceRlt;
    let die = document.getElementById("die7E").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total7E").style.color = "purple";
        document.getElementById("total7E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total7E").style.color = "red";
        document.getElementById("total7E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total7E").style.color = "blue";
        document.getElementById("total7E").innerHTML = sumDice;
      } else {
        document.getElementById("total7E").style.color = "black";
        document.getElementById("total7E").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total7E").style.color = "black";
      document.getElementById("total7E").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 1F1F1F1F1F1F1F1F1F1F1F1F1F1F1F1F
function rollDice1F() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled1F").innerHTML = diceRlt;
  total1F.style.opacity = 0;
  document.getElementById("total1F").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total1F.style.opacity = 1;
    document.getElementById("total1F").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die1F").value;
    let diceNum = +document.getElementById("qty1F").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod1F").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled1F").innerHTML = diceRlt;
    let die = document.getElementById("die1F").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total1F").style.color = "purple";
        document.getElementById("total1F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total1F").style.color = "red";
        document.getElementById("total1F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total1F").style.color = "blue";
        document.getElementById("total1F").innerHTML = sumDice;
      } else {
        document.getElementById("total1F").style.color = "black";
        document.getElementById("total1F").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total1F").style.color = "black";
      document.getElementById("total1F").innerHTML = sumDice;
    }
  }
}
// ______________________________ROLL 8A8A8A8A8A8A8A8A8A8A8A8A8A8A8A8A8A8A
function rollDice8A() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled8A").innerHTML = diceRlt;
  total8A.style.opacity = 0;
  document.getElementById("total8A").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total8A.style.opacity = 1;
    document.getElementById("total8A").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die8A").value;
    let diceNum = +document.getElementById("qty8A").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod8A").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled8A").innerHTML = diceRlt;
    let die = document.getElementById("die8A").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total8A").style.color = "purple";
        document.getElementById("total8A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total8A").style.color = "red";
        document.getElementById("total8A").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total8A").style.color = "blue";
        document.getElementById("total8A").innerHTML = sumDice;
      } else {
        document.getElementById("total8A").style.color = "black";
        document.getElementById("total8A").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total8A").style.color = "black";
      document.getElementById("total8A").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 8B8B8B8B8B8B8B8B8B8B8B8B8B8B8B8B8B8B
function rollDice8B() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled8B").innerHTML = diceRlt;
  total8B.style.opacity = 0;
  document.getElementById("total8B").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total8B.style.opacity = 1;
    document.getElementById("total8B").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die8B").value;
    let diceNum = +document.getElementById("qty8B").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod8B").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled8B").innerHTML = diceRlt;
    let die = document.getElementById("die8B").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total8B").style.color = "purple";
        document.getElementById("total8B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total8B").style.color = "red";
        document.getElementById("total8B").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total8B").style.color = "blue";
        document.getElementById("total8B").innerHTML = sumDice;
      } else {
        document.getElementById("total8B").style.color = "black";
        document.getElementById("total8B").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total8B").style.color = "black";
      document.getElementById("total8B").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 8C8C8C8C8C8C8C8C8C8C8C8C8C8C8C
function rollDice8C() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled8C").innerHTML = diceRlt;
  total8C.style.opacity = 0;
  document.getElementById("total8C").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total8C.style.opacity = 1;
    document.getElementById("total8C").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die8C").value;
    let diceNum = +document.getElementById("qty8C").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod8C").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled8C").innerHTML = diceRlt;
    let die = document.getElementById("die8C").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total8C").style.color = "purple";
        document.getElementById("total8C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total8C").style.color = "red";
        document.getElementById("total8C").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total8C").style.color = "blue";
        document.getElementById("total8C").innerHTML = sumDice;
      } else {
        document.getElementById("total8C").style.color = "black";
        document.getElementById("total8C").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total8C").style.color = "black";
      document.getElementById("total8C").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 8D8D8D8D8D8D8D8D8D8D8D8D8D8D8D8D8D8D
function rollDice8D() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled8D").innerHTML = diceRlt;
  total8D.style.opacity = 0;
  document.getElementById("total8D").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total8D.style.opacity = 1;
    document.getElementById("total8D").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die8D").value;
    let diceNum = +document.getElementById("qty8D").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod8D").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled8D").innerHTML = diceRlt;
    let die = document.getElementById("die8D").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total8D").style.color = "purple";
        document.getElementById("total8D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total8D").style.color = "red";
        document.getElementById("total8D").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total8D").style.color = "blue";
        document.getElementById("total8D").innerHTML = sumDice;
      } else {
        document.getElementById("total8D").style.color = "black";
        document.getElementById("total8D").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total8D").style.color = "black";
      document.getElementById("total8D").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 8E8E8E8E8E8E8E8E8E8E8E8E8E8E8E8E
function rollDice8E() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled8E").innerHTML = diceRlt;
  total8E.style.opacity = 0;
  document.getElementById("total8E").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total8E.style.opacity = 1;
    document.getElementById("total8E").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die8E").value;
    let diceNum = +document.getElementById("qty8E").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod8E").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled8E").innerHTML = diceRlt;
    let die = document.getElementById("die8E").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total8E").style.color = "purple";
        document.getElementById("total8E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total8E").style.color = "red";
        document.getElementById("total8E").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total8E").style.color = "blue";
        document.getElementById("total8E").innerHTML = sumDice;
      } else {
        document.getElementById("total8E").style.color = "black";
        document.getElementById("total8E").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total8E").style.color = "black";
      document.getElementById("total8E").innerHTML = sumDice;
    }
  }
}
//______________________________ROLL 8F8F8F8F8F8F8F8F8F8F8F8F8F8F8F8F
function rollDice8F() {
  let diceRlt = "Rolling Dice";
  document.getElementById("rolled8F").innerHTML = diceRlt;
  total8F.style.opacity = 0;
  document.getElementById("total8F").style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice();
    total8F.style.opacity = 1;
    document.getElementById("total8F").style.transform = "none";
  }, 900);
  function rollDice() {
    let dieSz = +document.getElementById("die8F").value;
    let diceNum = +document.getElementById("qty8F").value;
    let diceRlt = [0]; //Empty Array
    for (i = 0; i < diceNum; i++) {
      diceRlt[i] = Math.floor(Math.random() * dieSz) + 1;
    } // For loop fills array
    let diceRolledOnly = diceRlt.slice();
    modNum = +document.getElementById("mod8F").value;
    diceRlt.push(modNum);
    let sumDice = diceRlt.reduce(function reduce(a, b) {
      return a + b;
    }, 0);
    diceRlt = diceRlt.slice(0, -1).join(" , ") + " + " + diceRlt.slice(-1);
    document.getElementById("rolled8F").innerHTML = diceRlt;
    let die = document.getElementById("die8F").value;
    if (die == 20) {
      if (diceRolledOnly.includes(1 & 20)) {
        document.getElementById("total8F").style.color = "purple";
        document.getElementById("total8F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById("total8F").style.color = "red";
        document.getElementById("total8F").innerHTML = sumDice;
      } else if (diceRolledOnly.includes(20)) {
        document.getElementById("total8F").style.color = "blue";
        document.getElementById("total8F").innerHTML = sumDice;
      } else {
        document.getElementById("total8F").style.color = "black";
        document.getElementById("total8F").innerHTML = sumDice;
      }
    } else {
      document.getElementById("total8F").style.color = "black";
      document.getElementById("total8F").innerHTML = sumDice;
    }
  }
}
