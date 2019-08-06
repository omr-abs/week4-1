const first = list[0];
const main = document.querySelector(".main-elmnt");

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
  main.appendChild(newCard);
};

const loopCreate = arr => {
  for (let i = 0; i < arr.length; i++) {
    createCard(arr[i], i);
  }
};

loopCreate(list);
