// Your JS goes here

(function() {
  let body = document.getElementsByTagName('body');
  let color = " black";
  let container = document.createElement('div');
  for (i=1; i<64; i++) {
    let square = document.createElement('div');
      if (color===" red") {
        square.style.backgroundColor = color;
        color = " black";
      } else {
        square.style.backgroundColor = color;
        color = " red";
      }
      square.style.width = " 11.1%";
      square.style.paddingBottom = " 11.1%";
      square.style.float = " left";
      body[0].appendChild(square);
  }
})();
