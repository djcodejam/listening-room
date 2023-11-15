
function changeBackground(imgs) {
  let expandImg = document.getElementById('expandedImg');
  // let imgText = document.getElementById('imgtext');
  expandImg.src = imgs.src;
  // imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = 'block';
}

let storedJsonString = localStorage.getItem('userChoiceItemKey');

// Convert the JSON string from quiz.html back into a playlist array
let storedArray = JSON.parse(storedJsonString);

// Now, 'storedArray' contains the array you stored in localStorage
console.log(storedArray);


function renderSongsListeningRoom() {
  let videoPlayer = document.getElementById('videoPlayer');
  let songsContainer = document.getElementById('consolePlaylist');
  let playlist = document.createElement('ul');
  songsContainer.appendChild(playlist);

  for (let i = 0; i < storedArray.length; i++) {
    let songList = document.createElement('li');
    let playButton = document.createElement('button');
    playButton.textContent = 'Play Song';
    // eslint-disable-next-line no-inner-declarations
    function playSong(){
      videoPlayer.src = storedArray[i].spotifySrc;
    }
    playButton.addEventListener('click', playSong);
    playButton.id = storedArray[i].name;
    playlist.appendChild(playButton);
    songList.textContent = storedArray[i].song;
    playlist.appendChild(songList);

  }
}




renderSongsListeningRoom();







