//  ____________________getting data for loading
db.collection("card1")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderCard(doc);
    });
  });
function renderCard(doc) {
  name = doc.data().name;
  rolAtyp = doc.data().rolAtyp;
  dieAtyp = doc.data().dieAtyp;
  dieAnum = doc.data().dieAnum;
  dieAmod = doc.data().dieAmod;
  rolBtyp = doc.data().rolBtyp;
  dieBtyp = doc.data().dieBtyp;
  dieBnum = doc.data().dieBnum;
  dieBmod = doc.data().dieBmod;
  rolCtyp = doc.data().rolCtyp;
  dieCtyp = doc.data().dieCtyp;
  dieCnum = doc.data().dieCnum;
  dieCmod = doc.data().dieCmod;
  rolDtyp = doc.data().rolDtyp;
  dieDtyp = doc.data().dieDtyp;
  dieDnum = doc.data().dieDnum;
  dieDmod = doc.data().dieDmod;
  rolEtyp = doc.data().rolEtyp;
  dieEtyp = doc.data().dieEtyp;
  dieEnum = doc.data().dieEnum;
  dieEmod = doc.data().dieEmod;
  rolFtyp = doc.data().rolFtyp;
  dieFtyp = doc.data().dieFtyp;
  dieFnum = doc.data().dieFnum;
  dieFmod = doc.data().dieFmod;
  document.getElementById("charOne").value = name;
  let rollButton1A = "Roll " + dieAnum + " " + dieAtyp + " + " + dieAmod;
  let rollButton1B = "Roll " + dieBnum + " " + dieBtyp + " + " + dieBmod;
  let rollButton1C = "Roll " + dieCnum + " " + dieCtyp + " + " + dieCmod;
  let rollButton1D = "Roll " + dieDnum + " " + dieDtyp + " + " + dieDmod;
  let rollButton1E = "Roll " + dieEnum + " " + dieEtyp + " + " + dieEmod;
  let rollButton1F = "Roll " + dieFnum + " " + dieFtyp + " + " + dieFmod;
  document.querySelector(`#but1A`).innerText = rollButton1A;
  document.querySelector(`#numDieUp1A`).value = dieAnum;
  document.querySelector(`#selDieUp1A`).value = dieAtyp;
  document.querySelector(`#modDieUp1A`).value = dieAmod;
  document.querySelector(`#rollFor1A`).value = rolAtyp;
  document.querySelector(`#but1B`).innerText = rollButton1B;
  document.querySelector(`#numDieUp1B`).value = dieBnum;
  document.querySelector(`#selDieUp1B`).value = dieBtyp;
  document.querySelector(`#modDieUp1B`).value = dieBmod;
  document.querySelector(`#rollFor1B`).value = rolBtyp;
  document.querySelector(`#but1C`).innerText = rollButton1C;
  document.querySelector(`#numDieUp1C`).value = dieCnum;
  document.querySelector(`#selDieUp1C`).value = dieCtyp;
  document.querySelector(`#modDieUp1C`).value = dieCmod;
  document.querySelector(`#rollFor1C`).value = rolCtyp;
  document.querySelector(`#but1D`).innerText = rollButton1D;
  document.querySelector(`#numDieUp1D`).value = dieDnum;
  document.querySelector(`#selDieUp1D`).value = dieDtyp;
  document.querySelector(`#modDieUp1D`).value = dieDmod;
  document.querySelector(`#rollFor1D`).value = rolDtyp;
  document.querySelector(`#but1E`).innerText = rollButton1E;
  document.querySelector(`#numDieUp1E`).value = dieEnum;
  document.querySelector(`#selDieUp1E`).value = dieEtyp;
  document.querySelector(`#modDieUp1E`).value = dieEmod;
  document.querySelector(`#rollFor1E`).value = rolEtyp;
  document.querySelector(`#but1F`).innerText = rollButton1F;
  document.querySelector(`#numDieUp1F`).value = dieFnum;
  document.querySelector(`#selDieUp1F`).value = dieFtyp;
  document.querySelector(`#modDieUp1F`).value = dieFmod;
  document.querySelector(`#rollFor1F`).value = rolFtyp;
}
// ______________________________ROLL ALL CARD1
function rollDice(rolled, total, die, qty, mod, nam, typ) {
  let diceRlt = "Rolling Dice";
  document.getElementById(rolled).innerHTML = diceRlt;
  document.getElementById(total).style.opacity = 0;
  document.getElementById(total).style.transform = "rotate(720deg)";
  setTimeout(function () {
    rollDice1();
    document.getElementById(total).style.opacity = 1;
    document.getElementById(total).style.transform = "none";
  }, 900);
  setTimeout(function () {
    let audio = new Audio("audio/r.wav");
    audio.play();
  }, 1100);
  function rollDice1() {
    let dieSz = document.getElementById(die).value;
    dieSz = dieSz.replace(/D/g, "");
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
    console.log(diceRolledOnly);
    if (dieSz == 20) {
      if (diceRolledOnly.includes(20)) {
        if (diceRolledOnly.includes(1)) {
          document.getElementById(total).style.color = "purple";
          document.getElementById(total).innerHTML = sumDice;
        } else {
          document.getElementById(total).style.color = "blue";
          document.getElementById(total).innerHTML = sumDice;
          let audio = new Audio("audio/s.wav");
          audio.play();
        }
      } else if (diceRolledOnly.includes(1)) {
        document.getElementById(total).style.color = "red";
        document.getElementById(total).innerHTML = sumDice;
        let audio = new Audio("audio/f.wav");
        audio.play();
      } else {
        document.getElementById(total).style.color = "black";
        document.getElementById(total).innerHTML = sumDice;
      }
    } else {
      document.getElementById(total).style.color = "black";
      document.getElementById(total).innerHTML = sumDice;
    }

    // _____________________________________________OUTPUT TO CARD ROLL DATA ______
    let dice = diceRolledOnly.toString();

    dieSzD = "D" + dieSz;
    let name = document.getElementById(nam).value;
    let type = document.getElementById(typ).value;
    let saverole = [name, diceNum, dieSzD, type, diceRlt, sumDice, dice];
    db.collection("card rolls").doc(`orfal`).update({
      card1: saverole,
    });
  }
}
// ________________________________________number of dice buttonm function ______________
function numDieUp(num1, num2, num3, num4, num5) {
  let numUp = document.getElementById(num1).value;
  if (numUp < 20) {
    numUp++;
  }
  document.querySelector(num2).value = numUp;
  let selDie = document.getElementById(num3).value;
  let modDie = document.getElementById(num4).value;
  let rollButton = "Roll " + numUp + " " + selDie + " + " + modDie;
  document.querySelector(num5).innerText = rollButton;
}
function numDieDn(num1, num2, num3, num4, num5) {
  let numDn = document.getElementById(num1).value;
  if (numDn > 1) {
    numDn--;
  }
  document.querySelector(num2).value = numDn;
  let selDie = document.getElementById(num3).value;
  let modDie = document.getElementById(num4).value;
  let rollButton = "Roll " + numDn + " " + selDie + " + " + modDie;
  document.querySelector(num5).innerText = rollButton;
}
// ________________________________________________die modifier button function ____________
function modDieUp(mod1, mod2, mod3, mod4, mod5) {
  let modUp = document.getElementById(mod1).value;
  if (modUp < 20) {
    modUp++;
  }
  document.querySelector(mod2).value = modUp;
  let selDie = document.getElementById(mod3).value;
  let numDie = document.getElementById(mod4).value;
  let rollButton = "Roll " + numDie + " " + selDie + " + " + modUp;
  document.querySelector(mod5).innerText = rollButton;
}
function modDieDn(mod1, mod2, mod3, mod4, mod5) {
  let modDn = document.getElementById(mod1).value;
  if (modDn > -20) {
    modDn--;
  }
  document.querySelector(mod2).value = modDn;
  let selDie = document.getElementById(mod3).value;
  let numDie = document.getElementById(mod4).value;
  let rollButton = "Roll " + numDie + " " + selDie + " + " + modDn;
  document.querySelector(mod5).innerText = rollButton;
}
// _________________________________________________select die button fuction _____________
function selDieUp(sel, sel2, sel3, sel4, sel5) {
  let selUp = document.getElementById(sel).value;
  if (selUp == "D4") {
    selUp = "D6";
  } else if (selUp == "D6") {
    selUp = "D8";
  } else if (selUp == "D8") {
    selUp = "D10";
  } else if (selUp == "D10") {
    selUp = "D12";
  } else if (selUp == "D12") {
    selUp = "D20";
  } else {
    selUp = "D100";
  }
  document.querySelector(sel2).value = selUp;
  let modDie = document.getElementById(sel3).value;
  let numDie = document.getElementById(sel4).value;
  let rollButton = "Roll " + numDie + " " + selUp + " + " + modDie;
  document.querySelector(sel5).innerText = rollButton;
}
function selDieDn(sel, sel2, sel3, sel4, sel5) {
  let selUp = document.getElementById(sel).value;
  if (selUp == "D100") {
    selUp = "D20";
  } else if (selUp == "D20") {
    selUp = "D12";
  } else if (selUp == "D12") {
    selUp = "D10";
  } else if (selUp == "D10") {
    selUp = "D8";
  } else if (selUp == "D8") {
    selUp = "D6";
  } else {
    selUp = "D4";
  }
  document.querySelector(sel2).value = selUp;
  let modDie = document.getElementById(sel3).value;
  let numDie = document.getElementById(sel4).value;
  let rollButton = "Roll " + numDie + " " + selUp + " + " + modDie;
  document.querySelector(sel5).innerText = rollButton;
}
//_________________________________card name save
function save() {
  db.collection("card1").doc(`X7FANvyPy6w89pmXqRfo`).update({
    name: charOne.value,
    rolAtyp: rollFor1A.value,
    dieAnum: numDieUp1A.value,
    dieAtyp: selDieUp1A.value,
    dieAmod: modDieUp1A.value,
    rolBtyp: rollFor1B.value,
    dieBnum: numDieUp1B.value,
    dieBtyp: selDieUp1B.value,
    dieBmod: modDieUp1B.value,
    rolCtyp: rollFor1C.value,
    dieCnum: numDieUp1C.value,
    dieCtyp: selDieUp1C.value,
    dieCmod: modDieUp1C.value,
    rolDtyp: rollFor1D.value,
    dieDnum: numDieUp1D.value,
    dieDtyp: selDieUp1D.value,
    dieDmod: modDieUp1D.value,
    rolEtyp: rollFor1E.value,
    dieEnum: numDieUp1E.value,
    dieEtyp: selDieUp1E.value,
    dieEmod: modDieUp1E.value,
    rolFtyp: rollFor1F.value,
    dieFnum: numDieUp1F.value,
    dieFtyp: selDieUp1F.value,
    dieFmod: modDieUp1F.value,
  });
}
