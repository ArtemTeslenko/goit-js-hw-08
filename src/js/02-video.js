//З приводу перевірки, я не став виводити повідомлення про помилку, мені здається, що юзеру воно мало що дасть, просто, якщо отримали не коректні дані, то відео починається з початку рядок 25-26.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

setTime();
player.on('timeupdate', throttle(obtainCurrTime, 1000));

function obtainCurrTime() {
  player.getCurrentTime().then(function (time) {
    localStorage.setItem(CURRENT_TIME, time);
  });
}

function setTime() {
  const currentTime = Number(localStorage.getItem(CURRENT_TIME));

  try {
    player.setCurrentTime(currentTime);
  } catch (error) {
    // window.alert(error.name, error.message);
    player.setCurrentTime(currentTime);
  }
}
