"use strict";

// N#1

function replaceString(string, valueToReplace, valueToReplaceWith) {
  let newString = string;
  let index = newString.indexOf(valueToReplace);

  while (index !== -1) {
    newString =
      newString.slice(0, index) +
      valueToReplaceWith +
      newString.slice(index + valueToReplace.length);
    index = newString.indexOf(
      valueToReplace,
      index + valueToReplaceWith.length
    );
  }

  return newString;
}

console.log(
  replaceString(
    "Misho was fishing at the lake yesterday and broke a leg, after a while leg recovered and he was able to work out even he broke a leg.",
    "leg",
    "arm"
  )
);

// N#2

function capitalString(str) {
  let capital = str.toUpperCase();
  return capital;
}

console.log(capitalString("Skillwill"));

// N#3

const arr = [
  { name: "Lasha", age: 30 },
  { name: "Luka", age: 25 },
  { name: "Saba", age: 20 },
  { name: "Nina", age: 15 },
];

function sortArr(arr) {
  arr.sort((a, b) => a.age - b.age);
  return arr;
}

console.log(sortArr(arr));
