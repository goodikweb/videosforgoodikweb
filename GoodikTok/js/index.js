function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function ChangeVideo() {

    let video = getRandomInt(4);
    console.log(video);
    
    if (video == 1) {
        document.getElementById('myIframe').src = 'https://goodikweb.github.io/videosforgoodikweb/011192929191928281b.mp4';
    }
    if (video == 0) {
        document.getElementById('myIframe').src = 'https://goodikweb.github.io/videosforgoodikweb/68a7fe3b3791da689c207a0dcaa31c3e.mp4';
    }
    if (video == 2) {
        document.getElementById('myIframe').src = 'https://goodikweb.github.io/videosforgoodikweb/2939293828382783727asdwe.mp4';
    }
    if (video == 3) {
        document.getElementById('myIframe').src = 'https://goodikweb.github.io/videosforgoodikweb/55474737264762x.mp4';
    }

    
}

