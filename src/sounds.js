var audioFiles = ["assets/boom.mp3", "assets/drum-roll.mp3"];

function preloadAudio(url) {
  var audio = new Audio();
  audio.addEventListener("canplaythrough", loadedAudio, false);
  audio.src = url;
}

var loaded = 0;
function loadedAudio() {
  // this will be called every time an audio file is loaded
  // we keep track of the loaded files vs the requested files
  loaded++;
  if (loaded == audioFiles.length) {
    // all have loaded
    init();
  }
}

var player = document.getElementById("player");
function play(index) {
  player.src = audioFiles[index];
  player.play();
}
