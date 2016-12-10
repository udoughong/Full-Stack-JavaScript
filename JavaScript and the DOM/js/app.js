const toggleList = document.querySelector("#toggleList");
const listDiv = document.querySelector("div.list");
const descriptionInput = document.querySelector("input.description");
const descriptionParagraph = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description");
const listUl = listDiv.querySelector("ul");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");

listUl.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    if (event.target.className == "remove") {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == "up") {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);        
      }
    }
    if (event.target.className == "down") {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);        
      }
    }
  }
});

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