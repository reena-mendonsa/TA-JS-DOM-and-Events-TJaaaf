let userInfo ={};

let form = document.querySelector('form');
let model = document.querySelector('.modelContainer');
let model_layout = document.querySelector('.model_layout'); 
let modelInfo = document.querySelector('.modelInfo');


function addElement(data){
    modelInfo.innerHTML="";
    
    model.classList.add('open');
    

    /**************Create Elements********** */
    let name = document.createElement('h1');
    name.innerText =`Hello ${data.name} !`;
    let email = document.createElement('h2');
    email.innerText =`Email:${data.email}`;
    let love = document.createElement('h2');
    love.innerText =`You Love:${data.movies}`;
    let color = document.createElement('h2');
    color.innerText =`Color:${data.color}`;
    let range = document.createElement('h2');
    range.innerText =`Rating:${data.range}`;
    let book = document.createElement('h2');
    book.innerText =`Book Genre:${data.books}`;
    let terms = document.createElement('h2');
    if(data.terms == true){
        terms.innerText = "You have Accepted All Terms !";
     }
     else{
         terms.innerText = "You have not Accepted the Terms!!";
     }

     
    modelInfo.append(name,email,love,color,range,book,terms);
    
    let close = document.querySelector('.close');
    close.addEventListener("click",()=>{
        model.classList.remove('open');
    });
}

function handleSubmit(event){
    event.preventDefault();

    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.movies = form.elements.movies.value;
    userInfo.color = form.elements.color.value;
    userInfo.range = form.elements.range.value;
    userInfo.books = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked;
    
    
    addElement(userInfo);
    
}


form.addEventListener("submit",handleSubmit);