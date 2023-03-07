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
