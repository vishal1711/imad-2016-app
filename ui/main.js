console.log('Loaded!');

//change the text of main text

var element = document.getElementById('main-text');

element.innerHTML='';

// move the image

var img=document.getElementById('madi');

var marginLeft =0;

function moveRight(){
    marginLeft = marginLeft =10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onClick=function() {
    
  var interval = setInterval(moveRight,100);
};