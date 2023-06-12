//  ____________________get real-time data
db.collection("card rolls").onSnapshot((snapshot) => {
  snapshot.docs.forEach((doc) => {
    renderCard(doc);
  });
});
function renderCard(doc) {
  // _________________________________card1
  name1 = doc.data().card1[0];
  rolAtyp = doc.data().card1[3];
  dieAtyp = doc.data().card1[2];
  dieAnum = doc.data().card1[1];
  dieAmod = doc.data().card1[4];
  dieAtot = doc.data().card1[5];
  dieAoly = doc.data().card1[6];
  charOne.innerText = name1;
  let rolled1 = dieAnum + "" + dieAtyp + " Result= " + dieAmod;
  type1.innerText = rolAtyp;
  rolled1a.innerText = rolled1;
  total1.innerText = dieAtot;
  // _________________________________card2
  name2 = doc.data().card2[0];
  rolBtyp = doc.data().card2[3];
  dieBtyp = doc.data().card2[2];
  dieBnum = doc.data().card2[1];
  dieBmod = doc.data().card2[4];
  dieBtot = doc.data().card2[5];
  dieBoly = doc.data().card2[6];
  charTwo.innerText = name2;
  let rolled2 = dieBnum + "" + dieBtyp + " Result= " + dieBmod;
  type2.innerText = rolBtyp;
  rolled2b.innerText = rolled2;
  total2.innerText = dieBtot;
  // _________________________________card3
  name3 = doc.data().card3[0];
  rolCtyp = doc.data().card3[3];
  dieCtyp = doc.data().card3[2];
  dieCnum = doc.data().card3[1];
  dieCmod = doc.data().card3[4];
  dieCtot = doc.data().card3[5];
  dieColy = doc.data().card3[6];
  charThree.innerText = name3;
  let rolled3 = dieCnum + "" + dieCtyp + " Result= " + dieCmod;
  type3.innerText = rolCtyp;
  rolled3a.innerText = rolled3;
  total3.innerText = dieCtot;
  // _________________________________card4
  name4 = doc.data().card4[0];
  rolDtyp = doc.data().card4[3];
  dieDtyp = doc.data().card4[2];
  dieDnum = doc.data().card4[1];
  dieDmod = doc.data().card4[4];
  dieDtot = doc.data().card4[5];
  dieDoly = doc.data().card4[6];
  charFour.innerText = name4;
  let rolled4 = dieDnum + "" + dieDtyp + " Result= " + dieDmod;
  type4.innerText = rolDtyp;
  rolled4a.innerText = rolled4;
  total4.innerText = dieDtot;
  // _________________________________card5
  name5 = doc.data().card5[0];
  rolEtyp = doc.data().card5[3];
  dieEtyp = doc.data().card5[2];
  dieEnum = doc.data().card5[1];
  dieEmod = doc.data().card5[4];
  dieEtot = doc.data().card5[5];
  dieEoly = doc.data().card5[6];
  charFive.innerText = name5;
  let rolled5 = dieEnum + "" + dieEtyp + " Result= " + dieEmod;
  type5.innerText = rolEtyp;
  rolled5a.innerText = rolled5;
  total5.innerText = dieEtot;
  // _________________________________card6
  name6 = doc.data().card6[0];
  rolFtyp = doc.data().card6[3];
  dieFtyp = doc.data().card6[2];
  dieFnum = doc.data().card6[1];
  dieFmod = doc.data().card6[4];
  dieFtot = doc.data().card6[5];
  dieFoly = doc.data().card6[6];
  charSix.innerText = name6;
  let rolled6 = dieFnum + "" + dieFtyp + " Result= " + dieFmod;
  type6.innerText = rolFtyp;
  rolled6a.innerText = rolled6;
  total6.innerText = dieFtot;
  // _________________________________card7
  name7 = doc.data().card7[0];
  rolGtyp = doc.data().card7[3];
  dieGtyp = doc.data().card7[2];
  dieGnum = doc.data().card7[1];
  dieGmod = doc.data().card7[4];
  dieGtot = doc.data().card7[5];
  dieGoly = doc.data().card7[6];
  charSeven.innerText = name7;
  let rolled7 = dieGnum + "" + dieGtyp + " Result= " + dieGmod;
  type7.innerText = rolGtyp;
  rolled7a.innerText = rolled7;
  total7.innerText = dieGtot;
  // _________________________________card8
  name8 = doc.data().card8[0];
  rolHtyp = doc.data().card8[3];
  dieHtyp = doc.data().card8[2];
  dieHnum = doc.data().card8[1];
  dieHmod = doc.data().card8[4];
  dieHtot = doc.data().card8[5];
  dieHoly = doc.data().card8[6];
  charEight.innerText = name8;
  let rolled8 = dieHnum + "" + dieHtyp + " Result= " + dieHmod;
  type8.innerText = rolHtyp;
  rolled8a.innerText = rolled8;
  total8.innerText = dieHtot;
  // ___________________________________________roll sound
  let audio = new Audio("audio/r.wav");
  audio.play();
  // ___________________________________________die colors
  // ___________________________________________die colors

  dieAoly = dieAoly.split`,`.map((x) => +x);
  dieBoly = dieBoly.split`,`.map((x) => +x);
  dieColy = dieColy.split`,`.map((x) => +x);
  dieDoly = dieDoly.split`,`.map((x) => +x);
  dieHoly = dieEoly.split`,`.map((x) => +x);
  dieFoly = dieFoly.split`,`.map((x) => +x);
  dieGoly = dieGoly.split`,`.map((x) => +x);
  dieHoly = dieHoly.split`,`.map((x) => +x);

  if (dieAtyp == "D20") {
    if (dieAoly.includes(20)) {
      if (dieAoly.includes(1)) {
        document.getElementById("total1").style.color = "purple";
      } else {
        document.getElementById("total1").style.color = "blue";
      }
    } else if (dieAoly.includes(1)) {
      document.getElementById("total1").style.color = "red";
    } else {
      document.getElementById("total1").style.color = "black";
    }
  } else {
    document.getElementById("total1").style.color = "black";
    // ___________________________________________roll sound
  }
  // ___________________________________________die colors

  if (dieBtyp == "D20") {
    if (dieBoly.includes(20)) {
      if (dieBoly.includes(1)) {
        document.getElementById("total2").style.color = "purple";
      } else {
        document.getElementById("total2").style.color = "blue";
      }
    } else if (dieBoly.includes(1)) {
      document.getElementById("total2").style.color = "red";
    } else {
      document.getElementById("total2").style.color = "black";
    }
  } else {
    document.getElementById("total2").style.color = "black";
  }
  // ___________________________________________die colors

  if (dieCtyp == "D20") {
    if (dieColy.includes(20)) {
      if (dieColy.includes(1)) {
        document.getElementById("total3").style.color = "purple";
      } else {
        document.getElementById("total3").style.color = "blue";
      }
    } else if (dieColy.includes(1)) {
      document.getElementById("total3").style.color = "red";
    } else {
      document.getElementById("total3").style.color = "black";
    }
  } else {
    document.getElementById("total3").style.color = "black";
  }
  // ___________________________________________die colors

  if (dieDtyp == "D20") {
    if (dieDoly.includes(20)) {
      if (dieDoly.includes(1)) {
        document.getElementById("total4").style.color = "purple";
      } else {
        document.getElementById("total4").style.color = "blue";
      }
    } else if (dieDoly.includes(1)) {
      document.getElementById("total4").style.color = "red";
    } else {
      document.getElementById("total4").style.color = "black";
    }
  } else {
    document.getElementById("total4").style.color = "black";
  }
  // ___________________________________________die colors
  dieEoly = dieEoly.split`,`.map((x) => +x);
  if (dieEtyp == "D20") {
    if (dieEoly.includes(20)) {
      if (dieEoly.includes(1)) {
        document.getElementById("total5").style.color = "purple";
      } else {
        document.getElementById("total5").style.color = "blue";
      }
    } else if (dieEoly.includes(1)) {
      document.getElementById("total5").style.color = "red";
    } else {
      document.getElementById("total5").style.color = "black";
    }
  } else {
    document.getElementById("total5").style.color = "black";
  }
  // ___________________________________________die colors

  if (dieFtyp == "D20") {
    if (dieFoly.includes(20)) {
      if (dieFoly.includes(1)) {
        document.getElementById("total6").style.color = "purple";
      } else {
        document.getElementById("total6").style.color = "blue";
      }
    } else if (dieFoly.includes(1)) {
      document.getElementById("total6").style.color = "red";
    } else {
      document.getElementById("total6").style.color = "black";
    }
  } else {
    document.getElementById("total6").style.color = "black";
  }
  // ___________________________________________die colors

  if (dieGtyp == "D20") {
    if (dieGoly.includes(20)) {
      if (dieGoly.includes(1)) {
        document.getElementById("total7").style.color = "purple";
      } else {
        document.getElementById("total7").style.color = "blue";
      }
    } else if (dieGoly.includes(1)) {
      document.getElementById("total7").style.color = "red";
    } else {
      document.getElementById("total7").style.color = "black";
    }
  } else {
    document.getElementById("total7").style.color = "black";
  }
  // ___________________________________________die colors

  if (dieHtyp == "D20") {
    if (dieHoly.includes(20)) {
      if (dieHoly.includes(1)) {
        document.getElementById("total8").style.color = "purple";
      } else {
        document.getElementById("total8").style.color = "blue";
      }
    } else if (dieHoly.includes(1)) {
      document.getElementById("total8").style.color = "red";
    } else {
      document.getElementById("total8").style.color = "black";
    }
  } else {
    document.getElementById("total8").style.color = "black";
  }
}
