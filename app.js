const anchor = document.getElementById("anchor");
const body = document.getElementById("body");

const sound = new Audio("chris-gilbert-laugh.mp3");
// let clickEvent = new Event("click");
// clickEvent.isTrusted = true;

body.addEventListener("click", (e) => {
  sound.play();
});

anchor.addEventListener("markerFound", (e) => {
  sound.play();
  console.log("played sound");
  anchor.addEventListener("markerLost", (e) => {
    sound.pause();
    console.log("paused sound");
  });
});
