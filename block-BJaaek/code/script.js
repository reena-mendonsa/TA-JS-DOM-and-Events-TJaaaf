let clickbox = document.querySelector('.first');



clickbox.addEventListener('click',function(){
 let color ='#';
 color += Math.random().toString(16).slice(2,8);
 
 clickbox.style.backgroundColor = color;

 });

 let moveMouseBox = document.querySelector('.second');
  moveMouseBox.addEventListener('mousemove',function() {
    let color ='#';
    color += Math.random().toString(16).slice(2,8);
    
    moveMouseBox.style.backgroundColor = color;
      
  });