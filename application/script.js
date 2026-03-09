// mobile menu

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn){
menuBtn.onclick = () => {
navMenu.classList.toggle("active");
};
}


// event filtering

function filterEvents(type){

let events = document.querySelectorAll(".event");

events.forEach(event => {

if(type === "all"){
event.style.display="block";
}
else if(event.classList.contains(type)){
event.style.display="block";
}
else{
event.style.display="none";
}

});
}


// certificate generator

function generateCertificate(){

let name = document.getElementById("nameInput").value;

document.getElementById("certName").textContent = name;

}

// Select the objects
const certificate = document.querySelector('.certificate');
const eventIcon = document.querySelector('.event');

// Set initial positions
let certPos = 0;
let eventPos = 0;

// Animation loop
function animate() {
  // Move certificate from left to right
  certPos += 2; // speed in pixels
  if(certPos > window.innerWidth) certPos = -100; // reset when off-screen
  certificate.style.left = certPos + 'px';

  requestAnimationFrame(animate); // smooth animation
}

// Start the animation
animate();