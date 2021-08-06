function main(){

let cont=document.querySelector('.container');
let nameCont = document.querySelector('.names');
let searchPeople = document.querySelector('input');

/****************Search People of GOT***********/

function handleSearch(event){
  cont.innerHTML="";
  let filterNames=[];
  
  let searchString= event.target.value.toLowerCase();
  //  got.houses.forEach((data) =>{
    got.houses.filter((e)=>{     
        
      //  if( e.name.toLowerCase().includes(searchString)){
        e.people.forEach((p) =>{
          if(p.name.toLowerCase().indexOf(searchString)>-1) {
            
             filterNames.push(e);
          }

        });
        
       
    });
        
  // });
  console.log(filterNames);
  createBoxes(filterNames);
}

/*************Sort by Name Buttons***************** */
function handleNames(event){
    
    let selectedNames = got.houses.filter((e) => {
        
        if(e.name === event.target.innerText){
        
            return got;
        }
    });
    
    createBoxes(selectedNames);
}


/**************CREATE UI********************* */

function createBoxes(data){
    cont.innerHTML="";
    data.forEach((entry,indx)=>{
   
      

        entry.people.forEach((ppl,index) =>{
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

    createBoxes(got.houses);
}
   
  createUI(got);

  searchPeople.addEventListener('keyup',handleSearch);

}

main();