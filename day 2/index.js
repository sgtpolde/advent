//1 for Rock, 2 for Paper, and 3 for Scissors
//0 if you lost, 3 if the round was a draw, and 6 if you won
// A || X = Rock = 1
// B || Y = Paper = 2
// C || Z = Scisors = 3
const { readFileSync, promises: fsPromises } = require("fs");
const { stringify } = require("querystring");
let arr = [];
let split = [];
let length = 0;

let saveNum = "";
let sumChoise = 0;
let sumGame = 0;
let resultGame = 0;
let resultGame2 = 0;

let count = 1;
const Round = [];

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  arr = new String(contents);
  arr = contents.split(/\r?\n/);
  length = arr.length;
  return arr, length;
}

function setRound(arr) {
  console.log("Lenght of array: " + length);
  let i = 0;
  for (var j = 0; j < count; j++) {
    Round[j] = [];
    for (; i < length; i++) {
      if (arr[i] !== undefined) {
        Round[j] = arr[i];
        i++;
        count++;
        break;
      }
    }
    /*Testing function*/
    //console.log("Number of trys: " + j);
    //console.log("Data " + j + " : " + arr[i]);
    //console.log("Round " + j + " : " + Round[j]);
  }
  console.log(" ");
}

function splitArray(Round) {
  for (let i = 0; i < length; i++) {
    split[i] = Round[i].split(" ");
  }
  //console.log(split);
  return split;
}

function resRound(split) {
  //loop through arrays
  for (let i = 0; i < length; i++) {
    //loop through data position (first and second)
    for (let j = 0; j < 3; j++) {
      //console.log(j);
      //console.log(split[i].at(j));
      switch (j) {
        case 0:
          if (split[i].at(j) === "A") {
            saveNum = "A";
          } else if (split[i].at(j) === "B") {
            saveNum = "B";
          } else if (split[i].at(j) === "C") {
            saveNum = "C";
          }
        case 1:
          console.log("");
        case 2:
          //Izbira Kamen
          if (split[i].at(j) === "X") {
            sumChoise = sumChoise + 1;
            if (saveNum === "C") {
              sumGame = sumGame + 6;
            } else if (saveNum === "A") {
              sumGame = sumGame + 3;
            } else if (saveNum === "B") {
              sumGame = sumGame + 0;
            }
            console.log(
              "Round " + i + " : " + saveNum + " vs " + split[i].at(j)
            );

            //Izbira papir
          } else if (split[i].at(j) === "Y") {
            sumChoise = sumChoise + 2;
            if (saveNum === "A") {
              sumGame = sumGame + 6;
            } else if (saveNum === "B") {
              sumGame = sumGame + 3;
            } else if (saveNum === "C") {
              sumGame = sumGame + 0;
            }
            console.log(
              "Round " + i + " : " + saveNum + " vs " + split[i].at(j)
            );
            //Izbira škarje
          } else if (split[i].at(j) === "Z") {
            sumChoise = sumChoise + 3;
            if (saveNum === "B") {
              sumGame = sumGame + 6;
            } else if (saveNum === "C") {
              sumGame = sumGame + 3;
            } else if (saveNum === "A") {
              sumGame = sumGame + 0;
            }
            console.log(
              "Round " + i + " : " + saveNum + " vs " + split[i].at(j)
            );
          }
      }
    }
    console.log("Choise sum: " + sumChoise);
    console.log("Game sum: " + sumGame);
  }
  resultGame = sumGame + sumChoise;
  console.log(resultGame);
  return resultGame;
}

//x MEANS LOOSE, Y MEANS DRAW, Z MEANS WIN
// A || X = Rock = 1
// B || Y = Paper = 2
// C || Z = Scisors = 3
function resRound2(split) {
  //loop through arrays
  for (let i = 0; i < length; i++) {
    //loop through data position (first and second)
    for (let j = 1; j > -1; j--) {
      //console.log(j);
      //console.log(split[i].at(j));
      switch (j) {
        case undefined:
          console.log(undefined);
        case 1:
          //Preverimo stanje igre in nastavimo spremenljivko (loose,draw,win)
          if (split[i].at(j) === "X") {
            saveNum = "X";
          } else if (split[i].at(j) === "Y") {
            saveNum = "Y";
          } else if (split[i].at(j) === "Z") {
            saveNum = "Z";
          }
        case 0:
          console.log("");
        case 1:
          //Izbira  kamen
          if (split[i].at(j) === "A") {
            //
            if (saveNum === "X") {
              sumGame = sumGame + 0;
              sumChoise = sumChoise + 3;
            } else if (saveNum === "Y") {
              sumGame = sumGame + 3;
              sumChoise = sumChoise + 1;
            } else if (saveNum === "Z") {
              sumGame = sumGame + 6;
              sumChoise = sumChoise + 2;
            }
            console.log(
              "Round " + i + " : " + saveNum + " vs " + split[i].at(j)
            );

            //Izbira  papir
          } else if (split[i].at(j) === "B") {
            if (saveNum === "X") {
              sumGame = sumGame + 0;
              sumChoise = sumChoise + 1;
            } else if (saveNum === "Y") {
              sumGame = sumGame + 3;
              sumChoise = sumChoise + 2;
            } else if (saveNum === "Z") {
              sumGame = sumGame + 6;
              sumChoise = sumChoise + 3;
            }
            console.log(
              "Round " + i + " : " + saveNum + " vs " + split[i].at(j)
            );
            //izbira  škarje
          } else if (split[i].at(j) === "C") {
            if (saveNum === "X") {
              sumGame = sumGame + 0;
              sumChoise = sumChoise + 2;
            } else if (saveNum === "Y") {
              sumGame = sumGame + 3;
              sumChoise = sumChoise + 3;
            } else if (saveNum === "Z") {
              sumGame = sumGame + 6;
              sumChoise = sumChoise + 1;
            }
            console.log(
              "Round " + i + " : " + saveNum + " vs " + split[i].at(j)
            );
          }
      }
    }
    console.log("Choise sum: " + sumChoise);
    console.log("Game sum: " + sumGame);
  }
  resultGame2 = sumGame + sumChoise;
  console.log(resultGame2);
  return resultGame2;
}

/* Get data*/
syncReadFile("./data.txt");
setRound(arr);
/* First part*/
splitArray(Round);
resRound(split);
/*Second part */
resRound2(split);
