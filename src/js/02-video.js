// Артем, прошу звернути увагу на 13 рядок. Ще не звик читати документації, може щось не так зрозумів. У мене був баг, перемотка відео спрацьовувала не з першого разу, як я зрозумів з прочитаного - подія seeking реагує на перетягування користувачем повзунка перемотки, а подія seeked на клік миші у певному місці полоси завнтаження відео. Я зняв прослуховувач події play, при перемотці і проблема зникла, але я не зовсім зрозумів, яким чином вона заважала перемотувати відео.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(obtainCurrTime, 1000));
player.on('play', onPlayClick);
player.on('ended', toBeginning);
player.on('seeked', removePlayListener);

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

function removePlayListener() {
  player.off('play');
}
