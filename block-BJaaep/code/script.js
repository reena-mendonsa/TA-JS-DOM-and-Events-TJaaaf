let firstboxes = document.querySelectorAll('.first li');
let secondBox = document.querySelector('.second');

function addNum(elem){
    i=i+1;
  elem.innerText = i;
}





 firstboxes.forEach((elem,index) =>{
     elem.addEventListener('click',(event)=>{

        event.target.innerText = index+1;
     setTimeout(()=>{ 
        event.target.innerText="";
     },5000);
     });
 });


 
 secondBox.addEventListener('click',(elem)=>{
     let text = elem.target.dataset.text;
     elem.target.innerText = text;

     setTimeout(() => {
         elem.target.innerText ="";
     },5000);
 });