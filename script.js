'use strict';

const generateButton = document.querySelector(".generateButton");

generateButton.addEventListener('click', randomNumber);

async function randomNumber(){
  const min = parseInt(document.querySelector(".min").value);
  const max = parseInt(document.querySelector(".max").value);

  randomNumber = await Math.floor(Math.random()*(max-min+1))+min;

  const randomNumberResult = document.querySelector(".randomNumberResult");

  if (randomNumber == randomNumber)
    randomNumberResult.innerHTML = randomNumber;
}
