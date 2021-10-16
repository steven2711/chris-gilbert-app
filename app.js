const anchor = document.getElementById("anchor");
const ios = document.getElementById("ios");
const btnBox = document.getElementById("btnBox");

const audioFiles = ["audio/chris-gilbert-laugh.mp3", "audio/chris-singing.mp3"];

let sound = null;
let isIOS = null;

// Load btn with default sound track
let btn = createButton(audioFiles[0]);

if (/webOS|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  btnBox.appendChild(btn);
  isIOS = true;
} else {
  sound = new Audio("chris-gilbert-laugh.mp3");
}

anchor.addEventListener("markerFound", async (e) => {
  const randomNumber = randomInteger(0, audioFiles.length - 1);
  sound.src = audioFiles[randomNumber];

  if (isIOS && btn.innerText === "Sound On") {
    await playSound(sound);
  } else if (!isIOS) {
    await playSound(sound);
  }
});

// ios user event workaround
// you have to initiate a user event before having access to the Audio context
// solved by creating a button for ios users to press
