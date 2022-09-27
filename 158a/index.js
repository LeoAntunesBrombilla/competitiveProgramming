"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x);
}

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});

function readline() {
  return inputString[currentLine++];
}

function main() {
  let numberOfLines = readline();
  let operation;
  let result = 0;
  for (let i = 0; i < numberOfLines; i++) {
    operation = readline();
    if (operation.charAt(0) == "+" || operation.charAt(2) == "+") {
      result++;
    }
    if (operation.charAt(0) == "-" || operation.charAt(2) == "-") {
      result--;
    }
  }

  console.log(result);
}
