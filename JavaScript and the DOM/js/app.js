const toggleList = document.querySelector("#toggleList");
const listDiv = document.querySelector("div.list");
const descriptionInput = document.querySelector("input.description");
const descriptionParagraph = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");
const removeItemButton = document.querySelector("button.removeItemButton");

toggleList.addEventListener("click", () => {
  if (listDiv.style.display == "none") {
    toggleList.innerHTML = "Hide List";
    listDiv.style.display = "block";
  } else {
    toggleList.innerHTML = "Show List";
    listDiv.style.display = "none";    
  }
});

descriptionButton.addEventListener("click", () => {
  descriptionParagraph.innerHTML = descriptionInput.value + ":";
  descriptionInput.value = ""; // Clears the input.
});

addItemButton.addEventListener("click", () => {
  let ul = document.querySelector("ul.list");
  let li = document.createElement("li");
  li.innerHTML = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = ""; // Clears the input.
});

removeItemButton.addEventListener("click", () => {
  let ul = document.querySelector("ul.list");
  let li = document.querySelector("li:last-child");
  ul.removeChild(li);
});