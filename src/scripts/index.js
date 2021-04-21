// window.alert("alert massege");

// let userName = window.prompt("Please enter your name", "your Name");
// console.log(userName);

function change() {
  let mainTexe = window.document.getElementById("main");
  window.document.getElementById("main").innerHTML =
    "<h1>Hi this is new Text from JS</h1>";
  mainTexe.style.backgroundColor = "gray";
}
