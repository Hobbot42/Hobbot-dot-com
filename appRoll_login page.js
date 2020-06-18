//  ____________________get real-time data
db.collection("card rolls").onSnapshot((snapshot) => {
  snapshot.docs.forEach((doc) => {
    renderCard(doc);
  });
});
function renderCard(doc) {
  // _________________________________card1
  name1 = doc.data().card1[0];
  charOne.innerText = name1;
  // _________________________________card2
  name2 = doc.data().card2[0];
  charTwo.innerText = name2;
  // _________________________________card3
  name3 = doc.data().card3[0];
  charThree.innerText = name3;
  // _________________________________card4
  name4 = doc.data().card4[0];
  charFour.innerText = name4;
  // _________________________________card5
  name5 = doc.data().card5[0];
  charFive.innerText = name5;
  // _________________________________card6
  name6 = doc.data().card6[0];
  charSix.innerText = name6;
  // _________________________________card7
  name7 = doc.data().card7[0];
  charSeven.innerText = name7;
  // _________________________________card8
  name8 = doc.data().card8[0];
  charEight.innerText = name8;
}
