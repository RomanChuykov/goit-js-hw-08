
const iframe = document.querySelector('iframe');

import Player from '@vimeo/player';


const player = new Player(iframe, {
    id: 19231868,
    width: 640
});
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
player.on('timeupdate', function() {
   player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
    let time=seconds;
    localStorage.setItem("videoplayer-current-time", time);
    console.log(time)
}).catch(function(error) {
    // an error occurred
});
    
});


player.setCurrentTime(parseFloat(localStorage.getItem("videoplayer-current-time"))).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});