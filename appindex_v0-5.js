const cardList = document.querySelector("#card-list");
const form = document.querySelector("#add-card-form");
let cards = "card4";
// create element & render card
function renderCard(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let rolAtyp = document.createElement("span");
  let dieAnum = document.createElement("span");
  let dieAtyp = document.createElement("span");
  let dieAmod = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  rolAtyp.textContent = doc.data().rolAtyp;
  dieAnum.textContent = doc.data().dieAnum;
  dieAtyp.textContent = doc.data().dieAtyp;
  dieAmod.textContent = doc.data().dieAmod;
  cross.textContent = "x";

  li.appendChild(name);
  li.appendChild(dieAnum);
  li.appendChild(dieAtyp);
  li.appendChild(dieAmod);
  li.appendChild(rolAtyp);
  li.appendChild(cross);

  cardList.appendChild(li);

  // deleting data
  cross.addEventListener("click", (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection(cards).doc(id).delete();
  });
}

// getting data
// db.collection('cards').orderBy('city').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });

// saving data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection(cards).add({
    name: form.name.value,
    rolAtyp: form.rolAtyp.value,
    dieAnum: form.dieAnum.value,
    dieAtyp: form.dieAtyp.value,
    dieAmod: form.dieAmod.value,
  });
  form.name.value = "";
  form.rolAtyp.value = "";
  form.dieAnum.value = "";
  form.dieAtyp.value = "";
  form.dieAmod.value = "";
});

// real-time listener
db.collection(cards)
  .orderBy("city")
  .onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    changes.forEach((change) => {
      console.log(change.doc.data());
      if (change.type == "added") {
        renderCafe(change.doc);
      } else if (change.type == "removed") {
        let li = cardList.querySelector("[data-id=" + change.doc.id + "]");
        cardList.removeChild(li);
      }
    });
  });

// updating records (console demo)
// db.collection('cards').doc('DOgwUvtEQbjZohQNIeMr').update({
//     name: 'mario world'
// });

// db.collection('cards').doc('DOgwUvtEQbjZohQNIeMr').update({
//     city: 'hong kong'
// });

// setting data
// db.collection('cards').doc('DOgwUvtEQbjZohQNIeMr').set({
//     city: 'hong kong'
// });
