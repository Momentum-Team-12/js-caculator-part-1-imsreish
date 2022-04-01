console.log("JS is connected");
// 'button');
// btns.addEventListener("click", printToLog());
// function printToLog() {
//   console.log("Button has been clicked");
// }

// let buttonClick = document.querySelectorAll("button");
// // or var??
// buttonClick.addEventListener("click", function () {
//   alert("Bist du sicher, dass du abbrechen möchtest?");
// });

// the error I am getting with the above, "buttonClick.addEventListener is not a function", apparently has to do with the script being executed prior to the html element before it's available in the DOM

// let buttonClick = document.querySelectorAll("button");
// buttonClick.addEventListener("click", function () {});
// for (index = 0; index < buttonClick.length; index++) {
//   console.log("click");
// }

// }
// let btns = document.querySelectorAll(".button");
// for (let btn of btns) {
//   square.addEventListener("click", function (event) {
//     console.log(event);
//     console.log(event.target.innerText);
//     event.target.innerText = "clicked";
//     // event.target.remove()
//   });
// }

// for (let buttonDetect of document.querySelectorAll("operator")) {
//   buttonDetect.addEventListener("mouseover", function (event) {
//     console.log("mouseover");
//     // buttonDetect.src = headshot.dataset["gif"];
//   });
//   buttonDetect.addEventListener("mouseout", function (event) {
//     console.log("mouseout");
//     // headshot.src = headshot.dataset["src"];
//   });
// }
