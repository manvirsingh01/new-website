// adding the mode change  button
const body = document.querySelector("body");
const mode = document.querySelector(".mode");
let change="white";
// Event listener with correct event name and callback function
mode.addEventListener('click', () => {
  if (change=="white") {
    // body.style.backgroundColor="black";
    body.style.backgroundColor="black";
    body.style.color="white";
    change="black";
  }
  else{
    body.style.backgroundColor="white";
    body.style.color="black";
    change="white";
  }
});

// // color change when the hove on any option
// const bg_change=document.querySelector(".option")
// bg_change.addEventListener('onmouseover',()=>{
//     if () {
        
//     }
// })
