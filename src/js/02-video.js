import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
const playbackTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(currentTime, 1000));

if (!playbackTime) {
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(playbackTime);
}

function currentTime(evt) {
  const currentPlaybackTime = evt.seconds;
  localStorage.setItem('videoplayer-current-time', currentPlaybackTime);
}
