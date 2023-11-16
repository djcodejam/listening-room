let img = document.getElementById('djImageMove');

let img2 = document.getElementById('djImageMove2');
let img3 = document.getElementById('djImageMove3');
let img4 = document.getElementById('djImageMove4');

let button = document.getElementById('dropTheBeat');

button.addEventListener('click', animate);


let positionX = -300;
let positionY = -500;

function animate() {

  positionX += 2;
  positionY += 4;
  img.style.display = 'block';
  img.style.left = positionX + 'px';
  img.style.top = positionY + 'px';

  img2.style.display = 'block';
  img2.style.left = positionX + 'px';
  img2.style.top = positionY + 'px';

  img3.style.display = 'block';
  img3.style.left = positionX + 'px';
  img3.style.top = positionY + 'px';

  img4.style.display = 'block';
  img4.style.left = positionX + 'px';
  img4.style.top = positionY + 'px';

  if (positionY < 100){

    requestAnimationFrame(animate);
  }

}

