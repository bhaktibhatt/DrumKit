document.body.addEventListener(
  "keydown",
  (event) => {
    let keyid = event.keyCode;
    //   console.log(`${event.key}`);
    if (keyid === 65) {
      console.log("a was pressed");
      var A = document.getElementById("A");
      var boom = new Audio("./assets/DrumsetAudioFiles/boom.wav");
      boom.play();
      A.style.scale = "1.1";
      A.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    } 
    
    else if (keyid === 83) {
      console.log("s was pressed");
      var S = document.getElementById("S");
      var clap = new Audio("./assets/DrumsetAudioFiles/clap.wav");
      clap.play();
      S.style.scale = "1.1";
      S.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    } 
    
    else if (keyid === 68) {
      console.log("d was pressed");
      var D = document.getElementById("D");
      var hihat = new Audio("./assets/DrumsetAudioFiles/hihat.wav");
      hihat.play();
      D.style.scale = "1.1";
      D.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    }
    
    else if (keyid === 70) {
      console.log("f was pressed");
      var F = document.getElementById("F");
      var kick = new Audio("./assets/DrumsetAudioFiles/kick.wav");
      kick.play();
      F.style.scale = "1.1";
      F.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    } 
    
    else if (keyid === 71) {
      console.log("g was pressed");
      var G = document.getElementById("G");
      var openhat = new Audio('./assets/DrumsetAudioFiles/openhat.wav')
      openhat.play();
      G.style.scale = "1.1";
      G.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    }
    
    else if (keyid === 72) {
      console.log("h was pressed");
      var H = document.getElementById("H");
      var ride = new Audio("./assets/DrumsetAudioFiles/ride.wav");
      ride.play();
      H.style.scale = "1.1";
      H.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    }
    
    else if (keyid === 74){
      console.log("j was pressed");
      var J = document.getElementById("J");
      var snare = new Audio("./assets/DrumsetAudioFiles/snare.wav");
      snare.play();
      J.style.scale = "1.1";
      J.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    }
    
    else if (keyid === 75) {
      console.log("k was pressed");
      var K = document.getElementById("K");
      var tink = new Audio("./assets/DrumsetAudioFiles/tink.wav");
      tink.play();
      K.style.scale = "1.1";
      K.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    }
    
    else if (keyid === 76) {
      console.log("l was pressed");
      var L = document.getElementById("L");
      var tom = new Audio("./assets/DrumsetAudioFiles/tom.wav");
      tom.play();
      L.style.scale = "1.1";
      L.style.boxShadow = "0px 0px 11px 1px rgba(148,144,214,1)";
    } else {
      console.log("different key pressed");
    }
  },
  true
);