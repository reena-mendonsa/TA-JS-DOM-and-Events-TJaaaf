let container = document.querySelector('.container');
for(let i=0;i<500;i++){

    let div = document.createElement('div');
    div.classList.add(`box`);
    div.classList.add(`box${i}`);
    
    container.append(div);
}


// let moveMouse = document.querySelector('.second');
  container.addEventListener('mousemove',function() {
    


    for (let c = 0; c < 500; c++) {
        let cell = document.querySelector(`.box${c}`);
        cell.innerText = c +   Math.floor(Math.random()*100) ;
        // cell.style['background-color'] = '#' + Math.random().toString(16).substring(2, 6)
        // container.appendChild(cell).className = "grid-item";
        let color ='#';
        color += Math.random().toString(16).slice(2,8);
        
        cell.style.backgroundColor = color;
        
    
      }
      
  });