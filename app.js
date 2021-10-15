const anchor = document.getElementById("anchor");
const body = document.getElementById("body");

// let clickEvent = new Event("click");
// clickEvent.isTrusted = true;

let sound = null;
anchor.addEventListener("markerFound", (e) => {
  sound = new Audio("chris-gilbert-laugh.mp3");

  sound.play();
  console.log("played sound");
  anchor.addEventListener("markerLost", (e) => {
    sound.pause();
    console.log("paused sound");
  });
});
