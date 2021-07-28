let calculator =document.querySelector('.calculator');
let keys = document.querySelector('.numKey');
let op = document.querySelector('.operationKey')
let display = document.querySelector('.calculateDisplay');


keys.addEventListener('click',(event)=>{
    let initValue = display.innerText;
    let action = event.target.dataset.action;
    if(!action){
        console.log('number key');
        console.log('digit',event.target.innerText);
        if(initValue ==0){
            display.innerText = event.target.innerText;
        }
        else{
            display.innerText = display.innerText + event.target.innerText;
            console.log('display',display.innerText);
        }
    }
    if (action === 'decimal') {
        console.log('decimal key!');
        display.innerText = display.innerHTML + '.';
      }
      
      if (action === 'clear') {
        console.log('clear key!');
        display.innerText=0;

      }
      if (action === 'calculate') {
        console.log('equalto key!')

        let result = eval(display.innerText);
        display.innerText = result;
      }
   
});

op.addEventListener('click',(e)=>{
   let action = e.target.dataset.action;
   if (
    action === 'add' ||
    action === 'sub' ||
    action === 'mul' ||
    action === 'div'
  ) {
    console.log('operator key!',action);

  }

  if(action ==='add'){
      display.innerText = display.innerText + '+';
  }
  if(action ==='sub'){
    display.innerText = display.innerText + '-';
  }
  if(action ==='mul'){
    display.innerText = display.innerText + `*`;
 }
 if(action ==='div'){
    display.innerText = display.innerText + '/';
}
});