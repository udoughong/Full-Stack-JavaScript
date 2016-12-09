const myList = document.getElementsByTagName("li");

for (let i = 0; i < myList.length; i += 1){
  myList[i].style.color = "purple";
}

const errorNotPurple = document.querySelectorAll(".error-not-purple");

for (let i = 0; i < errorNotPurple.length; i += 1){
  errorNotPurple[i].style.color = "red";
}

// make striped table
const striped = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < striped.length; i += 1){
  striped[i].style.backgroundColor = "lightgray";
}