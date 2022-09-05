"use strict";
// add event listener
const button = document.querySelector("#generate");
button.addEventListener("click", checkOption);
const outputContainer = document.querySelector("#output");
// Check for chosen option
function checkOption() {
  const chosenOption = document.querySelector("#mode").value;
  let inputValue = document.querySelector("#input").value;
  if (inputValue == "") {
    outputContainer.textContent = "Input is empty";
  } else if (chosenOption === "capitalize") {
    optCapitalize(inputValue);
  } else if (chosenOption === "find-firstname") {
    optFind_firstname(inputValue);
  } else if (chosenOption === "find-firstname-length") {
    optFind_firstname_length(inputValue);
  } else if (chosenOption === "find-middlename") {
    optFind_middlename(inputValue);
  } else if (chosenOption === "find-file") {
    optFind_file(inputValue);
  } else if (chosenOption === "hide") {
    optPassword(inputValue);
  } else if (chosenOption === "capitalize-third") {
    optCapitalize_third(inputValue);
  } else if (chosenOption === "capitalize-space-and-hyphen") {
    optCapitalize_spaces_and_hyphens(inputValue);
  }
}
// declare functions doing stuff

function optCapitalize(input) {
  if (input.split(" ").length === 1) {
    outputContainer.textContent =
      input[0].toUpperCase() + input.slice(1).toLowerCase();
  } else {
    const longerInput = input.split(" ")[0];
    outputContainer.textContent =
      longerInput[0].toUpperCase() + longerInput.slice(1).toLowerCase();
  }
}

function optFind_firstname(input) {
  const firstName = input.split(" ")[0];
  outputContainer.textContent = firstName;
}

function optFind_firstname_length(input) {
  const firstName = input.split(" ")[0];
  outputContainer.textContent = firstName.length;
}

function optFind_middlename(input) {
  const firstNameEnd = input.indexOf(` `);
  const middleNameEnd = input.indexOf(` `, firstNameEnd + 1);
  const middleName = input.substring(firstNameEnd + 1, middleNameEnd);
  outputContainer.textContent = middleName;
}

function optFind_file(input) {
  if (input.includes(".png")) {
    outputContainer.textContent = `This file is an .png`;
  } else if (input.includes(".jpg")) {
    outputContainer.textContent = `This file is an .jpg`;
  } else {
    outputContainer.textContent = `this file isnt either .png or .jpg file`;
  }
}

function optPassword(input) {
  outputContainer.textContent = `*`.repeat(input.length);
}

function optCapitalize_third(input) {
  outputContainer.textContent =
    input.substring(0, 2) + input.charAt(2).toUpperCase() + input.slice(3);
}
function optCapitalize_spaces_and_hyphens(input) {
  outputContainer.textContent = input.replace(/(\ |\-)(\S)/g, (s) =>
    s.toUpperCase()
  );
}
