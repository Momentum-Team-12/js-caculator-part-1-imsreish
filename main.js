console.log("JS is connected");

const selectButton = document.querySelectorAll(".button");
// declares new varibale (button) equivalent to the querySelectorAll method for every element "button".
for (let buttonCheck of selectButton) {
  buttonCheck.addEventListener("click", (event) => {
    // creates a new loop with variable (buttonCheck) used for iterating through the "array" returned from the "selectButton" querySelectorAll method.
    console.log("click EventListener used");

    if (event.target.id === "clear") {
      resultField.innerText === null;
    }
    else if (event.target.id !== "findResult") {
      resultField.innerText += event.target.id;
      console.log(resultField.innerText);
    }
    
    if (event.target.id === "findResult") {
      eval(resultField.innerText);
      // let theResult = eval(resultField.innerText);
      // resultField.innerText = theResult;
      // console.log(theResult);
      console.log(resultField.innerText);
    }
  });
}

// button.addEventListener("click", (event) => {
//   button.textContent = `Click count: ${event.detail}`;
//   console.log("button has been clicked");
// });

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

// let btnClick = document.querySelectorAll(".row");
// btnClick.addEventListener("click", function (event) {
//   console.log(event);
//   event.target.remove();
// });

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
