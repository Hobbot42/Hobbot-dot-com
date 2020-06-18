//  ____________________getting data for loading
db.collection("card8")
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
  document.getElementById("charEight").value = name;
  let rollButton8A = "Roll " + dieAnum + " " + dieAtyp + " + " + dieAmod;
  let rollButton8B = "Roll " + dieBnum + " " + dieBtyp + " + " + dieBmod;
  let rollButton8C = "Roll " + dieCnum + " " + dieCtyp + " + " + dieCmod;
  let rollButton8D = "Roll " + dieDnum + " " + dieDtyp + " + " + dieDmod;
  let rollButton8E = "Roll " + dieEnum + " " + dieEtyp + " + " + dieEmod;
  let rollButton8F = "Roll " + dieFnum + " " + dieFtyp + " + " + dieFmod;
  document.querySelector(`#but8A`).innerText = rollButton8A;
  document.querySelector(`#numDieUp8A`).value = dieAnum;
  document.querySelector(`#selDieUp8A`).value = dieAtyp;
  document.querySelector(`#modDieUp8A`).value = dieAmod;
  document.querySelector(`#rollFor8A`).value = rolAtyp;
  document.querySelector(`#but8B`).innerText = rollButton8B;
  document.querySelector(`#numDieUp8B`).value = dieBnum;
  document.querySelector(`#selDieUp8B`).value = dieBtyp;
  document.querySelector(`#modDieUp8B`).value = dieBmod;
  document.querySelector(`#rollFor8B`).value = rolBtyp;
  document.querySelector(`#but8C`).innerText = rollButton8C;
  document.querySelector(`#numDieUp8C`).value = dieCnum;
  document.querySelector(`#selDieUp8C`).value = dieCtyp;
  document.querySelector(`#modDieUp8C`).value = dieCmod;
  document.querySelector(`#rollFor8C`).value = rolCtyp;
  document.querySelector(`#but8D`).innerText = rollButton8D;
  document.querySelector(`#numDieUp8D`).value = dieDnum;
  document.querySelector(`#selDieUp8D`).value = dieDtyp;
  document.querySelector(`#modDieUp8D`).value = dieDmod;
  document.querySelector(`#rollFor8D`).value = rolDtyp;
  document.querySelector(`#but8E`).innerText = rollButton8E;
  document.querySelector(`#numDieUp8E`).value = dieEnum;
  document.querySelector(`#selDieUp8E`).value = dieEtyp;
  document.querySelector(`#modDieUp8E`).value = dieEmod;
  document.querySelector(`#rollFor8E`).value = rolEtyp;
  document.querySelector(`#but8F`).innerText = rollButton8F;
  document.querySelector(`#numDieUp8F`).value = dieFnum;
  document.querySelector(`#selDieUp8F`).value = dieFtyp;
  document.querySelector(`#modDieUp8F`).value = dieFmod;
  document.querySelector(`#rollFor8F`).value = rolFtyp;
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
  }, 700);
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
      card8: saverole,
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
  db.collection("card8").doc(`IksR4qWBtRGJlcY6mCA0`).update({
    name: charEight.value,
    rolAtyp: rollFor8A.value,
    dieAnum: numDieUp8A.value,
    dieAtyp: selDieUp8A.value,
    dieAmod: modDieUp8A.value,
    rolBtyp: rollFor8B.value,
    dieBnum: numDieUp8B.value,
    dieBtyp: selDieUp8B.value,
    dieBmod: modDieUp8B.value,
    rolCtyp: rollFor8C.value,
    dieCnum: numDieUp8C.value,
    dieCtyp: selDieUp8C.value,
    dieCmod: modDieUp8C.value,
    rolDtyp: rollFor8D.value,
    dieDnum: numDieUp8D.value,
    dieDtyp: selDieUp8D.value,
    dieDmod: modDieUp8D.value,
    rolEtyp: rollFor8E.value,
    dieEnum: numDieUp8E.value,
    dieEtyp: selDieUp8E.value,
    dieEmod: modDieUp8E.value,
    rolFtyp: rollFor8F.value,
    dieFnum: numDieUp8F.value,
    dieFtyp: selDieUp8F.value,
    dieFmod: modDieUp8F.value,
  });
}
