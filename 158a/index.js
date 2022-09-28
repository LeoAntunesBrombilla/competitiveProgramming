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

//TODO rescrever usando filter se pa

function main() {
  const [numberOfParticipants, minimunScore] = readline().split(" ");
  const scores = readline().split(" ");

  let value = scores[parseInt(minimunScore) - 1],
    count = 0;

  for (let i = 0; i < numberOfParticipants; i++) {
    if (parseInt(scores[i]) <= 0) break;
    if (parseInt(scores[i]) >= value) count++;
  }

  console.log(count);
}
