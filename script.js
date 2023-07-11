const beatName = document.getElementById("beat-name");
var A = document.getElementById("A");
var S = document.getElementById("S");
var D = document.getElementById("D");
var F = document.getElementById("F");
var G = document.getElementById("G");
var H = document.getElementById("H");
var J = document.getElementById("J");
var K = document.getElementById("K");
var L = document.getElementById("L");
var img1 = document.getElementById('float-img1');
var img2 = document.getElementById('float-img2');
var img3 = document.getElementById('float-img3');
var img4 = document.getElementById('float-img4');
var img5 = document.getElementById('float-img5');
var img6 = document.getElementById('float-img6');

console.log("beatName");
document.body.addEventListener(
  "keydown",
  (event) => {
    let keyid = event.keyCode;
    //   console.log(`${event.key}`);
    if (keyid === 65) {
      Akey();
      A.style.scale = "1.1";
      A.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
      img1.style.display="block";
      img1.classList.add('active-img')
      
    } 
    
    else if (keyid === 83) {
      Skey();
      S.style.scale = "1.1";
      S.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
      img2.style.display="block";
      img2.classList.add('active-img')
    } 
    
    else if (keyid === 68) {  
      Dkey()
      D.style.scale = "1.1";
      D.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
      img3.style.display="block";
      img3.classList.add('active-img')
    }
    
    else if (keyid === 70) {
      Fkey();
      F.style.scale = "1.1";
      F.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
      img4.style.display="block";
      img4.classList.add('active-img')
    } 
    
    else if (keyid === 71) {
      Gkey();
      G.style.scale = "1.1";
      G.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
      img5.style.display="block";
      img5.classList.add('active-img')
    }
    
    else if (keyid === 72) {
      Hkey();
      H.style.scale = "1.1";
      H.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
      img6.style.display="block";
      img6.classList.add('active-img')
    }
    
    else if (keyid === 74){
      Jkey();
      J.style.scale = "1.1";
      J.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
      img5.style.display="block";
      img5.classList.add('active-img')
    }
    
    else if (keyid === 75) {
      Kkey();
      K.style.scale = "1.1";
      K.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
      img4.style.display="block";
      img4.classList.add('active-img')
    }
    
    else if (keyid === 76) {
      Lkey();
      L.style.scale = "1.1";
      L.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
      img3.style.display="block";
      img3.classList.add('active-img')
    } else {
      console.log("different key pressed");
      showBeat();
    }
  },
  true
);

document.body.addEventListener(
    "keyup",
    (event) => {
      let keyid = event.keyCode;
      //   console.log(`${event.key}`);
      if (keyid === 65) {
        console.log("a was released");
        var boom = new Audio("./assets/DrumsetAudioFiles/boom.wav");
        boom.pause();
        A.style.scale = "1";
        A.style.boxShadow = "none";
        setTimeout(function(){
          img1.style.display="none";
        },3000)

      } 
      
      else if (keyid === 83) {
        console.log("s was released");
        var clap = new Audio("./assets/DrumsetAudioFiles/clap.wav");
        clap.pause();
        S.style.scale = "1";
        S.style.boxShadow = "none";
        setTimeout(function(){
          img2.style.display="none";
        },3000)
      } 
      
      else if (keyid === 68) {
        console.log("d was pressed");
        var hihat = new Audio("./assets/DrumsetAudioFiles/hihat.wav");
        hihat.pause();
        D.style.scale = "1";
        D.style.boxShadow = "none";
        setTimeout(function(){
          img3.style.display="none";
        },3000)
      }
      
      else if (keyid === 70) {
        console.log("f was pressed");
        var kick = new Audio("./assets/DrumsetAudioFiles/kick.wav");
        kick.pause();
        F.style.scale = "1";
        F.style.boxShadow = "none";
        setTimeout(function(){
          img4.style.display="none";
        },3000)
      } 
      
      else if (keyid === 71) {
        console.log("g was pressed");
        var G = document.getElementById("G");
        var openhat = new Audio('./assets/DrumsetAudioFiles/openhat.wav')
        openhat.pause();
        G.style.scale = "1";
        G.style.boxShadow = "none";
        setTimeout(function(){
          img5.style.display="none";
        },3000)
      }
      
      else if (keyid === 72) {
        console.log("h was pressed");
        var ride = new Audio("./assets/DrumsetAudioFiles/ride.wav");
        ride.pause();
        H.style.scale = "1";
        H.style.boxShadow = "none";
        setTimeout(function(){
          img6.style.display="none";
        },3000)
      }
      
      else if (keyid === 74){
        console.log("j was pressed");
        var snare = new Audio("./assets/DrumsetAudioFiles/snare.wav");
        snare.play();
        J.style.scale = "1";
        J.style.boxShadow = "none";
        setTimeout(function(){
          img5.style.display="none";
        },3000)
      }
      
      else if (keyid === 75) {
        console.log("k was pressed");
        var tink = new Audio("./assets/DrumsetAudioFiles/tink.wav");
        tink.pause();
        K.style.scale = "1";
        K.style.boxShadow = "none";
        setTimeout(function(){
          img4.style.display="none";
        },3000)
      }
      
      else if (keyid === 76) {
        console.log("l was pressed");
        var tom = new Audio("./assets/DrumsetAudioFiles/tom.wav");
        tom.pause();
        L.style.scale = "1";
        L.style.boxShadow = "none";
        setTimeout(function(){
          img3.style.display="none";
        },3000)
      } else {
        console.log("different key pressed");
      }
    },
    true
  );
  
  function Akey() {
    var boom = new Audio("./assets/DrumsetAudioFiles/boom.wav");
    boom.play();
    beatName.innerText = '"boom"';
    showBeat(); 
  }
  function Skey() {
   
    var clap = new Audio("./assets/DrumsetAudioFiles/clap.wav");
    clap.play();
    beatName.innerText = '"clap"';
    showBeat();
    
  }
  function Dkey() {
    var hihat = new Audio("./assets/DrumsetAudioFiles/hihat.wav");
    hihat.play();
    beatName.innerText = '"hihat"';
    showBeat();
    
  }
  function Fkey(){
    var kick = new Audio("./assets/DrumsetAudioFiles/kick.wav");
    kick.play();
    beatName.innerText = '"kick"';
    showBeat();
  }
  
  function Gkey() {
    var openhat = new Audio('./assets/DrumsetAudioFiles/openhat.wav')
    openhat.play();
    beatName.innerText = '"openhat"';
    showBeat();
    
  }
  function Hkey() {
    var ride = new Audio("./assets/DrumsetAudioFiles/ride.wav");
    ride.play();
    beatName.innerText = '"ride"';
    showBeat();
  }
  function Jkey() {
    var snare = new Audio("./assets/DrumsetAudioFiles/snare.wav");
    snare.play();
    beatName.innerText = '"snare"';
    showBeat();
  }
  function Kkey() {
    var tink = new Audio("./assets/DrumsetAudioFiles/tink.wav");
    tink.play();
    beatName.innerText = '"tink"';
    showBeat();
  }
  function Lkey() {
    var tom = new Audio("./assets/DrumsetAudioFiles/tom.wav");
    tom.play();
    beatName.innerText = '"tom"';
    showBeat()
  }
  function showBeat() {
    setTimeout(function(){
    beatName.innerText = '"beat"';
    console.log(beatName.innerText)
     },3000);
    
  }
