//  ____________________getting data for loading
db.collection("card6")
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
  document.getElementById("charSix").value = name;
  let rollButton6A = "Roll " + dieAnum + " " + dieAtyp + " + " + dieAmod;
  let rollButton6B = "Roll " + dieBnum + " " + dieBtyp + " + " + dieBmod;
  let rollButton6C = "Roll " + dieCnum + " " + dieCtyp + " + " + dieCmod;
  let rollButton6D = "Roll " + dieDnum + " " + dieDtyp + " + " + dieDmod;
  let rollButton6E = "Roll " + dieEnum + " " + dieEtyp + " + " + dieEmod;
  let rollButton6F = "Roll " + dieFnum + " " + dieFtyp + " + " + dieFmod;
  document.querySelector(`#but6A`).innerText = rollButton6A;
  document.querySelector(`#numDieUp6A`).value = dieAnum;
  document.querySelector(`#selDieUp6A`).value = dieAtyp;
  document.querySelector(`#modDieUp6A`).value = dieAmod;
  document.querySelector(`#rollFor6A`).value = rolAtyp;
  document.querySelector(`#but6B`).innerText = rollButton6B;
  document.querySelector(`#numDieUp6B`).value = dieBnum;
  document.querySelector(`#selDieUp6B`).value = dieBtyp;
  document.querySelector(`#modDieUp6B`).value = dieBmod;
  document.querySelector(`#rollFor6B`).value = rolBtyp;
  document.querySelector(`#but6C`).innerText = rollButton6C;
  document.querySelector(`#numDieUp6C`).value = dieCnum;
  document.querySelector(`#selDieUp6C`).value = dieCtyp;
  document.querySelector(`#modDieUp6C`).value = dieCmod;
  document.querySelector(`#rollFor6C`).value = rolCtyp;
  document.querySelector(`#but6D`).innerText = rollButton6D;
  document.querySelector(`#numDieUp6D`).value = dieDnum;
  document.querySelector(`#selDieUp6D`).value = dieDtyp;
  document.querySelector(`#modDieUp6D`).value = dieDmod;
  document.querySelector(`#rollFor6D`).value = rolDtyp;
  document.querySelector(`#but6E`).innerText = rollButton6E;
  document.querySelector(`#numDieUp6E`).value = dieEnum;
  document.querySelector(`#selDieUp6E`).value = dieEtyp;
  document.querySelector(`#modDieUp6E`).value = dieEmod;
  document.querySelector(`#rollFor6E`).value = rolEtyp;
  document.querySelector(`#but6F`).innerText = rollButton6F;
  document.querySelector(`#numDieUp6F`).value = dieFnum;
  document.querySelector(`#selDieUp6F`).value = dieFtyp;
  document.querySelector(`#modDieUp6F`).value = dieFmod;
  document.querySelector(`#rollFor6F`).value = rolFtyp;
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
      card6: saverole,
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
  db.collection("card6").doc(`5ik2x5D2lw7MkNJYegZO`).update({
    name: charSix.value,
    rolAtyp: rollFor6A.value,
    dieAnum: numDieUp6A.value,
    dieAtyp: selDieUp6A.value,
    dieAmod: modDieUp6A.value,
    rolBtyp: rollFor6B.value,
    dieBnum: numDieUp6B.value,
    dieBtyp: selDieUp6B.value,
    dieBmod: modDieUp6B.value,
    rolCtyp: rollFor6C.value,
    dieCnum: numDieUp6C.value,
    dieCtyp: selDieUp6C.value,
    dieCmod: modDieUp6C.value,
    rolDtyp: rollFor6D.value,
    dieDnum: numDieUp6D.value,
    dieDtyp: selDieUp6D.value,
    dieDmod: modDieUp6D.value,
    rolEtyp: rollFor6E.value,
    dieEnum: numDieUp6E.value,
    dieEtyp: selDieUp6E.value,
    dieEmod: modDieUp6E.value,
    rolFtyp: rollFor6F.value,
    dieFnum: numDieUp6F.value,
    dieFtyp: selDieUp6F.value,
    dieFmod: modDieUp6F.value,
  });
}
