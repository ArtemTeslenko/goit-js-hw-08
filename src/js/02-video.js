import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(obtainCurrTime, 1000));
player.on('play', onPlayClick);
player.on('ended', toBeginning);
player.on('seeking', toSetTime);

function obtainCurrTime() {
  player.getCurrentTime().then(function (time) {
    localStorage.setItem(CURRENT_TIME, time);
  });
}

function onPlayClick() {
  const currentTime = Number(localStorage.getItem(CURRENT_TIME));
  player.setCurrentTime(currentTime).then(function () {});
}

function toBeginning() {
  player.setCurrentTime(0).then(function () {});
}

function toSetTime() {
  player.getCurrentTime().then(function (time) {
    return time;
  });
}

console.log('qweewq');

//getDuration()
//getEnded()
//setLoop(loop: boolean)
// ----events
//ended
//seeking
