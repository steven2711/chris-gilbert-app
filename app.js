const anchor = document.getElementById("anchor");
const sound = new Audio("chris-gilbert-laugh.mp3");

anchor.addEventListener("markerFound", (e) => {
  sound.play();
  console.log("played sound");

  // anchor.addEventListener("markerLost", (e) => {
  //   sound.pause();

  //   console.log("paused sound");
  // });
});
