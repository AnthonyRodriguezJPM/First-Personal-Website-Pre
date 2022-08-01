const h2 = document.createElement("h2");
h2.textContent = "Created by: Anthony Rodriguez";

document.querySelector("body").appendChild(h2);


const input = document.getElementById('myBtn');

function clickAlert() {
  alert('Woof Wooooof!!');
}

input.addEventListener('click', clickAlert);

clickAlert(e);