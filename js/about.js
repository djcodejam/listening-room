let img = document.getElementById('djImageMove');

let positionX = 50;
let positionY = 50;

function animate() {
  positionX += 2;
  positionY += 1;

  img.style.left = positionX + 'px';
  img.style.top = positionY + 'px';

  requestAnimationFrame(animate);
}

animate();
