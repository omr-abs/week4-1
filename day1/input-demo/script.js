const main = document.querySelector("main");
const textResult = document.querySelector(".result");

const submitValues = evnt => {
  evnt.preventDefault();
  const valueCollection = document.querySelectorAll("input");
  const valueList = Array.from(valueCollection);

  console.log("value list: ", valueList);
};
