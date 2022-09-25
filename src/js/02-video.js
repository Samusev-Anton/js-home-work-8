import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time'))).then(function(seconds) {
})

player.on('play', function(evt) {
    });

player.on('timeupdate', throttle(onLisnerPlayer, 1000));
 
function onLisnerPlayer(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
 }




