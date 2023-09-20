const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let counter = 0;
  // Add your code here
  const cats = JSON.parse(catString)

  for (const cat of cats) {   
    counter += 1;
    if (counter < Object.keys(cats).length - 1 ) {
      motherInfo += cat.name + ', ';
    } else if (counter == Object.keys(cats).length -1 ) {
      motherInfo += cat.name + ' and '; 
    } else {
      motherInfo += cat.name + '.'; 
    }
    for (const kitten of cat.kittens) {
      total += 1;
      if (kitten.gender == 'm') {
        male += 1;
      }
    }
  }
  kittenInfo = `There are ${total} kitten, ${male} are male and ${total-male} are female.`
  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);