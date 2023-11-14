
// this is where we target the container that holds the video tags
const videoContainer = document.getElementById('videos');

//these are the video tags that we are targeting
const vid1 = document.querySelector('#videos div:first-child video');
const vid2 = document.querySelector('#videos div:nth-child(2) video');

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

new BPMvids('ca1', 'chris-videos/ca-discolights-medfast.mp4', 'mp4', 'Michael Jackson - Billie Jean');
new BPMvids('ca2', 'chris-videos/ca-mansillouete-slowmed.mp4', 'mp4', 'System of a Down - Lonely Day');
new BPMvids('ca-4', 'chris-videos/ca-redyellow-fast.mp4', 'mp4', 'Rage Against the Machine - Testify');
new BPMvids('ca-5', 'chris-videos/ca-yellowdiscoball-medfast.mp4', 'mp4', 'Mac Miller - Whats the Use');

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
videoContainer.addEventListener('click', handleClick);

// This is the function to handle the click event for videoContainer
function handleClick(event){
  event.preventDefault();
  let userChoice= event.target.song;
  console.log('user choice', userChoice);

  //This for loop, loops through the entire bpmCopy array and sets userChoice and sends it to the
  //userChoiceVideos array
  for (let i = 0; i < bpmCopy.length; i++) {
    if (userChoice === bpmCopy[i].song){
      userChoiceVideos.push(userChoice);
      console.log('the whole user choice array', userChoiceVideos);
      break;
    }
  }

  state.clicksSoFar++;

  //This stops the event listener once the user clicks 5 times
  if(state.clicksSoFar >= state.clicksAllowed){
    removeEventListener();
  } else {
    renderBpmVideos();
  }
}

function removeEventListener(){
  videoContainer.removeEventListener('click', handleClick);
}

renderBpmVideos();



