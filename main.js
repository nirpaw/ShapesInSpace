// Nir Shmueli
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

function getRandomShape(){
  var shapes = ["square", "circle", "triangular"];
  var item = shapes[Math.floor(Math.random()*shapes.length)];
  return item;

}

function createShape() {
  var shape = document.createElement("div");

  shape.onclick = e => {
    e.target.style.borderColor = 'black';

    //sub to delete btn
    document.getElementById("btnDelete").addEventListener('click', function(){
      e.target.remove();
    });

    //sub to reotation btn
    document.getElementById("btnRotration").addEventListener('click', function(){
      e.target.style.animation = 'spin 5s linear infinite';
      if(e.target.className == "circle"){
      e.target.style.animation = 'shake 5s linear infinite';
      }

    });
} 
  shape.className = getRandomShape(); //set shape 
  
  randColor = getRandomColor();
  shape.style.background = randColor; // set color
  shape.style.borderColor = randColor;

  randSize = getRnadomSize();
  shape.style.width = randSize+'px' //set size 
  shape.style.height = randSize+'px' 
  shape.style.position = 'absolute';
  
   var x=Math.random()*window.outerWidth;
   x=Math.round(x);
   var y=Math.random()*window.innerHeight;
   y=Math.round(y);
   shape.style.left=x+'px';
   shape.style.top=y+'px';

  document.getElementById("container").appendChild(shape);

}