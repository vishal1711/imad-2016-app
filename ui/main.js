console.log('Loaded!');

//change the text of main text

var element = document.getElementById('main-text');

element.innerHTML='New value';

// move the image

var vis=document.getElementById('vis');

vis.onClick=function() {
  img.style.marginLeft='100px';
  
};