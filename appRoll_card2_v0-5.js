//  ____________________getting data for loading
db.collection("card2")
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
  document.getElementById("charTwo").value = name;
  let rollButton2A = "Roll " + dieAnum + " " + dieAtyp + " + " + dieAmod;
  let rollButton2B = "Roll " + dieBnum + " " + dieBtyp + " + " + dieBmod;
  let rollButton2C = "Roll " + dieCnum + " " + dieCtyp + " + " + dieCmod;
  let rollButton2D = "Roll " + dieDnum + " " + dieDtyp + " + " + dieDmod;
  let rollButton2E = "Roll " + dieEnum + " " + dieEtyp + " + " + dieEmod;
  let rollButton2F = "Roll " + dieFnum + " " + dieFtyp + " + " + dieFmod;
  document.querySelector(`#but2A`).innerText = rollButton2A;
  document.querySelector(`#numDieUp2A`).value = dieAnum;
  document.querySelector(`#selDieUp2A`).value = dieAtyp;
  document.querySelector(`#modDieUp2A`).value = dieAmod;
  document.querySelector(`#rollFor2A`).value = rolAtyp;
  document.querySelector(`#but2B`).innerText = rollButton2B;
  document.querySelector(`#numDieUp2B`).value = dieBnum;
  document.querySelector(`#selDieUp2B`).value = dieBtyp;
  document.querySelector(`#modDieUp2B`).value = dieBmod;
  document.querySelector(`#rollFor2B`).value = rolBtyp;
  document.querySelector(`#but2C`).innerText = rollButton2C;
  document.querySelector(`#numDieUp2C`).value = dieCnum;
  document.querySelector(`#selDieUp2C`).value = dieCtyp;
  document.querySelector(`#modDieUp2C`).value = dieCmod;
  document.querySelector(`#rollFor2C`).value = rolCtyp;
  document.querySelector(`#but2D`).innerText = rollButton2D;
  document.querySelector(`#numDieUp2D`).value = dieDnum;
  document.querySelector(`#selDieUp2D`).value = dieDtyp;
  document.querySelector(`#modDieUp2D`).value = dieDmod;
  document.querySelector(`#rollFor2D`).value = rolDtyp;
  document.querySelector(`#but2E`).innerText = rollButton2E;
  document.querySelector(`#numDieUp2E`).value = dieEnum;
  document.querySelector(`#selDieUp2E`).value = dieEtyp;
  document.querySelector(`#modDieUp2E`).value = dieEmod;
  document.querySelector(`#rollFor2E`).value = rolEtyp;
  document.querySelector(`#but2F`).innerText = rollButton2F;
  document.querySelector(`#numDieUp2F`).value = dieFnum;
  document.querySelector(`#selDieUp2F`).value = dieFtyp;
  document.querySelector(`#modDieUp2F`).value = dieFmod;
  document.querySelector(`#rollFor2F`).value = rolFtyp;
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
      card2: saverole,
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
  db.collection("card2").doc(`bKJ17v1aNwP30482Q9og`).update({
    name: charTwo.value,
    rolAtyp: rollFor2A.value,
    dieAnum: numDieUp2A.value,
    dieAtyp: selDieUp2A.value,
    dieAmod: modDieUp2A.value,
    rolBtyp: rollFor2B.value,
    dieBnum: numDieUp2B.value,
    dieBtyp: selDieUp2B.value,
    dieBmod: modDieUp2B.value,
    rolCtyp: rollFor2C.value,
    dieCnum: numDieUp2C.value,
    dieCtyp: selDieUp2C.value,
    dieCmod: modDieUp2C.value,
    rolDtyp: rollFor2D.value,
    dieDnum: numDieUp2D.value,
    dieDtyp: selDieUp2D.value,
    dieDmod: modDieUp2D.value,
    rolEtyp: rollFor2E.value,
    dieEnum: numDieUp2E.value,
    dieEtyp: selDieUp2E.value,
    dieEmod: modDieUp2E.value,
    rolFtyp: rollFor2F.value,
    dieFnum: numDieUp2F.value,
    dieFtyp: selDieUp2F.value,
    dieFmod: modDieUp2F.value,
  });
}
