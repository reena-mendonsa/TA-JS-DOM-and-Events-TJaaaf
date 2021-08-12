let key = document.querySelector("h2");
let description = document.querySelector('p');
let button = document.querySelector('button');


function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function handleClick(){
    let index = generateRandomNumber(data.length);
    let randomShortcut = data[index];
    key.innerText = randomShortcut.shortcut;
    description.innerText = randomShortcut.description
}

handleClick(); 
button.addEventListener('click', handleClick);