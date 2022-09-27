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

function findNumberOfRowMoves(array) {
  let indexOf1;
  const has1 = (array) => {
    let index = array.findIndex((element) => element == 1);
    if (index !== -1) {
      indexOf1 = index;
    }
  };
  array.forEach(has1);
  return Math.abs(2 - Number(indexOf1));
}

function findNumberOfColumnMoves(array) {
  const index = array.findIndex((array) =>
    array.some((element) => element == 1)
  );
  return Math.abs(2 - Number(index));
}

function main() {
  let array = [];
  let input = [];

  for (let i = 0; i < 5; i++) {
    input = readline().split(" ");
    array.push(input);
  }

  const numberOfRowsMoves = findNumberOfRowMoves(array);
  const numberOfColumnMoves = findNumberOfColumnMoves(array);

  console.log(numberOfRowsMoves + numberOfColumnMoves);
}
