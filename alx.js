const clinks = document.getElementById("para");
const amarua = document.getElementById("btn");
clinks.innerText = "Lorem ipsum ece acira.";

function changeBtn() {
  amarua.innerText = "Button changed";
  amarua.style.color = "red";
  amarua.style.fontSize = "25px";
}

amarua.addEventListener("click", changeBtn);

// creating element by using js
const newElement = document.createElement("footer");
const elementCreated = document.body.appendChild(newElement);
