//  ____________________getting data for loading
db.collection("card3")
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
  document.getElementById("charThree").value = name;
  let rollButton3A = "Roll " + dieAnum + " " + dieAtyp + " + " + dieAmod;
  let rollButton3B = "Roll " + dieBnum + " " + dieBtyp + " + " + dieBmod;
  let rollButton3C = "Roll " + dieCnum + " " + dieCtyp + " + " + dieCmod;
  let rollButton3D = "Roll " + dieDnum + " " + dieDtyp + " + " + dieDmod;
  let rollButton3E = "Roll " + dieEnum + " " + dieEtyp + " + " + dieEmod;
  let rollButton3F = "Roll " + dieFnum + " " + dieFtyp + " + " + dieFmod;
  document.querySelector(`#but3A`).innerText = rollButton3A;
  document.querySelector(`#numDieUp3A`).value = dieAnum;
  document.querySelector(`#selDieUp3A`).value = dieAtyp;
  document.querySelector(`#modDieUp3A`).value = dieAmod;
  document.querySelector(`#rollFor3A`).value = rolAtyp;
  document.querySelector(`#but3B`).innerText = rollButton3B;
  document.querySelector(`#numDieUp3B`).value = dieBnum;
  document.querySelector(`#selDieUp3B`).value = dieBtyp;
  document.querySelector(`#modDieUp3B`).value = dieBmod;
  document.querySelector(`#rollFor3B`).value = rolBtyp;
  document.querySelector(`#but3C`).innerText = rollButton3C;
  document.querySelector(`#numDieUp3C`).value = dieCnum;
  document.querySelector(`#selDieUp3C`).value = dieCtyp;
  document.querySelector(`#modDieUp3C`).value = dieCmod;
  document.querySelector(`#rollFor3C`).value = rolCtyp;
  document.querySelector(`#but3D`).innerText = rollButton3D;
  document.querySelector(`#numDieUp3D`).value = dieDnum;
  document.querySelector(`#selDieUp3D`).value = dieDtyp;
  document.querySelector(`#modDieUp3D`).value = dieDmod;
  document.querySelector(`#rollFor3D`).value = rolDtyp;
  document.querySelector(`#but3E`).innerText = rollButton3E;
  document.querySelector(`#numDieUp3E`).value = dieEnum;
  document.querySelector(`#selDieUp3E`).value = dieEtyp;
  document.querySelector(`#modDieUp3E`).value = dieEmod;
  document.querySelector(`#rollFor3E`).value = rolEtyp;
  document.querySelector(`#but3F`).innerText = rollButton3F;
  document.querySelector(`#numDieUp3F`).value = dieFnum;
  document.querySelector(`#selDieUp3F`).value = dieFtyp;
  document.querySelector(`#modDieUp3F`).value = dieFmod;
  document.querySelector(`#rollFor3F`).value = rolFtyp;
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
      card3: saverole,
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
  db.collection("card3").doc(`CBWkUW2q24NLIdE6l2xm`).update({
    name: charThree.value,
    rolAtyp: rollFor3A.value,
    dieAnum: numDieUp3A.value,
    dieAtyp: selDieUp3A.value,
    dieAmod: modDieUp3A.value,
    rolBtyp: rollFor3B.value,
    dieBnum: numDieUp3B.value,
    dieBtyp: selDieUp3B.value,
    dieBmod: modDieUp3B.value,
    rolCtyp: rollFor3C.value,
    dieCnum: numDieUp3C.value,
    dieCtyp: selDieUp3C.value,
    dieCmod: modDieUp3C.value,
    rolDtyp: rollFor3D.value,
    dieDnum: numDieUp3D.value,
    dieDtyp: selDieUp3D.value,
    dieDmod: modDieUp3D.value,
    rolEtyp: rollFor3E.value,
    dieEnum: numDieUp3E.value,
    dieEtyp: selDieUp3E.value,
    dieEmod: modDieUp3E.value,
    rolFtyp: rollFor3F.value,
    dieFnum: numDieUp3F.value,
    dieFtyp: selDieUp3F.value,
    dieFmod: modDieUp3F.value,
  });
}
