
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
    let listItem = document.createElement('li');
    // Create div container to pair song to play button
    let containerDiv = document.createElement('div');
    // Add class ID for styling later
    containerDiv.classList.add('playlist-item');
    // Used span so the song and button are inline
    let songList = document.createElement('span');
    let playButton = document.createElement('button');
    playButton.textContent = 'Play Song';
    // eslint-disable-next-line no-inner-declarations
    function playSong(){
      videoPlayer.src = storedArray[i].spotifySrc;
    }
    playButton.addEventListener('click', playSong);
    playButton.id = storedArray[i].name;
    containerDiv.appendChild(songList);
    songList.textContent = storedArray[i].song;
    containerDiv.appendChild(playButton);
    listItem.appendChild(containerDiv);
    playlist.appendChild(listItem);
  }
}




renderSongsListeningRoom();







