function inputValue(evnt) {
  const val = document.querySelector("#text1").value;
  console.log("value of my input: ", val);
  return false;
}
document.querySelector("#submitButton").addEventListener("click", inputValue);
