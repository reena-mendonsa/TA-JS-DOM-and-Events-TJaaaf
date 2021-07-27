let li = document.querySelectorAll('.box');
let i=1;

function addNum(elem){
    i=i+1;
  elem.innerText = i;
}

li.forEach((elem) => elem.addEventListener('click',function(){
        // i=i+1;
        // elem.innerText =i;
        addNum(elem);
    })
 );


 function handleEvent(event){
     i=i+1;
     event.target.innerText = i;
     console.log(event.target.innerText);
 }

 let root = document.querySelector('.wrapper');
 li.forEach((element)=> element.addEventListener('click',handleEvent));