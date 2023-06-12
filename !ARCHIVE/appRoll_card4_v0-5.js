//  ____________________getting data for loading
db.collection("card4")
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
  document.getElementById("charFour").value = name;
  let rollButton4A = "Roll " + dieAnum + " " + dieAtyp + " + " + dieAmod;
  let rollButton4B = "Roll " + dieBnum + " " + dieBtyp + " + " + dieBmod;
  let rollButton4C = "Roll " + dieCnum + " " + dieCtyp + " + " + dieCmod;
  let rollButton4D = "Roll " + dieDnum + " " + dieDtyp + " + " + dieDmod;
  let rollButton4E = "Roll " + dieEnum + " " + dieEtyp + " + " + dieEmod;
  let rollButton4F = "Roll " + dieFnum + " " + dieFtyp + " + " + dieFmod;
  document.querySelector(`#but4A`).innerText = rollButton4A;
  document.querySelector(`#numDieUp4A`).value = dieAnum;
  document.querySelector(`#selDieUp4A`).value = dieAtyp;
  document.querySelector(`#modDieUp4A`).value = dieAmod;
  document.querySelector(`#rollFor4A`).value = rolAtyp;
  document.querySelector(`#but4B`).innerText = rollButton4B;
  document.querySelector(`#numDieUp4B`).value = dieBnum;
  document.querySelector(`#selDieUp4B`).value = dieBtyp;
  document.querySelector(`#modDieUp4B`).value = dieBmod;
  document.querySelector(`#rollFor4B`).value = rolBtyp;
  document.querySelector(`#but4C`).innerText = rollButton4C;
  document.querySelector(`#numDieUp4C`).value = dieCnum;
  document.querySelector(`#selDieUp4C`).value = dieCtyp;
  document.querySelector(`#modDieUp4C`).value = dieCmod;
  document.querySelector(`#rollFor4C`).value = rolCtyp;
  document.querySelector(`#but4D`).innerText = rollButton4D;
  document.querySelector(`#numDieUp4D`).value = dieDnum;
  document.querySelector(`#selDieUp4D`).value = dieDtyp;
  document.querySelector(`#modDieUp4D`).value = dieDmod;
  document.querySelector(`#rollFor4D`).value = rolDtyp;
  document.querySelector(`#but4E`).innerText = rollButton4E;
  document.querySelector(`#numDieUp4E`).value = dieEnum;
  document.querySelector(`#selDieUp4E`).value = dieEtyp;
  document.querySelector(`#modDieUp4E`).value = dieEmod;
  document.querySelector(`#rollFor4E`).value = rolEtyp;
  document.querySelector(`#but4F`).innerText = rollButton4F;
  document.querySelector(`#numDieUp4F`).value = dieFnum;
  document.querySelector(`#selDieUp4F`).value = dieFtyp;
  document.querySelector(`#modDieUp4F`).value = dieFmod;
  document.querySelector(`#rollFor4F`).value = rolFtyp;
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
      card4: saverole,
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
  db.collection("card4").doc(`cqAnKKapItqC38Suh3KS`).update({
    name: charFour.value,
    rolAtyp: rollFor4A.value,
    dieAnum: numDieUp4A.value,
    dieAtyp: selDieUp4A.value,
    dieAmod: modDieUp4A.value,
    rolBtyp: rollFor4B.value,
    dieBnum: numDieUp4B.value,
    dieBtyp: selDieUp4B.value,
    dieBmod: modDieUp4B.value,
    rolCtyp: rollFor4C.value,
    dieCnum: numDieUp4C.value,
    dieCtyp: selDieUp4C.value,
    dieCmod: modDieUp4C.value,
    rolDtyp: rollFor4D.value,
    dieDnum: numDieUp4D.value,
    dieDtyp: selDieUp4D.value,
    dieDmod: modDieUp4D.value,
    rolEtyp: rollFor4E.value,
    dieEnum: numDieUp4E.value,
    dieEtyp: selDieUp4E.value,
    dieEmod: modDieUp4E.value,
    rolFtyp: rollFor4F.value,
    dieFnum: numDieUp4F.value,
    dieFtyp: selDieUp4F.value,
    dieFmod: modDieUp4F.value,
  });
}
