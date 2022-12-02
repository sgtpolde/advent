const { readFileSync, promises: fsPromises } = require("fs");
/* Global values*/
let text = [];
let Elfs = [];
let ElfsRes = [];
let count = 1;

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  text = contents.split(/\r?\n/);
  return text;
}

//ToNumber function
function toNumber(value) {
  return Number(value);
}

//Sum all calories
function sumCals(value) {
  const initVal = 0;
  const val = value.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initVal
  );
  return val;
}

//Sort calories by elf (Array of all calories per elf)
function sortCals(text) {
  let i = 0;
  let result = text;
  //console.log("To Array function " + result);
  const resNum = result.map(toNumber);
  //console.log("To Number function " + resNum);
  const resLenght = result.length;
  //console.log("Lenght of array " + resLenght);
  console.log("Calories per Elf (all)");
  //Porazdelimo kalorje glede na elfa
  for (var j = 0; j < count; j++) {
    Elfs[j] = [];
    for (; i < resLenght; i++) {
      //if its a space make new Elf
      if (resNum[i] !== 0) {
        Elfs[j] = Elfs[j].concat(resNum[i]);
      } else {
        i++;
        count++;
        break;
      }
    }
    /*Testing function*/
    //console.log("Number of trys: " + j);
    console.log("Elf " + j + " : " + Elfs[j]);
  }
  console.log(" ");
}

//Skupni seštevek kalorij za posameznega Elfa
function resultSum(Elfs) {
  console.log("Calories per Elf (total)");
  for (var j = 0; j < count; j++) {
    const res = sumCals(Elfs[j]);
    ElfsRes = ElfsRes.concat(res);
    console.log("Elf " + j + ": " + ElfsRes[j]);
    //console.log(ElfsRes);
  }
}

//Rezultat TOP 3 Elfovih kalorij
function Result(ElfsRes) {
  console.log("");
  console.log("Top 3 Elf Calories");
  const max1 = ElfsRes.reduce((a, b) => Math.max(a, b), -Infinity);
  ElfsRes = ElfsRes.filter((item) => item !== max1);
  console.log("1st: " + max1);
  const max2 = ElfsRes.reduce((a, b) => Math.max(a, b), -Infinity);
  console.log("2nd: " + max2);
  ElfsRes = ElfsRes.filter((item) => item !== max2);
  const max3 = ElfsRes.reduce((a, b) => Math.max(a, b), -Infinity);
  console.log("3rd: " + max3);
  //Calculate sum of top 3 elfs
  const SumRes = max1 + max2 + max3;
  console.log("");
  console.log("Total Calories: " + SumRes);
}

//Call the function
syncReadFile("./num.txt");
sortCals(text);
resultSum(Elfs);
Result(ElfsRes);
