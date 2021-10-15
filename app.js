// Element.prototype._addEventListener = Element.prototype.addEventListener;
// Element.prototype.addEventListener = function () {
//   let args = [...arguments];
//   let temp = args[1];
//   args[1] = function () {
//     let args2 = [...arguments];
//     args2[0] = Object.assign({}, args2[0]);
//     args2[0].isTrusted = true;
//     return temp(...args2);
//   };
//   return this._addEventListener(...args);
// };

const anchor = document.getElementById("anchor");
const body = document.getElementById("body");
const ios = document.getElementById("ios");

let sound = null;
let clickEvent = new Event("click");

body.addEventListener("click", (e) => {
  sound = new Audio("chris-gilbert-laugh.mp3");
});

anchor.addEventListener("markerFound", (e) => {
  // sound = new Audio("chris-gilbert-laugh.mp3");
  sound.play();

  // sound.play();
  // console.log("played sound");
  // anchor.addEventListener("markerLost", (e) => {
  //   sound.pause();
  //   console.log("paused sound");
  // });
  // ios.dispatchEvent(clickEvent);
});

// ios user event workaround
// https://stackoverflow.com/questions/49518959/javascript-trigger-an-inputevent-istrusted-true
