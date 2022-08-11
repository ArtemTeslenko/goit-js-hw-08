import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(obtainCurrTime, 1000));
player.on('play', onPlayClick);

function obtainCurrTime() {
  player.getCurrentTime().then(function (time) {
    localStorage.setItem(CURRENT_TIME, time);
  });
}

function onPlayClick() {
  let currentTime = Number(localStorage.getItem(CURRENT_TIME));
  player.setCurrentTime(currentTime).then(function () {});
}
