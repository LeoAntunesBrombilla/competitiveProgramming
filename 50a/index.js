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
  const [rows, columns] = readline().split(" ");
  console.log(Math.floor((parseInt(rows) * parseInt(columns)) / 2));
}