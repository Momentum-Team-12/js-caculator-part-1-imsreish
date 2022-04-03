console.log("JS is connected");

const selectButton = document.querySelectorAll(".button");
// declares new varibale (button) equivalent to the querySelectorAll method for every element "button".
for (let buttonCheck of selectButton) {
  buttonCheck.addEventListener("click", (event) => {
    // creates a new loop with variable (buttonCheck) used for iterating through the "array" returned from the "selectButton" querySelectorAll method.
    // console.log("click EventListener used");
    if (event.target.id === "clear") {
      resultField.innerText = null;
      console.log("clear pressed");
    }
    if (event.target.id === "findResult") {
      let finalCalculation = eval(resultField.innerText);
      resultField.innerText = finalCalculation;
      console.log(finalCalculation);
      console.log("findResult pressed");
    }
    if (event.target.id === "divide") {
      resultField.innerText += "/";
      console.log("divide pressed");
    }
    if (event.target.id === "multiply") {
      resultField.innerText += "*";
      console.log("multiply pressed");
    }
    if (event.target.id === "add") {
      resultField.innerText += "+";
      console.log("add pressed");
    }
    if (event.target.id === "subtract") {
      resultField.innerText += "-";
      console.log("subtract pressed");
    }
    if (event.target.id === "point") {
      resultField.innerText += ".";
      console.log("point pressed");
    }
    if (event.target.id === "zero") {
      resultField.innerText += "0";
      console.log("zero pressed");
    }
    if (event.target.id === "one") {
      resultField.innerText += "1";
      console.log("one pressed");
    }
    if (event.target.id === "two") {
      resultField.innerText += "2";
      console.log("two pressed");
    }
    if (event.target.id === "three") {
      resultField.innerText += "3";
      console.log("three pressed");
    }
    if (event.target.id === "four") {
      resultField.innerText += "4";
      console.log("four pressed");
    }
    if (event.target.id === "five") {
      resultField.innerText += "5";
      console.log("five pressed");
    }
    if (event.target.id === "six") {
      resultField.innerText += "6";
      console.log("six pressed");
    }
    if (event.target.id === "seven") {
      resultField.innerText += "7";
      console.log("seven pressed");
    }
    if (event.target.id === "eight") {
      resultField.innerText += "8";
      console.log("eight pressed");
    }
    if (event.target.id === "nine") {
      resultField.innerText += "9";
      console.log("nine pressed");
    }
    // if (
    //   event.target.id ===
    //   "point, zero, one, two, three, four, five, six, seven, eight, nine"
    // ) {
    //   resultField.innerText += event.target.id;
    //   console.log("point thru 9 pressed");
    // }
  });
}

//     if (event.target.id === "clear") {
//       resultField.innerText === "";
//     }
//     if (event.target.id !== "findResult") {
//       resultField.innerText += event.target.id;
//       console.log(resultField.innerText);
//     }

//     if (event.target.id === "findResult") {
//       eval(resultField.innerText);
//       // let theResult = eval(resultField.innerText);
//       // resultField.innerText = theResult;
//       // console.log(theResult);
//       console.log(resultField.innerText);
//     }
//   });
// }

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
