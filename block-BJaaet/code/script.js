
function main(){

let inputText = document.querySelector("#text");
let root = document.querySelector('ul');



let movieList =[];


function handleInput(event){
   if(event.keyCode ===13 && event.target.value !==""){
       let movies ={
           name: event.target.value,
           watched : false
       };
       movieList.push(movies);
       event.target.value ="";

       createList();
   }
}

function handleDelete(event){
  let id = event.target.dataset.id;
  movieList.splice(id,1);
  createList();
}

function handleCheck(event){
   let id = event.target.dataset.id;
//    console.log(event.target);
//    console.log(event);
   movieList[id].watched = event.target.checked;
   createList();
}

function createList(){
    root.innerHTML="";
    movieList.forEach((movies,index) =>{
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.type="checkbox";
        input.addEventListener('input',handleCheck);
        input.setAttribute("data-id",index);
        input.checked = movies.watched;
         let p = document.createElement('p');
        p.innerText = movies.name;
        let div =document.createElement('div');
        div.classList.add('list');
        div.append(input,p);
        let span = document.createElement('span');
        span.innerText="x";
        span.setAttribute("data-id",index);
        span.addEventListener("click",handleDelete);
        let hr=document.createElement('hr');

        li.append(div,span);
        root.append(li,hr);
    });
    

}    

inputText.addEventListener("keyup",handleInput);

}

main();