const toggleList = document.querySelector("#toggleList");
const listDiv = document.querySelector(".list");
const input = document.querySelector("input.description");
const p = document.querySelector("p.description");
const button = document.querySelector("button.description");

toggleList.addEventListener("click", () => {
  if (listDiv.style.display == "none") {
    toggleList.innerHTML = "Hide List";
    listDiv.style.display = "block";
  } else {
    toggleList.innerHTML = "Show List";
    listDiv.style.display = "none";    
  }
});

button.addEventListener("click", () => {
  p.innerHTML = input.value + ":";
});