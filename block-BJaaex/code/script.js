let ul = document.querySelector('.deck');
let count =0;
let firstGuess = '';
let secondGuess = '';
let previousTarget =null;

let delay=1200;

let moves = 0;
let movesCounter = document.querySelector(".moves");

//  game timer
let second = 0, minute = 0; hour = 0;
let timer = document.querySelector(".timer");
let interval;

// Duplicate array to create a match for each card
let doubleArray = cardsArray.concat(cardsArray);
//Shuffling the array
doubleArray.sort(() => 0.5 - Math.random());



 /*********Matching cards************ */
 function match() {
    var selected = document.querySelectorAll('.selected')
    selected.forEach((card) => {
        
      card.classList.add('match','disabled');

    });
    let matches = document.querySelectorAll('.match');
    if(matches.length===16){

        //reset timer
        resetTimer();
   
    // alert('Congratulations!!!! You won');
    }

 }

function resetTimer(){
    clearInterval(interval);
    clearTimeout(interval);
    second = 0;
    minute = 0; 
    hour = 0;

    timer.innerHTML = "0 mins 0 secs";

}


function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

/************Reset Guess********* */
function reset() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
  
    var selected = document.querySelectorAll('.selected')
    selected.forEach((card) => {
      card.classList.remove('selected');
    });
    
  }

/*********** selected card ***********/
function handleSelectedCard(event) {
    
    
    
    /*if (this === previousTarget ||this.classList.contains('selected'))  {
        console.log('return');
        return;
      }*/
    if (count < 2) {
            count++;
            if (count === 1) {
              // Assign first guess
              
              firstGuess = this.dataset.name;
              this.classList.add('selected');
            } else {
              // Assign second guess
              
              
              secondGuess = this.dataset.name;
              this.classList.add('selected');
            }
            // If both guesses are not empty...
            if (firstGuess !== '' && secondGuess !== '') {
              // and the first guess matches the second match...
              moves++;
              movesCounter.innerHTML=moves;
              startTimer();
              if (firstGuess === secondGuess) {
                // run the match function
                setTimeout(match,delay) ;
                
                setTimeout(reset,delay) ;
              }
              else{
                 setTimeout(reset,delay) ;
              }
            }
            // Set previous target to clicked
        previousTarget = this;
    }
    
    
  }
 
 



// For each item in the cardsArray array...
doubleArray.forEach((item) => {
    
    const card = document.createElement('li');
    card.classList.add('card');
  
    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name;
  
    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');
    back.innerHTML = item.icon;
    // card.innerHTML = item.icon;

    card.append(front,back);
    ul.append(card);
    card.addEventListener('click',handleSelectedCard);
    

  });

  
  