function main(){

    let inputText = document.querySelector("#text");
    let root = document.querySelector('ul');
    
   let flagComplete = 0;
    let count = Number(localStorage.getItem('count')) || 0;
    let alltodo = JSON.parse(localStorage.getItem('todo')) ||  [];
    let allCompletedTodo =[];
    createList(alltodo,root);


    
    function handleInput(event){
       if(event.keyCode ===13 && event.target.value !==""){
           let todo ={
               name: event.target.value,
               isDone : false
           };
           alltodo.push(todo);
           event.target.value ="";
           count +=1;
           createList(alltodo,root);
       }
       localStorage.setItem('todo',JSON.stringify(alltodo));   
       localStorage.setItem('count',count);   
    }


    function completedTodos(data){     
        
        
        
        allCompletedTodo= data.filter((todo,index)=>{
             if(todo.isDone === true){
                 return todo;
             }
         }); 

         console.log(allCompletedTodo);
        createList(allCompletedTodo,root);
        
    }

    function handleCompleted(event){
        root.innerHTML="";
        flagComplete =1;
        
         completedTodos(alltodo);


    }
    
 
    function handleActiveTasks(event){
        root.innerHTML="";
        
        flagComplete=0;
        let allActive=[];
        alltodo.forEach((todo,index)=> {
            if(todo.isDone === false){
            let activeList ={
                name: todo.name,
                isDone:false
            }
           allActive.push(activeList); 
         }
           
        });
        
        
        createList(allActive,root);
        
    }




    function handleCheck(event){
    
      
     let id = event.target.dataset.id;
         
     alltodo[id].isDone = event.target.checked;
        
     localStorage.setItem('todo',JSON.stringify(alltodo));
  
     createList(alltodo,root);
       
    }


    function handleDelete(event){
      let id = event.target.dataset.id;
      alltodo.splice(id,1);
      count=count-1;
      localStorage.setItem('todo',JSON.stringify(alltodo));
      localStorage.setItem('count',count);   
      createList(alltodo,root);
    }
    
    function clearCompleted(event){
        
         root.innerHTML="";
        alltodo =alltodo.filter((todo,index)=>{
            
              if(todo.isDone ===false){
               
                  return todo;
                  
              }

        }); 
        count = alltodo.length;
        localStorage.setItem('todo',JSON.stringify(alltodo));
        localStorage.setItem('count',count);   
      console.log('Clear Completed',alltodo);
      createList(alltodo,root);
    }

    
    function handleDisplayAll(event){
        root.innerHTML="";
       
        createList(alltodo,root);
    }
    
    function createList(data,rootElm){
        rootElm.innerHTML="";
        data.forEach((todo,index) =>{
            let li = document.createElement('li');

            let input = document.createElement('input');
            input.type="checkbox";
            input.addEventListener('input',handleCheck);
            input.setAttribute("data-id",index);
            input.checked = todo.isDone;

            let p = document.createElement('p');
            p.innerText = todo.name;

            let div =document.createElement('div');
            div.classList.add('list');
            div.append(input,p);

            let span = document.createElement('span');
            span.innerText="x";
            span.setAttribute("data-id",index);
            span.addEventListener("click",handleDelete);
            let hr=document.createElement('hr');
            

            li.append(div,span);
            rootElm.append(li,hr);
            if(input.checked ===true){
                p.style.textDecoration ="line-through";
                
            }
        });

            let div2 =document.createElement('div');
            div2.classList.add('status');

            let items =document.createElement('h3');
            items.innerText =`${count} items `;

            /*****Display All Items */
            let all = document.createElement('h2');
            all.innerText ="All";
            all.addEventListener('click',handleDisplayAll);

            /****Active tasks***/
            let active = document.createElement('h2');
            active.innerText ="Active";
            active.addEventListener('click',handleActiveTasks);
            
            /*****task completed */
            let compl = document.createElement('h2');
            compl.innerText ="Completed";
            compl.addEventListener('click',handleCompleted);


            let clearCompl = document.createElement('h2');
            clearCompl.innerText="Clear completed";
            clearCompl.addEventListener('click',clearCompleted);
            div2.append(items,all,active,compl,clearCompl);

            rootElm.append(div2);

    
    }    
    
    inputText.addEventListener("keyup",handleInput);
    
    }
    
    main();