console.log('words');
const videoContainer = document.getElementById('videos');
const vid1 = document.querySelector('#videos video:first-child');
const vid2 = document.querySelector('#videos video:second-child');

let state = {
  clicksSoFar: 0,
  clicksAllowed: 5,
  allBPMvids: [],
  allGenreVids:[]
};

function BPMvids(name, link, type){
  this.name = name;
  this.link = link;
  // this.song = song;
  this.type = type;
  state.allBPMvids.push(this);
}

new BPMvids('test-vid1', 'https://www.shutterstock.com/video/search/anger', 'mp4');
new BPMvids('test-vid2', 'test2', 'song2');
new BPMvids('test-vid3', 'test3', 'song3');

function renderBpmVideos(){

  function randomVid(){
    return Math.floor(Math.random() * state.allBPMvids.length);
  }
  let video1 = randomVid();
  let video2 = randomVid();

  while (video2 === video1){
    video2 = randomVid();
  }

  vid1.src = state.allBPMvids[video1].link;
  vid1.type = state.allBPMvids[video1].type;

  vid2.src = state.allBPMvids[video2].link;
  vid2.type = state.allBPMvids[video2].type;

}

function GenreVids(name, link, type){
  this.name = name;
  this.link = link;
  this.type = type;
}

new GenreVids('testGenre');

function renderGenreVideos(){
  function randomVid(){
    return Math.floor(Math.random() * state.allGenrevids.length);
  }

  let video1 = randomVid();
  let video2 = randomVid();

  while (video2 === video1){
    video2 = randomVid();
  }
  vid1.src = state.allGenrevids[video1].link;
  vid1.type = state.allGenrevids[video1].type;

  vid2.src = state.allGenrevids[video2].link;
  vid2.type = state.allGenrevids[video2].type;
}

function eventListeners(){
  videoContainer.addEventListener('click', handleClick );
}
function handleClick(event){
  let bpmVideoChoice = event.target.name;
  console.log(bpmVideoChoice);

  state.clicksSoFar++;

  if(state.clicksSoFar >= 3){
    renderGenreVideos();
  }
  if(state.clicksSoFar >= state.clicksAllowed){
    removeEventListener();
  }
}

function removeEventListener(){
  videoContainer.removeEventListener('click', handleClick);
}

eventListeners();
renderBpmVideos();


