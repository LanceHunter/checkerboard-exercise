// Your JS goes here

(function(){
function squaresColor() {
  let body = document.getElementsByTagName('body');
  body[0].innerHTML = '';

  let audio = document.createElement('audio');
  audio.src = './airhorn.mp3';
  audio.setAttribute('autoplay', '');
  body[0].appendChild(audio);

  for (i = 1; i < 64; i++) {
    let square = document.createElement('div');
    let color = ` rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    square.style.backgroundColor = color;
    square.style.width = " 11.1%";
    square.style.paddingBottom = " 11.1%";
    square.style.float = " left";
    square.setAttribute('class', 'square');

    body[0].appendChild(square);
  }
  return;
}


squaresColor();


setInterval(function() {
  squaresColor()
}, 2000);})();
