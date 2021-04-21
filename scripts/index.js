// window.alert("alert massege");

// let userName = window.prompt("Please enter your name", "your Name");
// console.log(userName);

function change() {
  let mainTexe = window.document.getElementById("main");
  window.document.getElementById("main").innerHTML =
    "<h1>Hi this is new Text from JS</h1>";
  mainTexe.style.backgroundColor = "gray";
}
function multiply() {
  let userNum = document.querySelector("#num").value;
  // console.log(userNum);
  let resultText = "";
  for (let i = 1; i <= 10; i++) {
    resultText += `${i} * ${userNum} = ${i * userNum} <br>`;
  }
  document.querySelector(".result").innerHTML = resultText;
}

function subtraction() {
  let hoursWork = document.querySelector("#hours").value;
  let hourWorkMonth = hoursWork * 5 * 4;
  let standerHours = 160;
  let result = standerHours - hourWorkMonth;
  let result1 = "";
  if (standerHours > hourWorkMonth) {
    result1 = `<h2> you worked ${hourWorkMonth} Hours in month you need to work ${result} hours more</h2> `;
  } else {
    result1 = `<h2> you worked ${-result} Hours overtime  you can take vacation </h2>`;
  }

  document.querySelector(".result1").innerHTML = result1;
}
