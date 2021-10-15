const anchor = document.getElementById("anchor");
const ios = document.getElementById("ios");
const btnBox = document.getElementById("btnBox");
let sound = null;

let btn = document.createElement("button");
btn.innerText = "Laugh Off";
btn.style.padding = "1rem";
btn.style.color = "white";
btn.style.background = "red";
btn.style.borderRadius = "10px";
btn.style.border = "none";
btn.id = "laugh";
btn.addEventListener("click", (e) => {
  console.log("click");
  sound = new Audio("chris-gilbert-laugh.mp3");

  if (e.target.outerText === "Laugh Off") {
    btn.innerText = "Laugh On";
    btn.style.background = "blue";
  }
});

if (/webOS|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  btnBox.appendChild(btn);
}

anchor.addEventListener("markerFound", (e) => {
  if (btn.innerText === "Laugh On") {
    sound.play();
  }
});

// ios user event workaround
// you have to initiate a user event before having access to the Audio context
// solved by creating a button for ios users to press
