
const videoContainer = document.getElementById('videos');

//these are the video tags that we are targeting
const vid1 = document.querySelector('#videos div:first-child video');
const vid2 = document.querySelector('#videos div:nth-child(2) video');

let userChoiceVideos = [];

let state = {
  clicksSoFar: 0,
  clicksAllowed: 5,
  allBPMvids: [],
};

function BPMvids(name, link, type, song){
  this.name = name;
  this.link = link;
  this.song = song;
  this.type = type;
  state.allBPMvids.push(this);
}

let bpmCopy = state.allBPMvids;

new BPMvids('abstract', 'videos/abstract1.mp4', 'mp4', 'songName artist');
new BPMvids('iguana', 'videos/iguana.mp4', 'mp4', 'songName2 artist2');
new BPMvids('lights-abstract', 'videos/lights-abstract.mp4', 'mp4', 'songName3 artist3');
new BPMvids('octagon', 'videos/octagon.mp4', 'mp4', 'songName2 artist2');
new BPMvids('book', 'videos/test.mp4', 'mp4', 'songName2 artist2');

function renderBpmVideos(){

  function randomVid(){
    if (state.allBPMvids.length === 0){
      state.allBPMvids= [...bpmCopy];
    }

    const randomIndex = Math.floor(Math.random() * state.allBPMvids.length);
    const selectedVideo = state.allBPMvids[randomIndex];
    state.allBPMvids.splice(randomIndex, 1);
    userChoiceVideos.push(selectedVideo);
    console.log(userChoiceVideos);
    return selectedVideo;
  }

  let video1 = randomVid();
  let video2 = randomVid();

  vid1.src = video1.link;
  vid1.type = video1.type;

  vid2.src = video2.link;
  vid2.type = video2.type;
}
// let video1 = randomVid();
// // alreadyUsedVideos.push(video1);
// let video2 = randomVid();

// while (video2 === video1){
//   video2 = randomVid();
// }

// vid1.src = state.allBPMvids[video1].link;
// vid1.type = state.allBPMvids[video1].type;

// vid2.src = state.allBPMvids[video2].link;
// vid2.type = state.allBPMvids[video2].type;







// function eventListeners(){
videoContainer.addEventListener('click', handleClick);
// }
function handleClick(event){
  event.preventDefault();
  let userChoice= event.target.src;
  for (let i = 0; i < state.allBPMvids.length; i++) {
    if (userChoice === state.allBPMvids[i].src){
      userChoiceVideos.push(userChoice);
    }
  }
  console.log('second iteration', userChoiceVideos);
  // console.log('inside event handle click function');
  // console.log(event);
  // let bpmVideoChoice = event.target.name;
  // console.log(bpmVideoChoice);


  state.clicksSoFar++;

  if(state.clicksSoFar >= state.clicksAllowed){
    removeEventListener();
  } else {
    renderBpmVideos();
  }
}

function removeEventListener(){
  videoContainer.removeEventListener('click', handleClick);
}

// eventListeners();
renderBpmVideos();



