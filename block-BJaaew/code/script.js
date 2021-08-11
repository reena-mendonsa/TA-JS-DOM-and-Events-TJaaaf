function main(){

let cont=document.querySelector('.container');
let nameCont = document.querySelector('.names');
let searchPeople = document.querySelector('input');
let allPeople=[];



for(let i=0;i<got.houses.length ; i++){
  for(let j=0;j<got.houses[i].people.length;j++){
    allPeople.push(got.houses[i].people[j]
      );
  }
  

}

/****************Search People of GOT***********/

function handleSearch(event){
  cont.innerHTML="";
  let filterNames=[];
  
  let searchString= event.target.value.toLowerCase();
  
  allPeople.filter((p) =>{
          if(p.name.toLowerCase().indexOf(searchString)>-1) {
            
             filterNames.push(p);
          }     
    });
        
  
  createBoxes(filterNames);
}

/*************Sort by Name Buttons***************** */
function handleNames(event){
    
    console.log(event.target.innerText);
    let selectedNames = got.houses.filter((e) => e.name === event.target.innerText);
      
        let newArr=[]; 
        selectedNames.forEach((ppl)=> createBoxes(ppl.people));
            
      
    }


/**************CREATE UI********************* */

function createBoxes(data){
    cont.innerHTML="";
    console.log('createBoxes',data);
 
        data.forEach((ppl,index)=>{
          let div= document.createElement('div');
        /*****image and name */
        let div1 = document.createElement('div');
        let img = document.createElement('img');
        let h2 =document.createElement('h2');
        
        img.src = ppl.image;
        h2.innerText=ppl.name;
        div1.append(img,h2);
        div1.classList.add('flex');
        div1.classList.add('image');
        
        /*****Description****** */
        let divP = document.createElement('div');
        let p = document.createElement('p');
        p.innerText = ppl.description;
  
        divP.append(p);
        /********Learn More***** */
        let divA =document.createElement('div');
        divA.classList.add('link');
        let a=document.createElement('a');
        a.href=ppl.wikiLink;
        a.innerText='Learn More!';
        divA.append(a);
  
  
  
        div.append(div1,divP,divA);
        div.classList.add('box');
        cont.append(div);
  });
  
}
function createUI(data=got){

    got.houses.forEach((entry)=>{
    /********Name tags*********** */
     
    let nameDiv = document.createElement('div');
    let span = document.createElement('span');
    span.innerText =entry.name;
    nameDiv.append(span);
    nameDiv.classList.add('nameTag');
    nameCont.append(nameDiv);
    nameDiv.addEventListener('click',handleNames);
});

    createBoxes(allPeople);
}
   
  createUI(got);

  searchPeople.addEventListener('input',handleSearch);

}

main();