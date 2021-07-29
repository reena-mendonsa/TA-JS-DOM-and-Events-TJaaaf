let initialValue =0;
let game = document.querySelector('.gameContainer');
let Pscore = document.querySelector('#playerScore');
let Cscore = document.querySelector('#computerScore');
Pscore.innerText = initialValue;
Cscore.innerText = initialValue;


let playGame = () =>{
    console.log('inisde playGame');
    let rock = document.querySelector('#playerRock');
    let paper = document.querySelector('#playerPaper');
    let scissors = document.querySelector('#playerScissors');
    let playerOptions = [ rock,paper,scissors];
    let compRock = document.querySelector('#computerRock');
    let compPaper = document.querySelector('#computerPaper');
    let compScissors = document.querySelector('#computerScissors');
    let computerOptions = ['Rock','Paper','Scissors'];
    console.log(Math.floor(Math.random()*3));

   
    function resetSelected(){
        let reset = document.querySelectorAll('.selected');
        reset.forEach(item => {
                    item.classList.remove('selected');
        });
    }
    playerOptions.forEach(option =>{
       option.addEventListener('click',function(){
        resetSelected();
        let playerChoice = document.querySelector('#playerChoice');
        let compChoice = document.querySelector('#computerChoice');
        const choiceNumber = Math.floor(Math.random()*3);
        const computerChoice = computerOptions[choiceNumber];
        compChoice.innerText = '---'+computerChoice;
        playerChoice.innerText = '---'+this.title;
        

        this.classList.add('selected');
        // console.dir(this);
        // console.dir(compRock);
        
        if(computerChoice === 'Rock'){
        
            compRock.classList.add('selected');
        }
        else if(computerChoice === 'Paper'){
        
            compPaper.classList.add('selected');
        }
        else{
        
            compScissors.classList.add('selected');
        }
        
        winner(this.title,computerChoice);
        

       });
       
    });
}
const winner = (player,computer) => {
    console.log('inisde winner');
    const result = document.querySelector('#resultText');
    
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.innerText= 'Its a Tie'
        
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            result.innerText = 'Computer Won';
            
            Cscore.innerText = 1;

        }else{
            result.innerText = 'You Won'
            
            Pscore.innerText = 1;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result.innerText = 'Computer Won';
            
            Cscore.innerText = 1;
        }else{
            result.innerText = 'You Won';
            
            Pscore.innerText = 1;
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            result.innerText = 'Computer Won';
            
            Cscore.innerText = 1;
        }else{
            result.innerText = 'You Won';
            
            Pscore.innerText = 1;
        }
    }
    
}
let reload= document.querySelector('#resetAll');
reload.addEventListener('click',() => {
    window.location.reload();
});
playGame();