function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function (e) {
  if (e.key === 'ArrowDown' || e.key === 'Down') {
    const currentTop = extraPos(player.style.top);
    player.style.top = `${currentTop + 50}px`;
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    const currentTop = extraPos(player.style.top);
    player.style.top = `${currentTop - 50}px`;
  } else if (e.key === 'ArrowRight' || e.key === 'Right') {
    player.style.transform = 'scale(1,1)';
    const currentLeft = extraPos(player.style.left);
    player.style.left = `${currentLeft + 50}px`;
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    player.style.transform = 'scale(-1,1)';
    const currentLeft = extraPos(player.style.left);
    player.style.left = `${currentLeft - 50}px`;
  }

  if (isTouching(player, coin)) {
    moveCoin();
  }
});

const extraPos = (position) => {
  if (!position) return 10;
  return parseInt(position.slice(0, -2));
};

const moveCoin = () => {
  let width = Math.floor(Math.random() * window.innerWidth);
  let height = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${height}px`;
  coin.style.left = `${width}px`;
};
