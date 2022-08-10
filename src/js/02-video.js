import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(obtainCurrTime, 1000));

function obtainCurrTime() {
  player.getCurrentTime().then(time => {
    localStorage.setItem(CURRENT_TIME, time);
    console.log(localStorage.getItem(CURRENT_TIME));
    // console.log(time);
    // console.log(typeof time);
  });
}

//JSON.stringify
//JSON.parse
