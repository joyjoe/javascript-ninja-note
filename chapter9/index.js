// import assert from "./assert.js";

import "./index.css";

// const it = assert.it;

function it(value, desc) {
  var li = document.createElement("li");
  li.style.color = value ? "blue" : "red";
  li.className = value ? "" : "error";
  li.appendChild(document.createTextNode(desc));
  document.getElementById("result").appendChild(li);
}


// 全局作用域
it(eval("5+5") === 10, "5 and 5 is 10");

it(eval("var ninja = 5;") === undefined, "no value was return");

// it(eval("window.ninja = 5;") === 5, "create the variable ninjia in window global scope and return variable value.");

it(eval("console.log(this);") === window, "check whether this == window.");

it(ninja === 5, "the variable ninja was created");

// console.log(window);

// 局部函数作用域
(function() {
  eval("var ninja = 6;");

// it(ninja === 6, "evaluated within the current scope");
})();

it(window.ninja === 5, "the global scope was unaffected");

it(ninja === 5, "the global scope was unaffected");


// var handleClick = new Function("e", "console.log(i);");
var handleClick = new Function("e", "console.log(this);");

var btns = document.getElementsByTagName("button");
/* for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(e) {
    console.log(i);
  });
} */

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(e) {
//     console.log(i);
//     console.log(this);
//   });
// }

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleClick);
}

