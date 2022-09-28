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
  const input = readline();
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let answer = "";

  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === "1") {
      count1++;
    } else if (input.charAt(i) === "2") {
      count2++;
    } else if (input.charAt(i) === "3") {
      count3++;
    }
  }

  for (let j = 0; j < count1; j++) {
    answer = answer + "1+";
  }

  for (let j = 0; j < count2; j++) {
    answer = answer + "2+";
  }

  for (let j = 0; j < count3; j++) {
    answer = answer + "3+";
  }

  console.log(answer.substring(answer.length - 1, 0));
}
