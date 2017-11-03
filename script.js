// Your JS goes here

(function() {
  let body = document.getElementsByTagName('body');
  let colorMarker = " black";
  let gradient = 0;
  let rowCount = 0;
  for (i=1; i<64; i++) {
    if (rowCount===9) {
      gradient += 31;
      rowCount = 0;
    }
    rowCount = rowCount + 1;
    let square = document.createElement('div');
      if (colorMarker===" red") {
        square.style.backgroundColor = ` rgb( ${255-gradient}, 0, 0)`;
        colorMarker = " black";
      } else {
        square.style.backgroundColor = ` rgb( ${gradient}, ${gradient}, ${gradient})`;
        colorMarker = " red";
      }
      square.style.width = " 11.1%";
      square.style.paddingBottom = " 11.1%";
      square.style.float = " left";
      body[0].appendChild(square);
  }
})();
