const beatName = document.getElementById("beat-name");
console.log("beatName");
document.body.addEventListener(
  "keydown",
  (event) => {
    let keyid = event.keyCode;
    //   console.log(`${event.key}`);
    if (keyid === 65) {
      console.log("a was pressed");
      Akey();
     
    } 
    
    else if (keyid === 83) {
      console.log("s was pressed");
      Skey();
    } 
    
    else if (keyid === 68) {
      console.log("d was pressed");
      Dkey()
    }
    
    else if (keyid === 70) {
      console.log("f was pressed");
      Fkey();
    } 
    
    else if (keyid === 71) {
      console.log("g was pressed");
      Gkey();
    }
    
    else if (keyid === 72) {
      console.log("h was pressed");
      Hkey();
    }
    
    else if (keyid === 74){
      console.log("j was pressed");
      Jkey();
     
    }
    
    else if (keyid === 75) {
      console.log("k was pressed");
      Kkey();
    }
    
    else if (keyid === 76) {
      console.log("l was pressed");
      Lkey();
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
        var A = document.getElementById("A");
        var boom = new Audio("./assets/DrumsetAudioFiles/boom.wav");
        boom.pause();
        A.style.scale = "1";
        A.style.boxShadow = "none";
      } 
      
      else if (keyid === 83) {
        console.log("s was released");
        var S = document.getElementById("S");
        var clap = new Audio("./assets/DrumsetAudioFiles/clap.wav");
        clap.pause();
        S.style.scale = "1";
        S.style.boxShadow = "none";
      } 
      
      else if (keyid === 68) {
        console.log("d was pressed");
        var D = document.getElementById("D");
        var hihat = new Audio("./assets/DrumsetAudioFiles/hihat.wav");
        hihat.pause();
        D.style.scale = "1";
        D.style.boxShadow = "none";
      }
      
      else if (keyid === 70) {
        console.log("f was pressed");
        var F = document.getElementById("F");
        var kick = new Audio("./assets/DrumsetAudioFiles/kick.wav");
        kick.pause();
        F.style.scale = "1";
        F.style.boxShadow = "none";
      } 
      
      else if (keyid === 71) {
        console.log("g was pressed");
        var G = document.getElementById("G");
        var openhat = new Audio('./assets/DrumsetAudioFiles/openhat.wav')
        openhat.pause();
        G.style.scale = "1";
        G.style.boxShadow = "none";
      }
      
      else if (keyid === 72) {
        console.log("h was pressed");
        var H = document.getElementById("H");
        var ride = new Audio("./assets/DrumsetAudioFiles/ride.wav");
        ride.pause();
        H.style.scale = "1";
        H.style.boxShadow = "none";
      }
      
      else if (keyid === 74){
        console.log("j was pressed");
        var J = document.getElementById("J");
        var snare = new Audio("./assets/DrumsetAudioFiles/snare.wav");
        snare.play();
        J.style.scale = "1";
        J.style.boxShadow = "none";
      }
      
      else if (keyid === 75) {
        console.log("k was pressed");
        var K = document.getElementById("K");
        var tink = new Audio("./assets/DrumsetAudioFiles/tink.wav");
        tink.pause();
        K.style.scale = "1";
        K.style.boxShadow = "none";
      }
      
      else if (keyid === 76) {
        console.log("l was pressed");
        var L = document.getElementById("L");
        var tom = new Audio("./assets/DrumsetAudioFiles/tom.wav");
        tom.pause();
        L.style.scale = "1";
        L.style.boxShadow = "none";
      } else {
        console.log("different key pressed");
      }
    },
    true
  );
  
  function Akey() {
    var A = document.getElementById("A");
    A.style.scale = "1.1";
    A.style.boxShadow = "0px 0px 11px 1px0 rgba(148,144,214,1)";
    var boom = new Audio("./assets/DrumsetAudioFiles/boom.wav");
    boom.play();
    beatName.innerText = '"boom"';
    showBeat();   
  }
  function Skey() {
    var S = document.getElementById("S");
    S.style.scale = "1.1";
    S.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    var clap = new Audio("./assets/DrumsetAudioFiles/clap.wav");
    clap.play();
    beatName.innerText = '"clap"';
    showBeat();
    
  }
  function Dkey() {
    var D = document.getElementById("D");
    D.style.scale = "1.1";
    D.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    var hihat = new Audio("./assets/DrumsetAudioFiles/hihat.wav");
    hihat.play();
    beatName.innerText = '"hihat"';
    showBeat();
    
  }
  function Fkey(){
    var F = document.getElementById("F");
    F.style.scale = "1.1";
    F.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    var kick = new Audio("./assets/DrumsetAudioFiles/kick.wav");
    kick.play();
    beatName.innerText = '"kick"';
    showBeat();
  }
  
  function Gkey() {
    var G = document.getElementById("G");
    G.style.scale = "1.1";
    G.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    var openhat = new Audio('./assets/DrumsetAudioFiles/openhat.wav')
    openhat.play();
    beatName.innerText = '"openhat"';
    showBeat();
    
  }
  function Hkey() {
    var H = document.getElementById("H");
    H.style.scale = "1.1";
    H.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    var ride = new Audio("./assets/DrumsetAudioFiles/ride.wav");
    ride.play();
    beatName.innerText = '"ride"';
    showBeat();
  }
  function Jkey() {
    var J = document.getElementById("J");
    J.style.scale = "1.1";
    J.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    var snare = new Audio("./assets/DrumsetAudioFiles/snare.wav");
    snare.play();
    beatName.innerText = '"snare"';
    showBeat();
  }
  function Kkey() {
    var K = document.getElementById("K");
    K.style.scale = "1.1";
    K.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    var tink = new Audio("./assets/DrumsetAudioFiles/tink.wav");
    tink.play();
    beatName.innerText = '"tink"';
    showBeat();
  }
  function Lkey() {
    var L = document.getElementById("L");
    L.style.scale = "1.1";
    L.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
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