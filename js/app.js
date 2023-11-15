
// this is where we target the container that holds the video tags
const videoContainer = document.getElementById('videos');

//these are the video tags that we are targeting
const vid1 = document.querySelector('#videos div:first-child video');
const vid2 = document.querySelector('#videos div:nth-child(2) video');
const click1 = document.getElementById('click1');
const click2 = document.getElementById('click2');
let resultsContainer = document.getElementById('resultsContainer');

//this is the array that stores the user selected videos
let userChoiceVideos = [];


let state = {
  clicksSoFar: 0,
  clicksAllowed: 5,
  allBPMvids: [],
};

//This is the constructor for our Video/Options/Song
function BPMvids(name, link, type, song){
  this.name = name;
  this.link = link;
  this.song = song;
  this.type = type;
  state.allBPMvids.push(this);
}

new BPMvids('ca1', 'chris-videos/ca-discolights-medfast.mp4', 'mp4', 'Billie Jean by Michael Jackson');
new BPMvids('ca2', 'chris-videos/ca-mansillouete-slowmed.mp4', 'mp4', 'Lonely Day - by System of a Down');
new BPMvids('ca-4', 'chris-videos/ca-redyellow-fast.mp4', 'mp4', 'Testify - by Rage Against the Machine');
new BPMvids('ca-5', 'chris-videos/ca-yellowdiscoball-medfast.mp4', 'mp4', 'Whats the Use - by Mac Miller');
new BPMvids('lz1', 'lana-videos/lz-blue-waves-med.mp4', 'mp4', 'Way I Go - by Gordi');
new BPMvids('lz2', 'lana-videos/lz-pink-road-fast.mp4', 'mp4', 'Cosmic Girl - by Jamiroquai');
new BPMvids('lz3', 'lana-videos/lz-purple-chill-med.mp4', 'mp4', 'Dog Days are Over - by Florence + The Machine');
new BPMvids('lz4', 'lana-videos/lz-red-dramatic-med.mp4', 'mp4', 'I Need Never Get Old - by Nathaniel Rateliff & The Night Sweats');
new BPMvids('lz5', 'lana-videos/lz-yellow-spiral-fast.mp4', 'mp4', 'Peaceful Life - by Guts feat. Lorine Chia');
new BPMvids('ev1', 'errolvideos/ev-colors-med.mp4', 'mp4', 'I Wanna Dance with Somebod - by Whitney Houston');
new BPMvids('ev2', 'errolvideos/ev-metal-med.mp4', 'mp4', 'Enter Sandman - by Metallica');
new BPMvids('ev3', 'errolvideos/ev-piano-slow.mp4', 'mp4', '1812 Overture - by Tchaikosky');
new BPMvids('ev4', 'errolvideos/ev-tunnel-med.mp4', 'mp4', 'Suavemente - by Elvis Crespo');
new BPMvids('ev5', 'errolvideos/ev-waves-fast.mp4', 'mp4', 'Cool Down - by Kolohe Kai');
new BPMvids('ns1', 'natalie-videos/ns-aurora-slow.mp4', 'mp4', 'Step Out - Jose Gonzalez');
new BPMvids('ns2', 'natalie-videos/ns-blue-abstract-med.mp4', 'mp4', 'The Mist - Nine Sparks Riot');
new BPMvids('ns3', 'natalie-videos/ns-ferris-fast.mp4', 'mp4', 'Float - Janelle Monae');
new BPMvids('ns4', 'natalie-videos/ns-metro-fast.mp4', 'mp4', 'Whats Up? - FJORA');
new BPMvids('ns5', 'natalie-videos/ns-watch-slow.mp4', 'mp4', 'Exit Music For a Film - Radiohead');


//This is the array that holds a copy of the original array so that when the splice method in the
//renderBPMVideos function removes an item from the original, we still have a copy.
let bpmCopy = [...state.allBPMvids];

//This is the function that renders the videos on the page. **Note: this looks a lot like odd-duck
function renderBpmVideos(){

  function randomVid(){
    if (state.allBPMvids.length === 0){
      state.allBPMvids= [...bpmCopy];
    }

    const randomIndex = Math.floor(Math.random() * state.allBPMvids.length);
    const selectedVideo = state.allBPMvids[randomIndex];
    state.allBPMvids.splice(randomIndex, 1);
    return selectedVideo;
  }

  let video1 = randomVid();
  let video2 = randomVid();

  vid1.src = video1.link;
  vid1.name = video1.name;
  vid1.song = video1.song;
  vid1.type = video1.type;

  vid2.src = video2.link;
  vid2.song = video2.song;
  vid2.name = video2.name;
  vid2.type = video2.type;
}

//This is the event listener for the videos. ** Note that it is not in a function so it adds the event
// listener on page load without it being called
//videoContainer.addEventListener('click', handleClick);

click1.addEventListener('click', handleClick);
click2.addEventListener('click', handleClick);

// This is the function to handle the click event for videoContainer
function handleClick(event){
  event.preventDefault();
  let userChoice = event.target;
  let closestVideo = userChoice.closest('div').querySelector('video');
  let closestVideoSong = closestVideo.song;
  console.log('closest video', closestVideo.song);

  //This for loop, loops through the entire bpmCopy array and sets userChoice and sends it to the
  //userChoiceVideos array
  for (let i = 0; i < bpmCopy.length; i++) {
    if (closestVideoSong === bpmCopy[i].song){
      userChoiceVideos.push(closestVideoSong);
      console.log('the whole user choice array', userChoiceVideos);
      break;
    }
  }

  state.clicksSoFar++;

  //This stops the event listener once the user clicks 5 times
  if(state.clicksSoFar === state.clicksAllowed){
    removeEventListener();
    renderResults();
  } else {
    renderBpmVideos();
  }
}

function removeEventListener(){
  click1.removeEventListener('click', handleClick);
  click2.removeEventListener('click', handleClick);
}

function renderResults() {
  let playlist = document.createElement('ul');
  resultsContainer.appendChild(playlist);

  for (let i = 0; i < userChoiceVideos.length; i++) {
    let songList = document.createElement('li');
    playlist.appendChild(songList);
    songList.textContent = userChoiceVideos[i];

    let jsonString = JSON.stringify(userChoiceVideos);
    localStorage.setItem('userChoiceItemKey', jsonString);
  }

}


renderBpmVideos();



