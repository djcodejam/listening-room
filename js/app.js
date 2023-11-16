
// this is where we target the container that holds the video tags


//these are the video tags that we are targeting
const vid1 = document.querySelector('#videos div:first-child video');
const vid2 = document.querySelector('#videos div:nth-child(2) video');
const click1 = document.getElementById('click1');
const click2 = document.getElementById('click2');

//this is the array that stores the user selected videos
let userChoiceVideos = [];


let state = {
  clicksSoFar: 0,
  clicksAllowed: 5,
  allBPMvids: [],
};

//This is the constructor for our Video/Options/Song
function BPMvids(name, link, type, song, spotifySrc){
  this.name = name;
  this.link = link;
  this.song = song;
  this.type = type;
  this.spotifySrc = spotifySrc;
  state.allBPMvids.push(this);
}

new BPMvids('ca1', 'chris-videos/ca-discolights-medfast.mp4', 'mp4', 'Billie Jean by Michael Jackson', 'https://open.spotify.com/embed/track/5ChkMS8OtdzJeqyybCc9R5?utm_source=generator');
new BPMvids('ca2', 'chris-videos/ca-mansillouete-slowmed.mp4', 'mp4', 'Lonely Day - by System of a Down', 'https://open.spotify.com/embed/track/1VNWaY3uNfoeWqb5U8x2QX?utm_source=generator');
new BPMvids('ca-4', 'chris-videos/ca-redyellow-fast.mp4', 'mp4', 'Testify - by Rage Against the Machine', 'https://open.spotify.com/embed/track/7lmeHLHBe4nmXzuXc0HDjk?utm_source=generator');
new BPMvids('ca-5', 'chris-videos/ca-yellowdiscoball-medfast.mp4', 'mp4', 'Whats the Use - by Mac Miller', 'https://open.spotify.com/embed/track/2dgrYdgguVZKeCsrVb9XEs?utm_source=generator');
new BPMvids('lz1', 'lana-videos/lz-blue-waves-med.mp4', 'mp4', 'Way I Go - by Gordi', 'https://open.spotify.com/embed/track/5fMTQPtPqEGNCI9gDGTruc?utm_source=generator');
new BPMvids('lz2', 'lana-videos/lz-pink-road-fast.mp4', 'mp4', 'Cosmic Girl - by Jamiroquai', 'https://open.spotify.com/embed/track/2fiRJjWb9uk21Gva6oHpKs?utm_source=generator');
new BPMvids('lz3', 'lana-videos/lz-purple-chill-med.mp4', 'mp4', 'Dog Days are Over - by Florence + The Machine', 'https://open.spotify.com/embed/track/1YLJVmuzeM2YSUkCCaTNUB?utm_source=generator');
new BPMvids('lz4', 'lana-videos/lz-red-dramatic-med.mp4', 'mp4', 'I Need Never Get Old - by Nathaniel Rateliff & The Night Sweats', 'https://open.spotify.com/embed/track/6YfEvtwpQwGAWZBWzNmoIw?utm_source=generator');
new BPMvids('lz5', 'lana-videos/lz-yellow-spiral-fast.mp4', 'mp4', 'Peaceful Life - by Guts feat. Lorine Chia', 'https://open.spotify.com/embed/track/1oqcT3rKnuyGf7gcQU8IXx?utm_source=generator');
new BPMvids('ev1', 'errolvideos/ev-colors-med.mp4', 'mp4', 'I Wanna Dance with Somebody - by Whitney Houston', 'https://open.spotify.com/embed/track/2tUBqZG2AbRi7Q0BIrVrEj?utm_source=generator');
new BPMvids('ev2', 'errolvideos/ev-metal-med.mp4', 'mp4', 'Enter Sandman - by Metallica', 'https://open.spotify.com/embed/track/3VqHuw0wFlIHcIPWkhIbdQ?utm_source=generator');
new BPMvids('ev3', 'errolvideos/ev-piano-slow.mp4', 'mp4', '1812 Overture - by Tchaikosky', 'https://open.spotify.com/embed/track/6oWacAPUt8LMXqRkEk2MNg?utm_source=generator');
new BPMvids('ev4', 'errolvideos/ev-tunnel-med.mp4', 'mp4', 'Suavemente - by Elvis Crespo', 'https://open.spotify.com/embed/track/7cpFmkNmh3MM0WqXPSbs9f?utm_source=generator');
new BPMvids('ev5', 'errolvideos/ev-waves-fast.mp4', 'mp4', 'Cool Down - by Kolohe Kai', 'https://open.spotify.com/embed/track/6uJaTP7EbaHXJ5PM09s0uV?utm_source=generator');
new BPMvids('ns1', 'natalie-videos/ns-aurora-slow.mp4', 'mp4', 'Step Out - by Jose Gonzalez', 'https://open.spotify.com/embed/track/0P0vjAUzsleEw8X4aZcOrg?utm_source=generator');
new BPMvids('ns2', 'natalie-videos/ns-blue-abstract-med.mp4', 'mp4', 'The Mist - by Nine Sparks Riot', 'https://open.spotify.com/embed/track/70LntKgk4Uvlf9428pkvtH?utm_source=generator');
new BPMvids('ns3', 'natalie-videos/ns-ferris-fast.mp4', 'mp4', 'Float - by Janelle Monae', 'https://open.spotify.com/embed/track/2JIY6nN5kkkfNz0TckPqYu?utm_source=generator');
new BPMvids('ns4', 'natalie-videos/ns-metro-fast.mp4', 'mp4', 'Whats Up? - by FJORA', 'https://open.spotify.com/embed/track/2to3xwIngqZI0PTKTcteTv?utm_source=generator');
new BPMvids('ns5', 'natalie-videos/ns-watch-slow.mp4', 'mp4', 'Exit Music For a Film - by Radiohead', 'https://open.spotify.com/embed/track/0z1o5L7HJx562xZSATcIpY?utm_source=generator');


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
  vid1.spotifySrc = video1.spotifySrc;

  vid2.src = video2.link;
  vid2.song = video2.song;
  vid2.name = video2.name;
  vid2.type = video2.type;
  vid2.spotifySrc = video2.spotifySrc;

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
  let closestSpotify = closestVideo.spotifySrc;
  let closestName = closestVideo.name;
  let songAndSpotify = {song: closestVideoSong, spotifySrc: closestSpotify, name: closestName};
  console.log('song and spotify src object', songAndSpotify);

  //This for loop, loops through the entire bpmCopy array and sets userChoice and sends it to the
  //userChoiceVideos array
  for (let i = 0; i < bpmCopy.length; i++) {
    if (songAndSpotify.song === bpmCopy[i].song){
      userChoiceVideos.push(songAndSpotify);
      let jsonString = JSON.stringify(userChoiceVideos);
      localStorage.setItem('userChoiceItemKey', jsonString);
      console.log('the whole user choice array', userChoiceVideos);
      break;
    }
  }

  state.clicksSoFar++;

  //This stops the event listener once the user clicks 5 times
  if(state.clicksSoFar === state.clicksAllowed){
    redirectToListeningRoom();
    removeEventListener();
  } else {
    renderBpmVideos();
  }
}

function removeEventListener(){
  click1.removeEventListener('click', handleClick);
  click2.removeEventListener('click', handleClick);
}


function redirectToListeningRoom() {
  const host = window.location.host;
  const redirectUrl = `http://${host}/listening.html`;

  // Using if statement
  if (redirectUrl) {
    window.location.href = redirectUrl;
  } else {
    window.location.href = 'https://djcodejam.github.io/listening-room/listening.html';
  }

  // Using ternary operator
  // window.location.href = redirectUrl ? redirectUrl : 'https://djcodejam.github.io/listening-room/listening.html';

  // Shortened version using nullish coalescing operator (available in ES2020 and later)
  // window.location.href = redirectUrl ?? 'https://djcodejam.github.io/listening-room/listening.html';
}


// function redirectToListeningRoom(){
//   const host = window.location.host ;
//   window.location.href = `http://${host}/listening.html` || 'https://djcodejam.github.io/listening-room/listening.html';
// }


renderBpmVideos();



