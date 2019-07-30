function makeDiv(){
  var divsize = ((Math.random()*100) + 50).toFixed();
  var divcolor = '#'+ Math.round(0xffffff * Math.random()).toString(16);
var myVariable = 5;


  
  var div = document.createElement("div");
  div.style.left =  divsize+'px'; 
  div.style.top = divsize+'px';
  div.style.color = divcolor;

/*
  $newdiv = $('<div/>').css({
      'width':divsize+'px',
      'height':divsize+'px',
      'background-color': color
  });
  */

  var posx = (Math.random() * (document.body.clientWidth - divsize)).toFixed();
  var posy = (Math.random() * (document.body.clientHeight - divsize)).toFixed();
  
  div.position = 'absulute';
  div.left = posx+'px';
  div.top = posy+'px';
  div.display = 'none';
  div.appendTo('#container');
  

/*
  $newdiv.css({
      'position':'absolute',
      'left':posx+'px',
      'top':posy+'px',
      'display':'none'
  }).appendTo( '#container' ).fadeIn(100).delay(300);
*/
};

document.getElementById("btnCreatShape").onclick = function() {makeDiv()};

//////////
var last = null;
Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
      if(this[i] && this[i].parentElement) {
          this[i].parentElement.removeChild(this[i]);
      }
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRnadomSize(){
  var x=Math.random()*200;
  x=Math.round(x);
  return x;

}

function aa (e){
  var para = document.createElement("P");
  para.innerHTML = "This is a paragrapggggggggggggggggasdasdah  .   "  + e.id;
  document.getElementById("container").appendChild(para);
}


function createShape() {
  var shape = document.createElement("div");
  shape.className = "square";
  shape.nodeType = "button";
  shape.id = "shape" ;
  // shape.addEventListener("click", aa);
  shape.onclick = e => {
    e.target.style.borderColor = 'black';
    e
    //sub to delete btn
    document.getElementById("btnDelete").addEventListener('click', function(){
      e.target.remove();
    });

    //sub to reotat btn
    document.getElementById("btnRotration").addEventListener('click', function(){
      e.target.className = 'rotationshape';
    });
} 

  randColor = getRandomColor();
  shape.style.background = randColor; // set color
  shape.style.borderColor = randColor;

  randSize = getRnadomSize();
  shape.style.width = randSize+'px' //set width 
  shape.style.height = randSize+'px' // set height

  document.getElementById("container").appendChild(shape);

  //document.getElementById("shape").style.top=22+'px';

  
  var para = document.createElement("P");
  para.innerHTML = "";
  document.getElementById("container").appendChild(para);

 
/*
  var para = document.createElement("div");
  para.innerHTML = "This is a paragrapggggggggggggggggasdasdah.";
  document.getElementById("container").appendChild(para);

*/
}

function newPos(){
  document.getElementById("shape").style.color = "#4CAF50";

  var x=Math.random()*1000;
  x=Math.round(x);
  var y=Math.random()*500;
  y=Math.round(y);
  document.getElementById("shape").style.left=x+'px';
  document.getElementById("shape").style.top=y+'px';
}