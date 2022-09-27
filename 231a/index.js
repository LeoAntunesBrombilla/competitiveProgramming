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
  let numberOfProblems = readline();
  let count = 0;
  let problem;
  let numberOfOcurrences;

  for (let i = 0; i < numberOfProblems; i++) {
    problem = readline().split(" ");
    numberOfOcurrences = problem.filter((v) => v == 1).length;
    if (numberOfOcurrences >= 2) {
      count++;
    }
  }

  console.log(count);
}
