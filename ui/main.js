console.log('Loaded!');

//change the text of main text

var element = document.getElementById('main-text');

element.innerHTML='New value';

// move the image

var img=document.getElementById('vis');

img.onClick=function() {
  vis.style.marginLeft='100px';
  
};