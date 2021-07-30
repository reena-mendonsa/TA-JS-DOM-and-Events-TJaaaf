let userInfo ={};

let form = document.querySelector('form');

function addElement(data){

    let model = document.createElement('div');
    model.classList.add('modelContainer');
    let name = document.createElement('h1');
    name.innerText =`Hello ${data.name}`;
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

    model.append(name,email,love,color,range,book);
    
    document.body.innerHTML.
    document.getElementById('mainCont').append(model);

    


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
    console.log(userInfo);

    addElement(userInfo);
}


form.addEventListener("submit",handleSubmit);