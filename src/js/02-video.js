import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const playbackTime = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', throttle(currentTime, 1000));

if (!playbackTime) {
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(playbackTime);
}

function currentTime(evt) {
  const currentPlaybackTime = evt.seconds;
  localStorage.setItem(STORAGE_KEY, currentPlaybackTime);
}
