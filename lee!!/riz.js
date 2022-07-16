console.log("welcome to lee");
let songIndex = 1;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogreesbar = document.getElementById('myprogreesbar');
let gift = document.getElementById('gift');
let mastersonginfo = document.getElementById('mastersonginfo');
let songItem = Array.from(document.getElementsByClassName('songItem'))

let songs = [
    { songName: "xxx tentacion", filePath: "1.mp3" },
    { songName: "jaan nisaar", filePath: "2.mp3" },
    { songName: "chokra jawan", filePath: "3.mp3" },
    { songName: "halka halka sarror", filePath: "4.mp3" },
    { songName: "brown munde", filePath: "5.mp3" },
    { songName: "iktara saibo", filePath: "6.mp3" },
    { songName: "kinna sona", filePath: "7.mp3" },
    { songName: "Namo namo", filePath: "8.mp3" },
    { songName: "Sakhyiyan", filePath: "9.mp3" },
    { songName: "Tera chehra", filePath: "10.mp3" },
    { songName: "Tera fetoor", filePath: "11.mp3" },
    { songName: "SpritisXkabira", filePath: "12.mp3" },
    { songName: "Sidhhu mosse wala", filePath: "13.mp3" },
    { songName: "warriyou", filePath: "14.mp3" },
    { songName: "Edm trance", filePath: "15.mp3" },
    { songName: "Naino ne Baandhi", filePath: "16.mp3" },
]


console.log('===-- Song Path -=', songs);
songItem.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByClassName(`songName`)[0].innerText = songs[i].songName;

})


//audioElement.play()
//handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gift.style.opacity = 1;
        console.log('===-- masterPlay audioElement  -=', audioElement);
    }
    else {

        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gift.style.opacity = 0;
        console.log('===-- 111 masterPlay audioElement  -=', audioElement);
    }
})

//listin to event 
audioElement.addEventListener('timeupdate', () => {

    //update seekbar

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myprogreesbar.value = progress;

});


myprogreesbar.addEventListener('change', () => {
    audioElement.currentTime = myprogreesbar.value * audioElement.duration / 100;
})
const makeallplays = () => {




    Array.from(document.getElementsByClassName(`songItemplay`)).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        console.log('===-- 2 -=');

    })
}



Array.from(document.getElementsByClassName(`songItemplay`)).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log('===-- 1 -=');
        makeallplays();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        audioElement.src = `${songIndex + 1}.mp3`;
        mastersonginfo.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gift.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })
});
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 16) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    console.log('===-- Next Song  -=');
    audioElement.src = `${songIndex + 1}.mp3`;
    mastersonginfo.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    console.log('===-- Next audioElement  -=', audioElement);


})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    mastersonginfo.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');




})

