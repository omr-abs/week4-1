const main = document.querySelector(".main-elmnt");
const result = document.querySelector(".result-zone");

const initial = str => {
  return str[0].toUpperCase() + str.substring(1);
};

const createCard = (obj, indx) => {
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.id = `${indx}`;

  const portrait = document.createElement("img");
  portrait.className = "pix";
  portrait.src = obj.picture.large;
  portrait.alt = "Portrait";

  const textCard = document.createElement("div");
  textCard.className = "text pix";

  const nameField = document.createElement("div");
  nameField.className = "name-field";
  const { title, first, last } = obj.name;
  nameField.innerText = `${initial(title)}. ${initial(first)} ${initial(last)}`;

  const { gender, email } = obj;
  const genderField = document.createElement("div");
  genderField.className = "subfield pix";
  genderField.innerText = `Gender: ${gender}`;
  const emailField = document.createElement("div");
  emailField.className = "subfield";
  emailField.innerText = `Email: ${email}`;

  textCard.append(nameField, genderField, emailField);
  newCard.append(portrait, textCard);
  result.appendChild(newCard);
};

const filterData = evnt => {
  evnt.preventDefault();
  const collection = document.querySelectorAll("input");
  const selector = Array.from(collection)
    .map(item => [item.id, item.value])
    .filter(item => item[1])[0];

  if (!selector) {
    alert("Enter at least a criterion");
    return;
  } // Click with no value entered
  const key = selector[0];
  const val = selector[1];
  let filteredList = [];

  if (key === "gender") {
    filteredList = list.filter(item => item.gender === val);
  } else {
    filteredList = list.filter(item => item.name[key] === val);
  }

  // removes cards for complete list
  const cardList = document.querySelectorAll(".card");
  for (card of cardList) {
    result.removeChild(card);
  }
  loopCreate(filteredList);
  document.querySelector(`#${key}`).value = null;
};

document.querySelector("#submitButton").addEventListener("click", filterData);

const loopCreate = arr => {
  for (let i = 0; i < arr.length; i++) {
    createCard(arr[i], i);
  }
};

loopCreate(list);
