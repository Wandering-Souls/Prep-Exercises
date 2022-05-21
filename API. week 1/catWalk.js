'use strict';

const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

  // Resolve this promise when the cat (`img`) has walked from `startPos` to
    // `stopPos`.
    // Make good use of the `STEP_INTERVAL_PX` and `STEP_INTERVAL_MS`
    // constants.

function walk(img, startPos, stopPos) {
    let positionFromLeft = startPos;
  return new Promise((resolve) => {
 let stepInterval = setInterval( () =>{
  if (positionFromLeft < stopPos){
    positionFromLeft += STEP_SIZE_PX;
    img.style.left = `{positionFromLeft}`;
  } else {
      resolve(img);
  }
}, STEP_INTERVAL_MS)
  });
  
}

   // Switch the `.src` of the `img` from the walking cat to the dancing cat
    // and, after a timeout, reset the `img` back to the walking cat. Then
    // resolve the promise.
    // Make good use of the `DANCING_CAT_URL` and `DANCE_TIME_MS` constants.

function dance(img) {
  return new Promise((resolve) => {
 
  });
}

 // Use the `walk()` and `dance()` functions to let the cat do the following:
  // 1. Walk from `startPos` to `centerPos`.
  // 2. Then dance for 5 secs.
  // 3. Then walk from `centerPos` to `stopPos`.
  // 4. Repeat the first three steps indefinitely.

function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

 
}

window.addEventListener('load', catWalk);